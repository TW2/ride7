<script setup lang="js">
import {useVery} from "~/stores/usevery.js";
const ok = useVery()

const items = ref(['Noir', 'Blanc', 'Magenta', 'Rouge', 'Jaune', 'Cyan', 'Bleu', 'Orange', 'Citron', 'Vert', 'Canard', 'Indigo', 'Violet'])
const selected = ref('Noir')

onMounted(() => {
  const s = document.getElementById('s');

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 255, 225);

  drawCircle(100, 100, 50, 'rgba(255, 0, 0, 0.5)'); // red
  drawCircle(150, 100, 50, 'rgba(255, 255, 0, 0.5)'); // yellow
  drawCircle(125, 150, 50, 'rgba(0, 0, 255, 0.5)'); // blue

  ctx.fillStyle = 'black';
  ctx.font = "24px serif";
  ctx.fillText("A", 70, 100);
  ctx.fillText("B", 165, 100);
  ctx.fillText("C", 117.5, 180);

  function somme() {
    const c = Math.floor(Math.random() * 7) + 1;
    switch (c){
      case 1: s.innerHTML = 'A'; break;
      case 2: s.innerHTML = 'B'; break;
      case 3: s.innerHTML = 'C'; break;
      case 4: s.innerHTML = 'A + B'; break;
      case 5: s.innerHTML = 'A + C'; break;
      case 6: s.innerHTML = 'B + C'; break;
      case 7: s.innerHTML = 'A + B + C'; break;
    }
  }

  somme();

  ok.set_rules(s.innerHTML);
})
</script>

<template>
  <div style="background-color: white; width: 255px; height: 380px;">
    <div>
      <canvas id="canvas" width="255" height="225"></canvas>
    </div>
    <div class="very-one">
      Faîtes la somme de <span id="s">X</span> et sélectionnez une réponse.
    </div>
    <div class="very-ui">
      <USelect v-model="selected" :items="items" />
      <UButton color="warning" @click="ok.verify(selected)">Essayer</UButton>
    </div>
    <div class="very-ok">
      <span id="result">{{ ok.isOk() ? 'OK' : 'Recommencez' }}</span>
    </div>
  </div>
</template>

<style scoped>
.very-one {
  color: black;
  font-size: 10pt;
  width: 90%;
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  text-align: center;
}

.very-ui {
  text-align: center;
  position: relative;
  top: 10px;
}

.very-ok {
  color: black;
  font-size: 20pt;
  width: 90%;
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  text-align: center;
  position: relative;
  top: 20px;
}
</style>