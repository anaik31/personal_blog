<template>
  <v-container class="py-6">
    <v-row>
      <v-col
        v-for="post in posts"
        :key="post.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card elevation="4" class="article-card">
          <v-img
            :src="post.image || 'img/default.jpg'"  
            height="200px"
            cover
          ></v-img>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-subtitle>{{ new Date(post.created_at).toLocaleDateString() }}</v-card-subtitle>
          <v-card-text>
            {{ post.content }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="readPost(post.id)">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);

const fetchPosts = async () => {
  const res = await fetch("https://anpersonal.com/blog-api-backend/posts?category=sports");
  posts.value = await res.json();
};


const readPost = (id) => {
  console.log("Read post", id); 
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
