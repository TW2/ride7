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
</script>

<template>
<div v-if="visible === 'oui'" class="projet-affiche">
  <div v-if="project.type === 'f'" class="projet-affiche-main">
    <!-- FANSUB -->
    <div>
      <div class="projet-affiche-cat-f">Fansub</div>
      <div class="projet-affiche-titre">{{ project.nom }}</div>
      <div><NuxtImg :src=project.affiche /></div>
      <div class="projet-affiche-state">
        <div v-if="project.etat === 'en cours'" class="projet-affiche-en-cours">En cours</div>
        <div v-if="project.etat === 'termine'" class="projet-affiche-termine">Terminé</div>
        <div v-if="project.etat === 'abandon'" class="projet-affiche-abandon">Abandonné</div>
        <div v-if="project.etat === 'licence'" class="projet-affiche-licence">Licencié</div>
      </div>
    </div>
  </div>
  <div v-if="project.type === 's'" class="projet-affiche-main">
    <!-- SCANTRAD -->
    <div>
      <div class="projet-affiche-cat-s">Scantrad</div>
      <div class="projet-affiche-titre">{{ project.nom }}</div>
      <div><NuxtImg :src=project.affiche /></div>
      <div class="projet-affiche-state">
        <div v-if="project.etat === 'en cours'" class="projet-affiche-en-cours">En cours</div>
        <div v-if="project.etat === 'termine'" class="projet-affiche-termine">Terminé</div>
        <div v-if="project.etat === 'abandon'" class="projet-affiche-abandon">Abandonné</div>
        <div v-if="project.etat === 'licence'" class="projet-affiche-licence">Licencié</div>
      </div>
    </div>
  </div>
  <div v-if="project.type === 'l'" class="projet-affiche-main">
    <!-- LN -->
    <div>
      <div class="projet-affiche-cat-l">Light Novel</div>
      <div class="projet-affiche-titre">{{ project.nom }}</div>
      <div><NuxtImg :src=project.affiche /></div>
      <div class="projet-affiche-state">
        <div v-if="project.etat === 'en cours'" class="projet-affiche-en-cours">En cours</div>
        <div v-if="project.etat === 'termine'" class="projet-affiche-termine">Terminé</div>
        <div v-if="project.etat === 'abandon'" class="projet-affiche-abandon">Abandonné</div>
        <div v-if="project.etat === 'licence'" class="projet-affiche-licence">Licencié</div>
      </div>
    </div>
  </div>
  <div v-if="project.type === 'v'" class="projet-affiche-main">
    <!-- VN -->
    <div>
      <div class="projet-affiche-cat-v">Visual Novel</div>
      <div class="projet-affiche-titre">{{ project.nom }}</div>
      <div><NuxtImg :src=project.affiche /></div>
      <div class="projet-affiche-state">
        <div v-if="project.etat === 'en cours'" class="projet-affiche-en-cours">En cours</div>
        <div v-if="project.etat === 'termine'" class="projet-affiche-termine">Terminé</div>
        <div v-if="project.etat === 'abandon'" class="projet-affiche-abandon">Abandonné</div>
        <div v-if="project.etat === 'licence'" class="projet-affiche-licence">Licencié</div>
      </div>
    </div>
  </div>
  <div v-if="project.type === 'a'" class="projet-affiche-main">
    <!-- Autre type de projet -->
    <div>
      <div class="projet-affiche-cat-a">Non défini</div>
      <div class="projet-affiche-titre">{{ project.nom }}</div>
      <div><NuxtImg :src="project.affiche" /></div>
      <div class="projet-affiche-state">
        <div v-if="project.etat === 'en cours'" class="projet-affiche-en-cours">En cours</div>
        <div v-if="project.etat === 'termine'" class="projet-affiche-termine">Terminé</div>
        <div v-if="project.etat === 'abandon'" class="projet-affiche-abandon">Abandonné</div>
        <div v-if="project.etat === 'licence'" class="projet-affiche-licence">Licencié</div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.projet-affiche {
  width: 12rem;
  float: left;
  position: relative;
  left: 30px;
}

.projet-affiche-main {
  padding: 0.5rem;
}

.projet-affiche-titre {
  background-color: black;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  height: 40px;
}

.projet-affiche-state {
  font-family: 'Open Sans', sans-serif;
  font-size: small;
  text-align: center;
}

.projet-affiche-cat-f {
  background-color: #3bb55e;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
}

.projet-affiche-cat-s {
  background-color: #0095ff;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
}

.projet-affiche-cat-l {
  background-color: #9a278d;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
}

.projet-affiche-cat-v {
  background-color: #19bd33;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
}

.projet-affiche-cat-a {
  background-color: dimgray;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
}

.projet-affiche-state {
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: small;
  font-weight: bold;
  text-align: center;
}

.projet-affiche-en-cours {
  background-color: #00006a;
}

.projet-affiche-termine {
  background-color: green;
}

.projet-affiche-abandon {
  background-color: #b37500;
}

.projet-affiche-licence {
  background-color: red;
}
</style>