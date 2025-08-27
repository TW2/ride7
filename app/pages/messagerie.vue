<script setup lang="ts">
/* IMPORT DE STORES PINIA */
import {useEasyPages} from "~/stores/easypages";

/* INTERACTION AVEC LES STORES PINIA */
const donnees = useEasyPages()
donnees.set_page_name("Messagerie")

/* IMPORT DES LIBRAIRIES POUR LE CONTRÔLE DES FORMULAIRES */
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'

const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()

type Message = {
  uid: string
  date: string
  titre: string
  de: string
  vue: 'non vu' | 'vu'
  par: string
  status: 'en attente' | 'relancé' | 'répondu'
}

const data = ref<Message[]>([
  {
    uid: '123',
    date: '2024-03-11T15:30:00',
    titre: 'Bonjour je cherche Toradora, l\'anime',
    de: 'CX7',
    vue: 'vu',
    par: 'Chien-Rouge',
    status: 'en attente'
  },
  {
    uid: '745',
    date: '2024-03-11T10:10:00',
    titre: 'Bonjour est-ce que vous ferez les Gundam 00',
    de: 'Gundam_F4nB0y',
    vue: 'non vu',
    par: '',
    status: 'en attente'
  },
  {
    uid: '203',
    date: '2024-03-11T08:50:00',
    titre: 'Hyouka est sous licence',
    de: 'Un ayant droit',
    vue: 'vu',
    par: 'Kira',
    status: 'répondu'
  },
  {
    uid: '406',
    date: '2024-03-10T19:45:00',
    titre: 'Toradora est sous licence',
    de: 'Un ayant droit',
    vue: 'vu',
    par: 'Chien-Rouge',
    status: 'répondu'
  },
  {
    uid: '522',
    date: '2024-03-10T15:55:00',
    titre: 'Au sujet de Toradora',
    de: 'Mickey17',
    vue: 'vu',
    par: 'Kira',
    status: 'répondu'
  }
])

const columns: TableColumn<Message>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    meta: {
      class: {
        td: 'w-35 whitespace-normal',
      },
    },
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('fr-FR', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }
  },
  {
    accessorKey: 'titre',
    header: 'Titre'
  },
  {
    accessorKey: 'de',
    header: 'De',
    meta: {
      class: {
        td: 'w-35 whitespace-normal',
      },
    },
  },
  {
    accessorKey: 'vue',
    header: 'Consultation',
    meta: {
      class: {
        td: 'w-28 whitespace-normal',
      },
    },
    cell: ({ row }) => {
      const color = {
        'vu': 'success' as const,
        'non vu': 'error' as const
      }[row.getValue('vue') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
          row.getValue('vue')
      )
    }
  },
  {
    accessorKey: 'par',
    header: 'Par',
    meta: {
      class: {
        td: 'w-35 whitespace-normal',
      },
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    meta: {
      class: {
        td: 'w-28 whitespace-normal',
      },
    },
    cell: ({ row }) => {
      const color = {
        'répondu': 'success' as const,
        'relancé': 'warning' as const,
        'en attente': 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
          row.getValue('status')
      )
    }
  },
  {
    id: 'actions',
    meta: {
      class: {
        td: 'w-10 whitespace-normal',
      },
    },
    cell: ({ row }) => {
      return h(
          'div',
          { class: 'text-right' },
          h(
              UDropdownMenu,
              {
                content: {
                  align: 'end'
                },
                items: getRowItems(row),
                'aria-label': 'Actions dropdown'
              },
              () =>
                  h(UButton, {
                    icon: 'i-lucide-ellipsis-vertical',
                    color: 'neutral',
                    variant: 'ghost',
                    class: 'ml-auto',
                    'aria-label': 'Actions dropdown'
                  })
          )
      )
    }
  }
]

function getRowItems(row: Row<Message>) {
  return [
    {
      type: 'label',
      label: 'Actions'
    },
    {
      label: 'Voir le message d\'origine',
      onSelect() {
        voirMessageOriginal(row.original.uid)
      }
    },
    {
      label: 'Voir la réponse',
      onSelect() {
        voirResponse(row.original.uid)
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Répondre',
      onSelect() {
        faireResponse(row.original.uid)
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Relancer',
      onSelect() {
        relancer(row.original.uid)

        toast.add({
          title: 'La relance a été générée',
          color: 'success',
          icon: 'i-lucide-circle-check'
        })
      }
    }
  ]
}

function voirMessageOriginal(uid: string) {
  console.log(uid)
}

function voirResponse(uid: string) {
  console.log(uid)
}

function faireResponse(uid: string) {
  console.log(uid)
}

function relancer(uid: string) {
  console.log(uid)
}

type Response = {
  uid: string
  reply: string
}

const responses = ref<Response[]>([
  {
    uid: '123',
    reply: "Pas encore de réponse"
  },
  {
    uid: '745',
    reply: "Pas encore de réponse"
  },
  {
    uid: '203',
    reply: 'C\'est noté. Merci, je retire le téléchargement de la série.'
  },
  {
    uid: '406',
    reply: 'Merci, je le savais, le téléchargement de la série a déjà été retiré.'
  },
  {
    uid: '522',
    reply: 'La série est sous licence.',
  }
])
</script>

<template>
  <UContainer>
    <div style="padding-top: 0.5rem;"></div>
    <div class="mess-haut">
      Boîte de réception
    </div>
    <div class="mess-table">
      <UTable :data="data" :columns="columns" class="flex-1" />
    </div>
  </UContainer>
</template>

<style scoped>
.mess-haut {
  font-family: 'Open Sans', sans-serif;
  font-size: large;
  color: white;
  background-color: rgba(0, 0, 0, 0.63);
  margin-bottom: 0.5rem;
  text-align: center;
}

.mess-table {
  background-color: black;
  margin-bottom: 0.5rem;
}

.mess-rep {
  font-family: 'Open Sans', sans-serif;
  font-size: large;
  color: white;
  background-color: black;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 120px;
  overflow-y: auto;
}
</style>