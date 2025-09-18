<template>
  <v-app-bar :elevation="8" style="padding:20px; background-color:#c5cbc7; color: #28474e">
    <router-link to="/blog/">
      <img src="/img/readwitharpeet.png" alt="Logo" width="70" height="70" />
    </router-link>

    <v-app-bar-title style="font-size: 30px;">Read With Arpeet</v-app-bar-title>

    <!-- Scrollable links container -->
    <div class="nav-links">
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
    </div>
  </v-app-bar>
</template>

<style scoped>
.nav-links {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  max-width: 100%;
  padding-bottom: 5px; 
  scrollbar-color: #28474e #c5cbc7;
  scrollbar-width: thin; 
}

.nav-links::-webkit-scrollbar {
  height: 6px; 
}

.nav-links::-webkit-scrollbar-track {
  background: #c5cbc7;
  border-radius: 10px;
}

.nav-links::-webkit-scrollbar-thumb {
  background-color: #28474e;
  border-radius: 10px;
}
</style>
