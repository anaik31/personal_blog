<template>
  <v-app>
    <Nav />
    <v-main class="mt-12">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Nav from './components/Nav.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
