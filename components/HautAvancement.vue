<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  visible: {
    type: String,
    required: true,
  }
})
const { project } = props
const { visible } = props

import type { StepperItem } from '@nuxt/ui'

const fansub = ref<StepperItem[]>([
  {
    title: 'RAW',
    icon: 'i-lucide-traffic-cone'
  },
  {
    title: 'Repérage',
    icon: 'i-lucide-tractor'
  },
  {
    title: 'Traduction',
    icon: 'i-lucide-brain-circuit'
  },
  {
    title: 'Correction',
    icon: 'i-lucide-brain-cog'
  },
  {
    title: 'Édition',
    icon: 'i-lucide-album'
  },
  {
    title: 'Synchronisation',
    icon: 'i-lucide-biceps-flexed'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Mux',
    icon: 'i-lucide-atom'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Propagation',
    icon: 'i-lucide-arrow-up-from-line'
  }
])

const scantrad = ref<StepperItem[]>([
  {
    title: 'RAW',
    icon: 'i-lucide-traffic-cone'
  },
  {
    title: 'Repérage',
    icon: 'i-lucide-tractor'
  },
  {
    title: 'Traduction',
    icon: 'i-lucide-brain-circuit'
  },
  {
    title: 'Correction',
    icon: 'i-lucide-brain-cog'
  },
  {
    title: 'Nettoyage',
    icon: 'i-lucide-bug'
  },
  {
    title: 'Édition',
    icon: 'i-lucide-album'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Préparation',
    icon: 'i-lucide-book-open-check'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Propagation',
    icon: 'i-lucide-arrow-up-from-line'
  }
])

const ln = ref<StepperItem[]>([
  {
    title: 'RAW',
    icon: 'i-lucide-traffic-cone'
  },
  {
    title: 'Repérage',
    icon: 'i-lucide-tractor'
  },
  {
    title: 'Traduction',
    icon: 'i-lucide-brain-circuit'
  },
  {
    title: 'Correction',
    icon: 'i-lucide-brain-cog'
  },
  {
    title: 'Nettoyage',
    icon: 'i-lucide-bug'
  },
  {
    title: 'Édition',
    icon: 'i-lucide-album'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Préparation',
    icon: 'i-lucide-book-open-check'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Propagation',
    icon: 'i-lucide-arrow-up-from-line'
  }
])

const vn = ref<StepperItem[]>([
  {
    title: 'RAW',
    icon: 'i-lucide-traffic-cone'
  },
  {
    title: 'Repérage',
    icon: 'i-lucide-tractor'
  },
  {
    title: 'Traduction',
    icon: 'i-lucide-brain-circuit'
  },
  {
    title: 'Correction',
    icon: 'i-lucide-brain-cog'
  },
  {
    title: 'Décompilation',
    icon: 'i-lucide-radiation'
  },
  {
    title: 'Édition et essais',
    icon: 'i-lucide-radio'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Compilation',
    icon: 'i-lucide-switch-camera'
  },
  {
    title: 'Contrôle',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Propagation',
    icon: 'i-lucide-arrow-up-from-line'
  }
])
/*
Les avancements sont les suivants en fansub :
1/ raw et encodage (premux)
2/ repérage (synchronisation pour traduire)
3/ traduction
4/ correction
5/ édition
6/ synchronisation
7/ contrôle qualité
8/ mux
9/ contrôle qualité vidéo
10/ propagation.

Les avancements sont les suivants en scantrad/ln :
1/ raw
2/ repérage (pour traduire)
3/ traduction
4/ correction
5/ nettoyage
6/ édition
7/ contrôle qualité
8/ préparation
9/ contrôle qualité
10/ propagation.

Les avancements sont les suivants en vn :
1/ raw
2/ repérage (pour traduire)
3/ traduction
4/ correction
5/ décompilation
6/ édition et essais
7/ contrôle qualité
8/ compilation
9/ contrôle qualité
10/ propagation.
 */
</script>

<template>
  <div v-if="visible === 'oui'">
    <div v-if="project.type === 'f'" class="avance-main">
      <!-- FANSUB -->
      <div>
        <div class="avance-titre">
          {{ project.nom }} {{ project.episode }}
        </div>
        <div>
          <UStepper
              v-model=project.step
              color="neutral"
              :items="fansub"
              disabled />
        </div>
      </div>
    </div>
    <div v-if="project.type === 's'" class="avance-main">
      <!-- SCANTRAD -->
      <div>
        <div class="avance-titre">
          {{ project.nom }} {{ project.episode }}
        </div>
        <div>
          <UStepper
              v-model=project.step
              color="neutral"
              :items="scantrad"
              disabled />
        </div>
      </div>
    </div>
    <div v-if="project.type === 'l'" class="avance-main">
      <!-- LN -->
      <div>
        <div class="avance-titre">
          {{ project.nom }} {{ project.episode }}
        </div>
        <div>
          <UStepper
              v-model=project.step
              color="neutral"
              :items="ln"
              disabled />
        </div>
      </div>
    </div>
    <div v-if="project.type === 'v'" class="avance-main">
      <!-- VN -->
      <div>
        <div class="avance-titre">
          {{ project.nom }} {{ project.episode }}
        </div>
        <div>
          <UStepper
              v-model=project.step
              color="neutral"
              :items="vn"
              disabled />
        </div>
      </div>
    </div>
    <div v-if="project.type === 'a'" class="avance-main">
      <!-- Autre type de projet -->

    </div>
  </div>
</template>

<style scoped>
.avance-main {
  font-family: 'Open Sans', sans-serif;
  font-size: large;
  color: white;
  background-color: rgba(0, 0, 0, 0.95);
  margin-bottom: 0.5rem;
  padding: 1rem;
}

.avance-titre {
  text-align: center;
  margin-bottom: 0.5rem;
}
</style>