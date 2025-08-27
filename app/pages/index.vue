<template>
  <HautCarousel :visible=carousel.visible />
  <UContainer>
    <div>

      <div v-if="nouvelles.visible" class="present">
        Nouvelles
      </div>
      <div v-for="nouvelle of news_items">
        <HautNouvelle :nouvelle="nouvelle" :visible="nouvelles.visible" />
      </div>

      <div v-if="avancements.visible" class="present">
        Avancements
      </div>
      <div v-for="step of steps_items">
        <HautAvancement :project="step" :visible="avancements.visible" />
      </div>

      <div v-if="dernier_ddl.visible" class="present">
        Derniers téléchargements
      </div>
      <div v-for="ddl of ddls_items">
        <DernierDDL :ddl="ddl" :visible="dernier_ddl.visible" />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
/* LES COMPOSANTS */
import HautCarousel from "~~/components/HautCarousel.vue";
import HautNouvelle from "~~/components/HautNouvelle.vue";
import HautAvancement from "~~/components/HautAvancement.vue";
import DernierDDL from "~~/components/DernierDDL.vue";

/* LES STORES PINIA */
import {useEasyPages} from "~/stores/easypages";
import {useCarousel} from "~/stores/definecarousel";
import {useNouvelles} from "~/stores/definenews";
import {useAvancements} from "~/stores/defineavance";
import {useDernierDDLs} from "~/stores/definedernierddl";

/* LES PARAMÈTRES DES STORES PINIA */
const donnees = useEasyPages()
const carousel = useCarousel()
const nouvelles = useNouvelles()
const avancements = useAvancements()
const dernier_ddl = useDernierDDLs()
donnees.set_page_name("Accueil")

const news_items = [
  {
    _id: 1,
    sujet: 'Chuushin tel le phénix',
    date: '03/10/2020 à 05h40',
    auteur: 'Chien-Rouge',
    article: 'bla bla bla lorem ipsum dolor sit amet, consetetur lorem ipsum dolor sit amet, consetetur',
    likes: 0,
    dislikes: 0,
  },
  {
    _id: 2,
    sujet: 'Chuushin est le phénix',
    date: '03/10/2020 à 05h45',
    auteur: 'Chien-Rouge',
    article: 'bla bla bla lorem ipsum dolor sit amet, consetetur lorem ipsum dolor sit amet, consetetur',
    likes: 0,
    dislikes: 0,
  },
  {
    _id: 3,
    sujet: 'Chuushin vaut le phénix',
    date: '03/10/2020 à 05h48',
    auteur: 'Chien-Rouge',
    article: 'bla bla bla lorem ipsum dolor sit amet, consetetur lorem ipsum dolor sit amet, consetetur',
    likes: 0,
    dislikes: 0,
  },
]

const steps_items = [
  {
    _id: 1,
    type: 'f', /* FANSUB = 'f' */
    nom: 'Toradora',
    episode: 'Épisode 24',
    step: 3,
  },
  {
    _id: 2,
    type: 'f', /* FANSUB = 'f' */
    nom: 'Hyouka',
    episode: 'Épisode 24',
    step: 8,
  },
  {
    _id: 3,
    type: 'f', /* FANSUB = 'f' */
    nom: 'Toaru Kagaku no Railgun',
    episode: 'Épisode 24',
    step: 7,
  },
]

const ddls_items = [
  {
    _id: 1,
    nom: 'Toradora',
    episode: 'Toradora 21',
    versions: [
      {
        fichier: 'Toradora 21 x265-10bit HDR 2160p.mp4',
        release: 'Toradora 21 UHD',
        count: 0,
      },
      {
        fichier: 'Toradora 21 x265-10bit 1440p.mp4',
        release: 'Toradora 21 QHD',
        count: 0,
      },
      {
        fichier: 'Toradora 21 x265-8bit 1080p.mp4',
        release: 'Toradora 21 FHD',
        count: 0,
      },
      {
        fichier: 'Toradora 21 x264 720p.mp4',
        release: 'Toradora 21 HD',
        count: 0,
      },
      {
        fichier: 'Toradora 21 x264 480p.mp4',
        release: 'Toradora 21 SD',
        count: 0,
      }
    ]
  },
  {
    _id: 2,
    nom: 'Toradora',
    episode: 'Toradora 22',
    versions: [
      {
        fichier: 'Toradora 22 x265-10bit HDR 2160p.mp4',
        release: 'Toradora 22 UHD',
        count: 0,
      },
      {
        fichier: 'Toradora 22 x265-10bit 1440p.mp4',
        release: 'Toradora 22 QHD',
        count: 0,
      },
      {
        fichier: 'Toradora 22 x265-8bit 1080p.mp4',
        release: 'Toradora 22 FHD',
        count: 0,
      },
      {
        fichier: 'Toradora 22 x264 720p.mp4',
        release: 'Toradora 22 HD',
        count: 0,
      },
      {
        fichier: 'Toradora 22 x264 480p.mp4',
        release: 'Toradora 22 SD',
        count: 0,
      }
    ]
  },
  {
    _id: 3,
    nom: 'Toradora',
    episode: 'Toradora 23',
    versions: [
      {
        fichier: 'Toradora 23 x265-10bit HDR 2160p.mp4',
        release: 'Toradora 23 UHD',
        count: 0,
      },
      {
        fichier: 'Toradora 23 x265-10bit 1440p.mp4',
        release: 'Toradora 23 QHD',
        count: 0,
      },
      {
        fichier: 'Toradora 23 x265-8bit 1080p.mp4',
        release: 'Toradora 23 FHD',
        count: 0,
      },
      {
        fichier: 'Toradora 23 x264 720p.mp4',
        release: 'Toradora 23 HD',
        count: 0,
      },
      {
        fichier: 'Toradora 23 x264 480p.mp4',
        release: 'Toradora 23 SD',
        count: 0,
      }
    ]
  }
]
</script>

<style scoped>
.present {
  font-family: 'Open Sans', sans-serif;
  font-size: large;
  color: white;
  background-color: rgba(0, 0, 0, 0.63);
  margin-bottom: 0.5rem;
  text-align: center;
}
</style>