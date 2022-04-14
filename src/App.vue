<template>
  <div id="app">
    <header>
      <NavBar />
      <HeroBanner />
      <ToggleGender />
    </header>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import ToggleGender from "@/components/ToggleGender.vue";

export default {
  components: { NavBar, HeroBanner, ToggleGender },
  name: "App",
};
</script>


<style >
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}



</style>

