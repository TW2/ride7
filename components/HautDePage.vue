<script setup lang="ts">
/* IMPORT DE STORES PINIA */
import {useEasyPages} from "~/stores/easypages";
import {useEasyLog} from "~/stores/easylog";
import {useVery} from "~/stores/usevery";

/* INTERACTION AVEC LES STORES PINIA */
const donnees = useEasyPages()
const logging = useEasyLog()
const very = useVery()
donnees.set_user_name('visiteur')
donnees.set_page_name('Accueil')

/* IMPORT DES LIBRAIRIES */
import Very from "~~/components/Very.vue";
import type { TabsItem } from '@nuxt/ui'
import type { NavigationMenuItem } from '@nuxt/ui'
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const toast = useToast()

// Menu du haut de page (fixed header)
const items = ref<NavigationMenuItem[]>([
  {
    label: 'Chuushin',
    icon: 'i-lucide-house',
    children: [
      {
        label: 'Nouvelles',
        icon: 'i-lucide-book-open',
        description: 'Consultez les derniers articles.',
        to: '/'
      },
      {
        label: 'Projets',
        icon: 'i-lucide-cloud-download',
        description: 'Renseignez-vous sur les divers projets réalisés ou en cours de réalisation.',
        to: '/projects'
      },
      {
        label: 'Équipes',
        icon: 'i-lucide-smile',
        description: 'Découvrez les petits secrets de nos équipiers.',
        to: '/team'
      },
      {
        label: 'Contacts',
        icon: 'i-lucide-contact-round',
        description: 'Vous voulez nous contacter, on vous simplifie la tâche avec un petit formulaire.',
        to: '/contact'
      }
    ]
  },
  {
    label: 'Interagir',
    icon: 'i-lucide-app-window',
    children: [
      {
        label: 'Proposer une news insolite',
        icon: 'i-lucide-star',
        description: 'Vous avez une super nouvelle à partager, tentez de séduire les administrateurs pour qu\'ils la publient.',
        to: '/insolite'
      },
      {
        label: 'Messagerie',
        icon: 'i-lucide-message-circle-more',
        description: 'Ouvrez le courrier et communiquez, même si vous n\'avez pas de compte.',
        to: '/messagerie'
      }
    ]
  }
])

const tabs_items: TabsItem[] = [
  {
    label: 'Connexion',
    icon: 'i-lucide-user'
  },
  {
    label: 'Inscription',
    icon: 'i-lucide-user-round-plus'
  }
]

//--------------------------------------------------------------------
// Outils de validation de connexion
//--------------------------------------------------------------------
const schema_c = z.object({
  email: z.string().email('Courriel invalide'),
  password: z.string().min(8, 'Vous devez entrer au moins 8 caractères')
})

type SchemaC = z.output<typeof schema_c>

const state_c = reactive<Partial<SchemaC>>({
  email: undefined,
  password: undefined
})

async function connect(event: FormSubmitEvent<SchemaC>) {
  //===============================================================================
  // VERIFICATION                                                                --
  //-------------------------------------------------------------------------------
  const { data: list } = await useFetch('/api/sql/user/list')
  let ok = false
  let surnom = null
  if(list !== undefined && list?.value?.rows !== undefined) {
    for(const item of list?.value?.rows) {
      if(item.mail === state_c.email) {
        const pw_data = item.pw_secure
        ok = is_ok(String(state_c.password), String(state_c.email), String(pw_data))
        surnom = item.surnom
        break
      }
    }
  }

  if(!ok){
    // Erreur
    toast.add({
      title: 'Erreur !',
      description: 'Connexion impossible, mauvais identifiants !',
      icon: 'i-lucide-annoyed',
      color: 'error'
    })
  }else{
    // OK
    logging.authenticate(state_c.email)
    if(surnom != null && surnom != ''){
      donnees.set_user_name(surnom)
    }else{
      donnees.set_user_name('Visiteur')
    }

    toast.add({
      title: 'OK !',
      description: `Connecté en tant que ${donnees.user} !`,
      icon: 'i-lucide-biceps-flexed'
    })
  }
}
//--------------------------------------------------------------------

//--------------------------------------------------------------------
// Outils de validation d'inscription
//--------------------------------------------------------------------
const schema_i = z.object({
  email: z.string().email('Courriel invalide'),
  password: z.string().min(8, 'Vous devez entrer au moins 8 caractères'),
  confirmPassword: z.string().min(8, 'Vous devez entrer au moins 8 caractères')
})

type SchemaI = z.output<typeof schema_i>

const state_i = reactive<Partial<SchemaI>>({
  email: '',
  password: '',
  confirmPassword: ''
})

