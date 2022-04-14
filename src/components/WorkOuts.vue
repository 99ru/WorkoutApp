<template>
  <main>
    <h1>yo</h1>
<!-- 
    <div class="flex-container" v-for="workout in workouts" :key="workout.id">
      <h1> {{ workouts.name }} </h1>
      <img :src="workout.male.image" />
      <h2>{{ workout.name }}</h2>
      <div>
        Muscles:
        {{ workout.bodyAreas[0] }} &
        {{ workout.bodyAreas[1] }}
      </div>
      
    </div> -->
  </main>
</template>


<script setup>
/* import { ref, onBeforeMount } from "vue";
const workouts = ref([]);

onBeforeMount(async () => {
  workouts.value = await fetch(
    "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
  )
    .then((response) => response.json())
    .then((json) => json.exercises);  
}); */
</script>


<style scoped>
img {
  display: flex;
  flex-direction: row;
  width: 60%;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  padding: 40px calc((100% - (255px * 3)) / 2);
}

button {
  background-color: black;
  color: whitesmoke;
  padding: 0.3rem;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  border: solid 1px rgb(255, 255, 255);
  width: 150px;
  border-radius: 1px;
}
</style>
