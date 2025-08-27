<script setup lang="ts">
const props = defineProps({
  profile: {
    type: Object,
    required: true,
  }
})
const { profile } = props
</script>

<template>
  <UCard class="team-profile">
    <template #header>
      <div class="team-profile-name">
        {{ profile.name }}
      </div>
    </template>
    <NuxtImg :src="profile.avatar" alt="Image invisible" class="team-profile-avatar" />
    <template #footer>
      <div class="team-profile-description">
        {{ profile.description }}
      </div>
    </template>
  </UCard>
</template>

<style scoped>
.team-profile {
  font-family: 'Open Sans', sans-serif;
  color: white;
  width: 256px;
  height: 400px;
}

.team-profile-name {
  font-size: large;
  font-weight: bold;
}

.team-profile-avatar {
  max-width: 207px;
  max-height: 116px;
  object-fit: contain;
}

.team-profile-description {
  font-size: small;
  overflow-y: auto;
  height: 150px;
}
</style>