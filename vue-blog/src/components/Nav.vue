<template>
    <v-app-bar :elevation="8" style="padding:20px; background-color:#c5cbc7; color: #28474e">
      <router-link to="/blog">
      <img src="/img/readwitharpeet.png" alt="Logo" width="70" height="70" />
      </router-link>

      <v-app-bar-title style="font-size: 30px;">Read With Arpeet</v-app-bar-title>

      <v-btn text to="/blog/sports">Sports</v-btn>
      <v-btn text to="/blog/tvshows">TV Shows</v-btn>
      <v-btn text to="/blog/hobbies">Hobbies</v-btn>
      <v-btn text href="https://www.anpersonal.com/portfolio" target="_blank">About</v-btn>

      <v-btn icon href="https://www.linkedin.com/in/arpeet-naik" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
      </v-btn>
      <v-btn icon href="https://www.github.com/anaik31" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </v-btn>
    </v-app-bar>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub)
</script>

<style></style>
