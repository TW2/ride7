<script setup lang="ts">
import {useEasyPages} from "~/stores/easypages";

const donnees = useEasyPages()
donnees.set_page_name("Nous contacter")

import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email('Courriel invalide'),
  password: z.string().min(8, 'Votre mot de passe doit avoir au moins 8 caractères'),
  confirmPassword: z.string().min(8, 'Votre mot de passe doit avoir au moins 8 caractères'),
  message: z.string().max(5000, 'Le message ne peut pas faire plus de 5000 caractères'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  message: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UContainer>
    <div class="contact-border-ex">
      <div class="contact-border">
        <div class="contact-main">
          <UForm :schema="schema" :state="state" class="space-y-4 contact-field" @submit="onSubmit">
            <UFormField label="Courriel" name="email" class="contact-field">
              <UInput
                  v-model="state.email"
                  placeholder="Courriel"
                  class="contact-field"
              />
            </UFormField>

            <UFormField label="Mot de passe (qui sert seulement à consulter les réponses sur la messagerie comme si vous aviez un compte)" name="password" class="contact-field">
              <UInput
                  v-model="state.password"
                  type="password"
                  placeholder="Mot de passe"
                  class="contact-field"
              />
            </UFormField>

            <UFormField label="Confirmation du mot de passe" name="confirmPassword" class="contact-field">
              <UInput
                  v-model="state.confirmPassword"
                  type="password"
                  placeholder="Confirmation"
                  class="contact-field"
              />
            </UFormField>

            <UFormField label="Votre message (jusqu'à 5000 caractères)" name="message" class="contact-field">
              <UTextarea v-model="state.message"
                         class="contact-field"
              />
            </UFormField>

            <UButton icon="i-lucide-rocket" type="submit" color="warning" label="Envoyer" />
          </UForm>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.contact-border-ex {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.contact-border {
  width: 900px;
  margin: auto;
  border: 1px solid black;
}

.contact-main {
  width: 800px;
  margin: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.contact-field {
  width: 100%;
}
</style>