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
  name: "App",
  components: { NavBar, HeroBanner, ToggleGender },
};

</script>


<style >
* {
  margin: 0;
  padding: 0;
}

</style>

