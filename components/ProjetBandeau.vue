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
  <div v-if="visible === 'oui'" class="projet-bandeau">
    <div v-if="project.type === 'f'" class="projet-bandeau-main">
      <!-- FANSUB -->
      <div>
        <span class="projet-bandeau-titre">{{ project.nom }}</span>
        <span v-if="project.etat === 'en cours'" class="projet-bandeau-en-cours" style="float: right; width: 100px;">
          En cours
        </span>
        <span v-if="project.etat === 'termine'" class="projet-bandeau-termine" style="float: right; width: 100px;">
          Terminé
        </span>
        <span v-if="project.etat === 'abandon'" class="projet-bandeau-abandon" style="float: right; width: 100px;">
          Abandonné
        </span>
        <span v-if="project.etat === 'licence'" class="projet-bandeau-licence" style="float: right; width: 100px;">
          Licencié
        </span>
        <span class="projet-bandeau-cat-f" style="float: right; width: 150px;">
          Fansub
        </span>
      </div>
      <div style="position: relative">
        <NuxtImg :src="project.bandeau" />
        <div class="projet-bandeau-details">
          <div>
            <div class="projet-bandeau-texte">
              Titre : {{ project.nom }}<br />
              <span v-if="project.titre_o !== ''">Titre original : {{ project.titre_o }}<br /></span>
              <span v-if="project.titre_a !== ''">Titre anglais : {{ project.titre_a }}<br /></span>
              <span v-if="project.studio !== ''">Studio : {{ project.studio }}<br /></span>
              <span v-if="project.saison !== ''">Saison : {{ project.saison }}<br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.annee !== ''">Année : {{ project.annee }}<br /></span>
              <span v-if="project.pays !== ''">Pays : {{ project.pays }}<br /></span>
              <span v-if="project.auteur !== ''">Auteur : {{ project.auteur }}<br /></span>
              <span v-if="project.site_off !== ''"><NuxtLink :to="project.site_off">Site officiel</NuxtLink><br /></span>
              <span v-if="project.site_fr !== ''"><NuxtLink :to="project.site_fr">Site officiel Français</NuxtLink><br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.genres !== ''">Genre : {{ project.genres }}<br /></span>
              <span v-if="project.nb_eps !== 0">Episodes : {{ project.nb_eps }}<br /></span>
              <span v-if="project.nb_oav !== 0">OAVs : {{ project.nb_oav }}<br /></span>
              <span v-if="project.nb_films !== 0">Films : {{ project.nb_films }}<br /></span>
              <span v-if="project.coprod !== ''">Co-prod : {{ project.coprod }}<br /></span>
            </div>
          </div>
          <div>
            Synopsis :<br />
            <div style="height: 100px; overflow: auto;">
              {{ project.synopsis }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="project.type === 's'" class="projet-bandeau-main">
      <!-- SCANTRAD -->
      <div>
        <span class="projet-bandeau-titre">{{ project.nom }}</span>
        <span v-if="project.etat === 'en cours'" class="projet-bandeau-en-cours" style="float: right; width: 100px;">
          En cours
        </span>
        <span v-if="project.etat === 'termine'" class="projet-bandeau-termine" style="float: right; width: 100px;">
          Terminé
        </span>
        <span v-if="project.etat === 'abandon'" class="projet-bandeau-abandon" style="float: right; width: 100px;">
          Abandonné
        </span>
        <span v-if="project.etat === 'licence'" class="projet-bandeau-licence" style="float: right; width: 100px;">
          Licencié
        </span>
        <span class="projet-bandeau-cat-s" style="float: right; width: 150px;">
          Scantrad
        </span>
      </div>
      <div style="position: relative">
        <NuxtImg :src="project.bandeau" />
        <div class="projet-bandeau-details">
          <div>
            <div class="projet-bandeau-texte">
              Titre : {{ project.nom }}<br />
              <span v-if="project.titre_o !== ''">Titre original : {{ project.titre_o }}<br /></span>
              <span v-if="project.titre_a !== ''">Titre anglais : {{ project.titre_a }}<br /></span>
              <span v-if="project.studio !== ''">Studio : {{ project.studio }}<br /></span>
              <span v-if="project.saison !== ''">Saison : {{ project.saison }}<br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.annee !== ''">Année : {{ project.annee }}<br /></span>
              <span v-if="project.pays !== ''">Pays : {{ project.pays }}<br /></span>
              <span v-if="project.auteur !== ''">Auteur : {{ project.auteur }}<br /></span>
              <span v-if="project.site_off !== ''"><NuxtLink :to="project.site_off">Site officiel</NuxtLink><br /></span>
              <span v-if="project.site_fr !== ''"><NuxtLink :to="project.site_fr">Site officiel Français</NuxtLink><br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.genres !== ''">Genre : {{ project.genres }}<br /></span>
              <span v-if="project.nb_eps !== 0">Episodes : {{ project.nb_eps }}<br /></span>
              <span v-if="project.nb_oav !== 0">OAVs : {{ project.nb_oav }}<br /></span>
              <span v-if="project.nb_films !== 0">Films : {{ project.nb_films }}<br /></span>
              <span v-if="project.coprod !== ''">Co-prod : {{ project.coprod }}<br /></span>
            </div>
          </div>
          <div>
            Synopsis :<br />
            <div style="height: 100px; overflow: auto;">
              {{ project.synopsis }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="project.type === 'l'" class="projet-bandeau-main">
      <!-- LN -->
      <div>
        <span class="projet-bandeau-titre">{{ project.nom }}</span>
        <span v-if="project.etat === 'en cours'" class="projet-bandeau-en-cours" style="float: right; width: 100px;">
          En cours
        </span>
        <span v-if="project.etat === 'termine'" class="projet-bandeau-termine" style="float: right; width: 100px;">
          Terminé
        </span>
        <span v-if="project.etat === 'abandon'" class="projet-bandeau-abandon" style="float: right; width: 100px;">
          Abandonné
        </span>
        <span v-if="project.etat === 'licence'" class="projet-bandeau-licence" style="float: right; width: 100px;">
          Licencié
        </span>
        <span class="projet-bandeau-cat-l" style="float: right; width: 150px;">
          Light Novel
        </span>
      </div>
      <div style="position: relative">
        <NuxtImg :src="project.bandeau" />
        <div class="projet-bandeau-details">
          <div>
            <div class="projet-bandeau-texte">
              Titre : {{ project.nom }}<br />
              <span v-if="project.titre_o !== ''">Titre original : {{ project.titre_o }}<br /></span>
              <span v-if="project.titre_a !== ''">Titre anglais : {{ project.titre_a }}<br /></span>
              <span v-if="project.studio !== ''">Studio : {{ project.studio }}<br /></span>
              <span v-if="project.saison !== ''">Saison : {{ project.saison }}<br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.annee !== ''">Année : {{ project.annee }}<br /></span>
              <span v-if="project.pays !== ''">Pays : {{ project.pays }}<br /></span>
              <span v-if="project.auteur !== ''">Auteur : {{ project.auteur }}<br /></span>
              <span v-if="project.site_off !== ''"><NuxtLink :to="project.site_off">Site officiel</NuxtLink><br /></span>
              <span v-if="project.site_fr !== ''"><NuxtLink :to="project.site_fr">Site officiel Français</NuxtLink><br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.genres !== ''">Genre : {{ project.genres }}<br /></span>
              <span v-if="project.nb_eps !== 0">Episodes : {{ project.nb_eps }}<br /></span>
              <span v-if="project.nb_oav !== 0">OAVs : {{ project.nb_oav }}<br /></span>
              <span v-if="project.nb_films !== 0">Films : {{ project.nb_films }}<br /></span>
              <span v-if="project.coprod !== ''">Co-prod : {{ project.coprod }}<br /></span>
            </div>
          </div>
          <div>
            Synopsis :<br />
            <div style="height: 100px; overflow: auto;">
              {{ project.synopsis }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="project.type === 'v'" class="projet-bandeau-main">
      <!-- VN -->
      <div>
        <span class="projet-bandeau-titre">{{ project.nom }}</span>
        <span v-if="project.etat === 'en cours'" class="projet-bandeau-en-cours" style="float: right; width: 100px;">
          En cours
        </span>
        <span v-if="project.etat === 'termine'" class="projet-bandeau-termine" style="float: right; width: 100px;">
          Terminé
        </span>
        <span v-if="project.etat === 'abandon'" class="projet-bandeau-abandon" style="float: right; width: 100px;">
          Abandonné
        </span>
        <span v-if="project.etat === 'licence'" class="projet-bandeau-licence" style="float: right; width: 100px;">
          Licencié
        </span>
        <span class="projet-bandeau-cat-v" style="float: right; width: 150px;">
          Visual Novel
        </span>
      </div>
      <div style="position: relative">
        <NuxtImg :src="project.bandeau" />
        <div class="projet-bandeau-details">
          <div>
            <div class="projet-bandeau-texte">
              Titre : {{ project.nom }}<br />
              <span v-if="project.titre_o !== ''">Titre original : {{ project.titre_o }}<br /></span>
              <span v-if="project.titre_a !== ''">Titre anglais : {{ project.titre_a }}<br /></span>
              <span v-if="project.studio !== ''">Studio : {{ project.studio }}<br /></span>
              <span v-if="project.saison !== ''">Saison : {{ project.saison }}<br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.annee !== ''">Année : {{ project.annee }}<br /></span>
              <span v-if="project.pays !== ''">Pays : {{ project.pays }}<br /></span>
              <span v-if="project.auteur !== ''">Auteur : {{ project.auteur }}<br /></span>
              <span v-if="project.site_off !== ''"><NuxtLink :to="project.site_off">Site officiel</NuxtLink><br /></span>
              <span v-if="project.site_fr !== ''"><NuxtLink :to="project.site_fr">Site officiel Français</NuxtLink><br /></span>
            </div>
            <div class="projet-bandeau-texte">
              <span v-if="project.genres !== ''">Genre : {{ project.genres }}<br /></span>
              <span v-if="project.nb_eps !== 0">Episodes : {{ project.nb_eps }}<br /></span>
              <span v-if="project.nb_oav !== 0">OAVs : {{ project.nb_oav }}<br /></span>
              <span v-if="project.nb_films !== 0">Films : {{ project.nb_films }}<br /></span>
              <span v-if="project.coprod !== ''">Co-prod : {{ project.coprod }}<br /></span>
            </div>
          </div>
          <div>
            Synopsis :<br />
            <div style="height: 100px; overflow: auto;">
              {{ project.synopsis }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projet-bandeau {
  width: 1155px;
  float: left;
  position: relative;
  left: 30px;
}

.projet-bandeau-main {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: rgba(0, 0, 0, 0.63);
}

.projet-bandeau-details {
  background-color: rgba(0, 0, 0, 0.63);
  width: 100%;
  height: fit-content;
  float: right;
  position: absolute;
  bottom: 0;
  right: 0;
}

.projet-bandeau-titre {
  background-color: black;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: large;
}

.projet-bandeau-texte {
  float: left;
  width: 33%;
}

.projet-bandeau-cat-f {
  background-color: #3bb55e;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-cat-s {
  background-color: #0095ff;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-cat-l {
  background-color: #9a278d;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-cat-v {
  background-color: #19bd33;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-cat-a {
  background-color: dimgray;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-en-cours {
  background-color: #00006a;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-termine {
  background-color: green;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-abandon {
  background-color: #b37500;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}

.projet-bandeau-licence {
  background-color: red;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: small;
  text-align: center;
  position: relative;
  top: 2px;
}
</style>