<template>
<main>
<div class="workouts" v-for="workout in workouts" :key="workout.id">
   <img :src="workout.male.image" >
    <h3> {{ workout.name }}</h3>
    <button>show more</button>
  </div>
</main>

</template>
  
<script setup>
import { ref, onBeforeMount } from 'vue'
  
const workouts = ref([])

onBeforeMount(async () => {
  workouts.value = await fetch("https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/").then(raw => raw.json()).then(json => json.exercises)
})
</script>

<style scoped>
img{
  width: 40%;
}

.workouts{
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  padding: 40px calc((100% - (255px * 3)) / 2);

}

button{
  background-color: black;
  color: whitesmoke;
  padding: 1rem;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  border: solid 1px rgb(255, 255, 255);
  width: 150px;
}


</style>