<template>
  <v-app>
    <v-app-bar :elevation="8" >
      <v-app-bar-title>Read With Arpeet</v-app-bar-title>
      <v-btn>Sports</v-btn>
      <v-btn>TV Shows</v-btn>
      <v-btn>Hobbies</v-btn>
      <v-btn>About</v-btn>
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <font-awesome-icon :icon="['fab', 'github']" />
    </v-app-bar>

    <v-main>
      <v-container>
        <h1>Welcome to My Personal Blog</h1>
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
