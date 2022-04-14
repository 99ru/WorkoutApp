<template>
  <div id="app">
    <header>
      <NavBar />
      <HeroBanner />
    </header>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroBanner from "@/components/HeroBanner.vue";

export default {
  components: { NavBar, HeroBanner },
  name: "App",
};
</script>


<style >
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1{
  
  font-weight: 700;
}
h2{
  
  font-weight: 600;
}
h3{
  font-weight: 400;
}
p{
  font-weight: 300;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
</style>

