<template>
  <v-container class="py-6">
    <v-row>

      <v-col cols="12" sm="6" md="4">
        <v-card elevation="4" class="article-card">
          <v-img
            src="img/nbafinals.jpg"
            height="200px"
            cover
          ></v-img>
          <v-card-title>🏀 NBA Finals Recap</v-card-title>
          <v-card-subtitle>September 2025</v-card-subtitle>
          <v-card-text>
            A quick breakdown of last night's thrilling matchup...
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card elevation="4" class="article-card">
          <v-img
            src="img/psgfinals.webp"
            height="200px"
            cover
          ></v-img>
          <v-card-title>⚽ Champions League Updates</v-card-title>
          <v-card-subtitle>September 2025</v-card-subtitle>
          <v-card-text>
            The biggest surprises from this week's matches...
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card elevation="4" class="article-card">
          <v-img
            src="img/clemsonfootball.webp"
            height="200px"
            cover
          ></v-img>
          <v-card-title>🏈 Clemson Football Updates</v-card-title>
          <v-card-subtitle>September 2025</v-card-subtitle>
          <v-card-text>
            The biggest questions after the Georgia Tech loss...
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);

// Fetch posts from backend
const fetchPosts = async () => {
  const res = await fetch("http://localhost:5000/posts?category=sports"); // adjust backend URL
  posts.value = await res.json();
};

onMounted(fetchPosts);
</script>


<style scoped>
.article-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.article-card:hover {
  transform: translateY(-5px);
}
</style>
