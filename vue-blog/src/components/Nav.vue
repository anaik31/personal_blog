<template>
    <v-app-bar :elevation="8" style="padding:20px; background-color:#c5cbc7; color: #28474e">
      <img src="/img/readwitharpeet.png" alt="Logo" width="70" height="70" />

      <v-app-bar-title style="font-size: 30px;">Read With Arpeet</v-app-bar-title>

      <v-btn text>Sports</v-btn>
      <v-btn text>TV Shows</v-btn>
      <v-btn text>Hobbies</v-btn>
      <v-btn text>About</v-btn>

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
