<script setup lang="ts">

</script>

<template>
<div class="bas">
  <div class="icons">
    <NuxtLink to="/" title="X/Twitter" class="lnk-bas"><UIcon name="i-logos-x" size="2rem" /></NuxtLink>    &nbsp;
    <NuxtLink to="/" title="Discord" class="lnk-bas"><UIcon name="i-logos-discord-icon" size="2rem" /></NuxtLink>
    <NuxtLink to="/contact" title="Nous contacter" style="padding: 0.85rem;"><UIcon name="i-lucide-mail" size="2.1rem" /></NuxtLink>
  </div>
  <div class="copyright">
    <UIcon name="i-lucide-copyright" size="0.8rem" class="color-copyright" />&nbsp;[C-N-F] Chuushin no Fansub - Design et code du site : Chien-Rouge
  </div>
</div>
</template>

<style scoped>
.bas {
  height: 100px;
  width: 100%;
  background-image: url("../public/images/bgs/01010101+.png");
  background-size: max(100vw);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
}

.icons {
  text-align: center;
  position: relative;
  top: 15px;
}

.lnk-bas {
  padding: 0.5rem;
}

.copyright {
  text-align: center;
  position: relative;
  top: 23px;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: #955b5b;
}

.color-copyright {
  color: #955b5b;
  position: relative;
  top: 2px;
}
</style>