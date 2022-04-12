<template>
<div class="workouts" v-for="workout in workouts" :key="workout.id">
    <h1>{{ workout.name }}</h1>
    <h2>{{ workout.bodyAreas }}</h2> 
   <img :src="workout.male.image" >
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
  
const workouts = ref([])

onBeforeMount(async () => {
  workouts.value = await fetch("https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/").then(raw => raw.json()).then(json => json.exercises)
})
</script>
