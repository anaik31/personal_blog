<template>
  <img src="/img/Home.JPG" alt="Home" class="hero-img"></img>

  <h3 class="latest-posts">Latest Posts</h3>
</template>

<script>
</script>

<style>
.hero-img {
  width: 100%;           
  max-height: 80%;    
  object-fit:cover;    
  display: block;     
  border-radius: 6%;
}
.latest-posts{
  text-align: center;
  align-items: center;
  margin-top: 3%;
  display: flex;
  margin: 20px 0;
  padding: 0 40px;
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
</style>