<script setup lang="ts">
import {useEasyPages} from "~/stores/easypages";
import ProfilEquipe from "~~/components/ProfilEquipe.vue";

const donnees = useEasyPages()
donnees.set_page_name("Présentation de l'équipe")

const profiles = [
  {
    _id: 1,
    mail: '0@0.pm',
    name: 'Chien-Rouge',
    avatar: '/team/avatar.jpg',
    description: 'lorem ipsum dolor',
  }
]
</script>

<template>
  <UContainer fluid>
    <div class="team">
      <div v-for="i in 30">
        <div v-for="profile in profiles" class="team-item">
          <ProfilEquipe :profile="profile" />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.team {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.team-item {
  padding: 1rem;
}
</style>