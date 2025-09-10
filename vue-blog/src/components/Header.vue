<template>
  <v-app>
    <v-app-bar :elevation="8" style="padding:10px;">
      <v-app-bar-title style="font-size: 30px;">Read With Arpeet</v-app-bar-title>
      <v-btn>Sports</v-btn>
      <v-btn>TV Shows</v-btn>
      <v-btn>Hobbies</v-btn>
      <v-btn>About</v-btn>
      <v-btn>
      <font-awesome-icon :icon="['fab', 'linkedin']" size = "2x" />
      </v-btn>
      <v-btn>
      <font-awesome-icon :icon="['fab', 'github']" size = "2x"/>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub)
</script>

<style scoped>
</style>
