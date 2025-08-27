<template>
<UContainer>
  <div style="margin-top: 0.5rem;"></div>
  <div v-if="affichage.visible" class="present" style="height: 47px;">
    <div>
      <div v-if="affichage.page_type === 'affiche'" style="position: relative; top: 8px;">
        Affiches des projets
      </div>
      <div v-if="affichage.page_type === 'bandeau'" style="position: relative; top: 8px;">
        Présentations des projets
      </div>
    </div>
    <div style="float: right; padding: 0.5rem; position: relative; top: -28px;">
      <UButtonGroup orientation="horizontal">
        <UTooltip text="Affiches">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-file-image" @click="montrer_affiches()" />
        </UTooltip>
        <UTooltip text="Présentations">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-tv-minimal-play" @click="montrer_bandeaux()" />
        </UTooltip>
      </UButtonGroup>
    </div>
    <div style="float: right; padding: 0.5rem; position: relative; top: -28px;">
      <UButtonGroup orientation="horizontal">
        <UTooltip text="Tout">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-house" @click="filtrer_category('')" />
        </UTooltip>
        <UTooltip text="Fansub">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-video" @click="filtrer_category('f')" />
        </UTooltip>
        <UTooltip text="Scantrad">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-book-image" @click="filtrer_category('s')" />
        </UTooltip>
        <UTooltip text="Light Novel (LN)">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-book-a" @click="filtrer_category('l')" />
        </UTooltip>
        <UTooltip text="Visual Novel (VN)">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-gamepad-2" @click="filtrer_category('v')" />
        </UTooltip>
      </UButtonGroup>
    </div>
    <div style="float: right; padding: 0.5rem; position: relative; top: -28px;">
      <UButtonGroup orientation="horizontal">
        <UTooltip text="Par défaut">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-baby" @click="filtrer_ordre('')" />
        </UTooltip>
        <UTooltip text="Ordre alphabétique">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-sort-desc" @click="filtrer_ordre('a')" />
        </UTooltip>
        <UTooltip text="Par état">
          <UButton color="neutral" variant="outline" size="xl" icon="i-lucide-list-start" @click="filtrer_ordre('e')" />
        </UTooltip>
      </UButtonGroup>
    </div>
  </div>
  <div style="clear: both"></div>
  <div>

    <!-- Filtre par défaut -->
    <div v-if="filtre_eta === ''">
      <div v-for="(project, index) in projects_items.sort((a, b) => (a._id > b._id) ? 1 : -1)" :key="index">
        <div v-if="project.type === filtre_cat">
          <ProjetAffiche :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'affiche'" />
          <ProjetBandeau :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'bandeau'" />
        </div>
        <div v-else>
          <div v-if="filtre_cat === ''">
            <ProjetAffiche :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'affiche'" />
            <ProjetBandeau :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'bandeau'" />
          </div>
        </div>
      </div>
    </div>

    <!-- Filtre par ordre alphabétique -->
    <div v-if="filtre_eta === 'a'">
      <div v-for="(project, index) in projects_items.sort((a, b) => (a.nom > b.nom) ? 1 : -1)" :key="index">
        <div v-if="project.type === filtre_cat">
          <ProjetAffiche :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'affiche'" />
          <ProjetBandeau :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'bandeau'" />
        </div>
        <div v-else>
          <div v-if="filtre_cat === ''">
            <ProjetAffiche :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'affiche'" />
            <ProjetBandeau :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'bandeau'" />
          </div>
        </div>
      </div>
    </div>

    <!-- Filtre par classement d'état -->
    <div v-if="filtre_eta === 'e'">
      <div v-for="(project, index) in projects_items.sort((a, b) => (a.etat > b.etat) ? 1 : -1)" :key="index">
        <div v-if="project.type === filtre_cat">
          <ProjetAffiche :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'affiche'" />
          <ProjetBandeau :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'bandeau'" />
        </div>
        <div v-else>
          <div v-if="filtre_cat === ''">
            <ProjetAffiche :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'affiche'" />
            <ProjetBandeau :project="project" :visible="affichage.visible" v-if="affichage.page_type === 'bandeau'" />
          </div>
        </div>
      </div>
    </div>

  </div>
</UContainer>
</template>

<script setup lang="ts">
/* LES COMPOSANTS */
import ProjetAffiche from "~~/components/ProjetAffiche.vue";
import ProjetBandeau from "~~/components/ProjetBandeau.vue";

/* LES STORES PINIA */
import {useEasyPages} from "~/stores/easypages";
import {useProjetsPage} from "~/stores/defineprojetspage";

/* LES PARAMÈTRES DES STORES PINIA */
const donnees = useEasyPages()
const affichage = useProjetsPage()
donnees.set_page_name("Projets")

function montrer_affiches(){
  affichage.set_page_type("affiche")
}

function montrer_bandeaux(){
  affichage.set_page_type("bandeau")
}

// Le filtre '' (vide) charge toutes les catégories
// Le filtre (f) se limite au Fansub
// Le filtre (s) se limite au scan-trad
// Le filtre (l) se limite au ln
// Le filtre (v) se limite au vn.
const filtre_cat = ref('')
function filtrer_category(cat: string){
  filtre_cat.value = cat
}

// Le filtre '' (vide) charge tous les items dans l'ordre par défaut
// Le filtre (a) se limite à l'ordre alphabétique
// Le filtre (e) se limite à l'état.
const filtre_eta = ref('')
function filtrer_ordre(eta: string){
  filtre_eta.value = eta
}

const projects_items = [
  {
    _id: 1,
    type: "f", /* FANSUB */
    nom: "Toradora",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "licence",
  },
  {
    _id: 2,
    type: "f", /* FANSUB */
    nom: "Kanata Diaries",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "en cours",
  },
  {
    _id: 3,
    type: "f", /* FANSUB */
    nom: "Toaru Kagaku no Railgun",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "abandon",
  },
  {
    _id: 4,
    type: "s", /* SCANTRAD */
    nom: "Coppelion",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "licence",
  },
  {
    _id: 5,
    type: "l", /* LN */
    nom: "Torodora",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "en cours",
  },
  {
    _id: 6,
    type: "v", /* VN */
    nom: "13 Pantsu wo mita",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "termine",
  },
  {
    _id: 7,
    type: "l", /* LN */
    nom: "Coppelion",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "abandon",
  },
  {
    _id: 8,
    type: "f", /* FANSUB */
    nom: "Gundam SEED UHD",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "en cours",
  },
  {
    _id: 9,
    type: "v", /* VN */
    nom: "13 Pantsu wo mita 2",
    affiche: "/images/affiches/affiche-null.webp",
    bandeau: "/images/bandeaux/bandeau-null.webp",
    etat: "termine",
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