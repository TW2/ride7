<script setup lang="ts">


const items = [
  '/images/carousel/Carousel-A.png',
  '/images/carousel/Carousel-B.png',
  '/images/carousel/Carousel-C.png',
  '/images/carousel/Carousel-D.png',
  '/images/carousel/Carousel-E.png',
  '/images/carousel/Carousel-F.png'
]

const props = defineProps({
  visible: {
    type: String,
    required: true,
  }
})
const { visible } = props
</script>

<template>
  <div v-if="visible === 'oui'" class="carousel">
    <UCarousel
        v-slot="{ item }"
        loop
        dots
        :autoplay="{ delay: 3000 }"
        :items="items"
        :ui="{
          item: 'basis-1/3',
          dot: 'data-[state=active]:bg-red-500'
        }"
    >
      <NuxtImg :src="item" width="500" height="250" class="rounded-lg" alt="Carousel item" style="margin-top: 10px;"/>
    </UCarousel>
  </div>
</template>

<style scoped>
.carousel {
  height: 300px;
  max-width: 1550px;
  overflow-x: hidden;
  margin: auto;
}
</style>