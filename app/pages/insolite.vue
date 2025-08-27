<script setup lang="ts">
/* IMPORT DE STORES PINIA */
import {useEasyPages} from "~/stores/easypages";

/* INTERACTION AVEC LES STORES PINIA */
const donnees = useEasyPages()
donnees.set_page_name("Partage de nouvelles")

/* IMPORT DES LIBRAIRIES POUR LE CONTRÔLE DES FORMULAIRES */
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

/* UTILISATION DES LIBRAIRIES DE FORMULAIRES */
const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const MIN_DIMENSIONS = { width: 200, height: 200 }
const MAX_DIMENSIONS = { width: 4096, height: 4096 }
const ACCEPTED_IMAGE_TYPES = ['image/webp']

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

const schema = z.object({
  email: z.string().email('Courriel invalide'),
  password: z.string().min(8, 'Votre mot de passe doit avoir au moins 8 caractères'),
  confirmPassword: z.string().min(8, 'Votre mot de passe doit avoir au moins 8 caractères'),
  pseudo: z.string(),
  titre: z.string().max(150, 'Votre titre ne doit pas dépasser 150 caractères'),
  message: z.string(),
  image: z
      .instanceof(File, {
        message: 'Sélectionnez un fichier image WEBP.'
      })
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: `L'image est trop grande. Veuillez sélectionner une image plus petite que ${formatBytes(MAX_FILE_SIZE)}.`
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: 'Veuillez téléverser une image au format WEBP.'
      })
      .refine(
          (file) =>
              new Promise((resolve) => {
                const reader = new FileReader()
                reader.onload = (e) => {
                  const img = new Image()
                  img.onload = () => {
                    const meetsDimensions =
                        img.width >= MIN_DIMENSIONS.width &&
                        img.height >= MIN_DIMENSIONS.height &&
                        img.width <= MAX_DIMENSIONS.width &&
                        img.height <= MAX_DIMENSIONS.height
                    resolve(meetsDimensions)
                  }
                  img.src = e.target?.result as string
                }
                reader.readAsDataURL(file)
              }),
          {
            message: `Les dimensions de l'image sont erronées. Veuillez téléverser une image entre ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} et ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} en pixels.`
          }
      ),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  pseudo: undefined,
  titre: undefined,
  message: undefined,
  image: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UContainer>
    <div class="insolite-border-ex">
      <div class="insolite-border">
        <div class="insolite-main">
          <UForm :schema="schema" :state="state" class="space-y-4 insolite-field" @submit="onSubmit">
            <UFormField label="Courriel" name="email" class="insolite-field">
              <UInput
                  v-model="state.email"
                  placeholder="Courriel"
                  class="insolite-field"
              />
            </UFormField>

            <UFormField label="Mot de passe (qui sert seulement à consulter les réponses sur la messagerie comme si vous aviez un compte)" name="password" class="insolite-field">
              <UInput
                  v-model="state.password"
                  type="password"
                  placeholder="Mot de passe"
                  class="insolite-field"
              />
            </UFormField>

            <UFormField label="Confirmation du mot de passe" name="confirmPassword" class="insolite-field">
              <UInput
                  v-model="state.confirmPassword"
                  type="password"
                  placeholder="Confirmation"
                  class="insolite-field"
              />
            </UFormField>

            <UFormField label="Pseudonyme" name="pseudo" class="insolite-field">
              <UInput
                  v-model="state.pseudo"
                  placeholder="Pseudonyme"
                  class="insolite-field"
              />
            </UFormField>

            <UFormField label="Titre de l'article (limité à 150 caractères)" name="titre" class="insolite-field">
              <UInput
                  v-model="state.titre"
                  placeholder="Titre de l'article"
                  class="insolite-field"
              />
            </UFormField>

            <UFormField label="Votre article" name="message" class="insolite-field">
              <UTextarea v-model="state.message"
                         class="insolite-field"
              />
            </UFormField>

            <UFormField label="Votre image au format WEBP" name="image" class="insolite-field">
              <UFileUpload
                  v-model="state.image"
                  accept="image/webp"
                  icon="i-lucide-image"
                  label="Cliquez ou faîtes glisser votre image ici."
                  description="WEBP (max. 2MB)"
                  class="min-h-48 insolite-field"
              />
            </UFormField>

            <UButton icon="i-lucide-rocket" type="submit" color="warning" label="Soumettre" />
          </UForm>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.insolite-border-ex {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.insolite-border {
  width: 900px;
  margin: auto;
  border: 1px solid black;
}

.insolite-main {
  width: 800px;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.insolite-field {
  width: 100%;
}
</style>