async function register(event: FormSubmitEvent<SchemaI>) {
  //===============================================================================
  // VERIFICATION DE L'EXISTENCE D'UN MÊME MAIL                                  --
  //-------------------------------------------------------------------------------
  const { data: pres_courriel } = await useFetch('/api/sql/user/list')
  if(pres_courriel !== undefined && pres_courriel?.value?.rows !== undefined){
    for (const entry of pres_courriel?.value?.rows) {
      if (entry.mail === state_i.email) {
        toast.add({
          title: 'Erreur !',
          description: 'Le courriel existe déjà !',
          icon: 'i-lucide-annoyed',
          color: 'error'
        })
        return;
      }
    }
  }

  //===============================================================================
  // VERIFICATION DES MOTS DE PASSE                                              --
  //-------------------------------------------------------------------------------
  let same = state_i.password === state_i.confirmPassword;
  if(state_i.password === '' || state_i.confirmPassword === ''){
    same = false;
  }
  if(!same){
    toast.add({
      title: 'Erreur !',
      description: 'Mots de passe non concordants !',
      icon: 'i-lucide-annoyed',
      color: 'error'
    })
    return;
  }
  //===============================================================================

  //--
  toast.add({
    title: 'En cours',
    description: 'Essai d\'enregistrement en cours...',
    icon: 'i-lucide-link'
  })

  //===============================================================================
  // ENREGISTREMENT                                                              --
  //-------------------------------------------------------------------------------
  try{
    const pw = pw_sec(String(state_i.password), String(state_i.email))
    await $fetch('/api/sql/user/add', {
      method: 'POST',
      body: {
        mail: state_i.email,
        mail_t: state_i.email, /* TEAM */
        surnom: 'Visiteur',
        surnom_t: 'Visiteur', /* TEAM */
        photo: '',
        photo_t: '', /* TEAM */
        sign: '',
        sign_t: '', /* TEAM */
        privilege: 0,
        privilege_t: 0, /* TEAM */
        pw_secure: pw,
        role_t: '' /* TEAM */
      }
    })
  }catch (error) {
    console.error(error)
    toast.add({
      title: 'Erreur !',
      description: 'Erreur lors de l\'enregistrement !',
      icon: 'i-lucide-annoyed',
      color: 'error'
    })
    return;
  }

  toast.add({
    title: 'OK !',
    description: 'Enregistré. Bravo ! Veuillez vous connecter !',
    icon: 'i-lucide-biceps-flexed'
  })
  //===============================================================================
}
//--------------------------------------------------------------------

//--------------------------------------------------------------------
// Déconnexion
//--------------------------------------------------------------------
function disconnect() {
  logging.deauthenticate()
  donnees.set_user_name('visiteur')

  if(!logging.isAuthenticated()){
    toast.add({
      title: 'Vous êtes déconnecté !',
      color: 'success',
      icon: 'i-lucide-circle-check'
    })
  }
}
//--------------------------------------------------------------------

const showPassword = ref(false)

function checkStrength(str: string) {
  const requirements = [
    { regex: /.{8,}/, text: 'Au moins 8 caractères' },
    { regex: /\d/, text: 'Au moins 1 nombre' },
    { regex: /[a-z]/, text: 'Au moins 1 minuscule' },
    { regex: /[A-Z]/, text: 'Au moins 1 majuscule' },
    { regex: /[^a-zA-Z0-9]/, text: 'Au moins 1 caractère spécial' }
  ]

  return requirements.map(req => ({ met: req.regex.test(str), text: req.text }))
}

const strength = computed(() => checkStrength(state_i.password as string))
const score = computed(() => strength.value.filter(req => req.met).length)

const color = computed(() => {
  if (score.value === 0) return 'neutral'
  if (score.value <= 1) return 'error'
  if (score.value <= 2) return 'warning'
  if (score.value === 3) return 'warning'
  return 'success'
})

const text = computed(() => {
  if (score.value === 0) return 'Entrez un mot de passe'
  if (score.value <= 2) return 'Mot de passe faible'
  if (score.value === 3) return 'Mot de passe moyen'
  return 'Mot de passe fort'
})

function pw_sec(pw: string, mail: string): string {
  let pass = pw.concat(mail.substring(0, mail.indexOf('@')));
  if(pass.length < 16){
    while(pass.length < 16){
      pass = pass.concat("0")
    }
  }else if(pass.length != 16){
    pass = pass.substring(0, 16)
  }
  let save = ''
  for (let i = 0; i < pass.length / 2; i++) {
    save += pass.charAt(i) + pass.charAt(i + 8)
  }
  return save
}

