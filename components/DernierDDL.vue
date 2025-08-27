<script setup lang="ts">
const props = defineProps({
  ddl: {
    type: Object,
    required: true,
  },
  visible: {
    type: String,
    required: true,
  }
})
const { ddl } = props
const { visible } = props

function countDL(fichier: String) {

}
</script>

<template>
<div v-if="visible === 'oui'" class="ddl-control">
  <div class="ddl-panneau">
    <div style="font-weight: bold;">{{ ddl.nom }}</div>
    <div style="color: gold;">{{ ddl.episode }}</div>
    <div class="ddl-download" v-for="version of ddl.versions" :key="version">
      <NuxtLink :href=version.fichier class="ddl-propagation" download @click="countDL(version.fichier)">{{ version.release }}</NuxtLink>&nbsp;<span class="ddl-counter">x{{ version.count }}</span>
    </div>
  </div>
</div>
</template>

<style scoped>
.ddl-control {
  float: left;
}

.ddl-panneau {
  color: white;
  background-color: rgba(44, 3, 30, 0.63);
  font-family: 'Open Sans', sans-serif;
  width: 600px;
  height: fit-content;
  margin-bottom: 0.5rem;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
}

.ddl-download {
  background-color: rgba(0, 0, 0, 0.63);
  text-align: center;
}

.ddl-propagation {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
  color: white;
}

a:active a:visited {
  text-decoration: none;
  color: white;
}

.ddl-counter {
  color: indianred;
}
</style>