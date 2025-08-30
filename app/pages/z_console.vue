<template>
  <UContainer>
    <div>
      <div style="float: left;">
        <NuxtImg src="/images/admin/console/kuroko-nouvelles.webp" alt="Menu Nouvelles" class="z-items" />
        <div class="z-nouvelles">Nouvelles</div>
      </div>
      <div style="float: left; padding-right: 1rem;">
        <NuxtImg src="/images/admin/console/kamijou-releases.webp" alt="Menu Releases" class="z-items" />
        <div class="z-releases">Releases</div>
      </div>
      <!-- Avancements -->
      <!-- Calendrier -->
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import {useEasyPages} from "~/stores/easypages";
const donnees = useEasyPages()
donnees.set_page_name("Administration - Accès Team et Admins")
</script>

<style scoped>
.z-items {
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-top: 1rem;
}

.z-nouvelles {
  font-family: "Maloney", serif;
  font-size: 24pt;
  position: relative;
  top: -65px;
  left: 90px;
}

.z-releases {
  font-family: "Maloney", serif;
  font-size: 24pt;
  position: relative;
  top: -65px;
  left: 95px;
}
</style>