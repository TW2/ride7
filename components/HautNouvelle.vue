<script setup lang="ts">
const props = defineProps({
  nouvelle: {
    type: Object,
    required: true,
  },
  visible: {
    type: String,
    required: true,
  }
})
const { nouvelle } = props
const { visible } = props
</script>

<template>
  <div v-if="visible === 'oui'" class="news-main">

    <table>
      <tbody>
      <tr>
        <td style="vertical-align: top;">
          <span class="news-title">{{ nouvelle.sujet }}</span>
          <span class="news-font-small">
          &nbsp;&nbsp;&nbsp;le&nbsp;
          <span class="news-date">{{ nouvelle.date }}</span>
          &nbsp;par&nbsp;
          <span class="news-author">{{ nouvelle.auteur }}</span>
        </span>
          <div class="news-article">
            {{ nouvelle.article }}
          </div>
        </td>
        <td>
          <NuxtImg src="/images/Clogo.png" alt="Image de la nouvelle" class="news-image" />
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
.news-main {
  font-family: 'Open Sans', sans-serif;
  font-size: x-large;
  background-color: rgba(0, 0, 0, 0.33);
  color: white;
  padding: 1rem;
  margin-bottom: 0.5rem;
}

.news-font-small {
  font-size: small;
}

.news-date {
  color: crimson;
}

.news-author {
  color: crimson;
}

.news-article {
  color: white;
  font-size: medium;
}

.news-image {
  width: 30%;
  height: 30%;
  position: relative;
  float: right;
}
</style>