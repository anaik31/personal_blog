<template>
  <div class="home-container">
  
    <img src="/img/Home.JPG" alt="Home" class="hero-img" />


    <h3 class="latest-posts">Latest Posts</h3>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  text-align: center;
}


.hero-img {
  width: 100%;
  max-height: 70vh;  
  object-fit: cover;  
  display: block;
  border-radius: 6%;
  margin: 0 auto;
}

/* Divider Heading */
.latest-posts {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 0;
  padding: 0 20px;
  font-size: 1.5rem; 
  font-weight: 600;
}

.latest-posts::before,
.latest-posts::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #000;
}

.latest-posts::before {
  margin-right: 15px;
}

.latest-posts::after {
  margin-left: 15px;
}

@media (max-width: 600px) {
  .hero-img {
    max-height: 40vh;
  }
  .latest-posts {
    font-size: 1.2rem;
    padding: 0 10px;
  }
}
</style>
