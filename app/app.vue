<template>
  <body id="page-body">
  <section>
    <div class="wrapper">


      <!-- HEADER -->
      <header>
        <div>
          <HautDePage />
        </div>
      </header>

      <!-- BODY -->
      <main>
        <UApp>
          <NuxtPage />
        </UApp>
      </main>

      <!-- FOOTER -->
      <footer>
        <PiedDePage />
      </footer>


    </div>
  </section>
  </body>
</template>

<script setup lang="ts">
import HautDePage from "~~/components/HautDePage.vue";
import PiedDePage from "~~/components/PiedDePage.vue";


import {useEasyColors} from "~/stores/easycolors";
const pinia_colors = useEasyColors()

</script>

<style scoped>
html {
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(89,35,35,0.17);
}

body {
  height: 100vh;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: inherit;
}

section {
  height: 100%;
}

main {
  background-image: url("../public/images/bgs/01010101.png");
  background-size: max(100vw);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
}

.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

header {
  position: sticky;
  top: 0;
  z-index: 9;
}
</style>