function is_ok(pw: string, mail: string, crypted: string): boolean {
  const save = pw_sec(pw, mail)
  return save === crypted
}
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center" style="background-color: black;" />
  <div class="cnf-jap">
    衷心
  </div>
  <div class="cnf-logo-bar">
    Chuushin
  </div>
  <div>
    <div v-if="logging.isAuthenticated()" class="cnf-bienvenue-bar">
      <UButton icon="i-lucide-x" color="error" @click="disconnect()"><span style="color: white;">Déconnexion</span></UButton>
    </div>
    <div v-else class="cnf-bienvenue-bar">
      <USlideover>
        <UButton icon="i-lucide-user-round" color="neutral">Connexion</UButton>
        <template #content>
          <div class="content-connect">

            <UTabs :items="tabs_items" class="w-full">
              <template #content="{ item }">
                <div v-if="item.label === 'Connexion'">
                  <div class="content-form">
                    <div class="inside-style">
                      Veuillez entrer vos identifiants pour vous connecter.
                    </div>
                    <br />
                    <UForm :schema="schema_c" :state="state_c" class="space-y-4" style="overflow-y: auto" @submit="connect">

                      <UInput
                          v-model="state_c.email"
                          placeholder="Courriel"
                          class="inside-input"
                      />
                      <UInput
                          v-model="state_c.password"
                          type="password"
                          placeholder="Mot de passe"
                          class="inside-input"
                      />
                      <br />
                      <UButton label="Se connecter" type="submit" />

                    </UForm>
                  </div>
                </div>
                <div v-if="item.label === 'Inscription'">
                  <div class="content-form">
                    <div class="inside-style">
                      Pas encore de compte ? Inscrivez-vous !
                    </div>
                    <br />
                    <UForm :schema="schema_i" :state="state_i" class="space-y-4" style="overflow-y: auto" @submit="register">

                      <UInput
                          v-model="state_i.email"
                          placeholder="Courriel"
                          class="inside-input"
                      />

                      <UInput
                          v-model="state_i.password"
                          placeholder="Mot de passe"
                          class="w-full inside-input"
                          :color="color"
                          :type="showPassword ? 'text' : 'password'"
                          :aria-invalid="score < 4"
                          aria-describedby="password-strength"
                          :ui="{ trailing: 'pe-1' }"
                      >
                        <template #trailing>
                          <UButton
                              color="neutral"
                              variant="link"
                              size="sm"
                              :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                              :aria-label="showPassword ? 'Cacher le mot de passe' : 'Montrer le mot de passe'"
                              :aria-pressed="showPassword"
                              aria-controls="password"
                              @click="showPassword = !showPassword"
                          />
                        </template>
                      </UInput>

                      <UProgress
                          :color="color"
                          :indicator="text"
                          :model-value="score"
                          :max="4"
                          size="sm"
                          class="inside-style"
                      />

                      <p id="password-strength" class="text-sm font-medium" style="margin-top: 8px;">
                        {{ text }} avec :
                      </p>

                      <ul class="space-y-1 inside-style" aria-label="Requis" style="margin-bottom: 8px;">
                        <li
                            v-for="(req, index) in strength"
                            :key="index"
                            class="flex items-center gap-0.5"
                            :class="req.met ? 'text-success' : 'text-muted'"
                        >
                          <UIcon :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'" class="size-4 shrink-0" />

                          <span class="text-xs font-light">
                      {{ req.text }}
                      <span class="sr-only">
                        {{ req.met ? ' - Tout est bon' : ' - Toutes les conditions ne sont pas remplies' }}
                      </span>
                    </span>
                        </li>
                      </ul>

                      <UInput
                          v-model="state_i.confirmPassword"
                          type="password"
                          placeholder="Confirmation du mot de passe"
                          class="inside-input"
                      />
                      <br />
                      <Very style="margin: auto;" />
                      <div style="margin-bottom: 1rem;"></div>
                      <UButton v-if="very.isOk()" label="S'inscrire" type="submit" />

                    </UForm>
                  </div>
                </div>
              </template>
            </UTabs>
          </div>
        </template>
      </USlideover>
    </div>
  </div>
  <div class="cnf-titre-page">
    {{ donnees.page }}
  </div>
</template>

<style scoped>
.cnf-jap {
  font-family: 'Open Sans', sans-serif;
  font-size: 28pt;
  font-weight: bold;
  color: white;
  position: absolute;
  top: -5px;
  left: calc(50% - 480px);
}

.cnf-logo-bar {
  font-family: "DUMERO", cursive;
  font-size: 38pt;
  color: white;
  position: absolute;
  top: -12px;
  left: calc(50% - 400px);
}

.cnf-bienvenue-bar {
  font-family: "Open Sans", sans-serif;
  color: white;
  position: absolute;
  top: 12px;
  left: calc(50% + 400px);
}

.cnf-titre-page {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  background-color: black;
  color: white;
}

.content-connect {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: white;
  padding: 10px;
  width: 100%;
}

.content-form {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.inside-style {
  width: 300px;
  margin: auto;
}

.inside-input {
  width: 300px;
}
</style>