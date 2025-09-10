<template>
  <v-app>
    <Nav />
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
