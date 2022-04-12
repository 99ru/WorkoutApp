<template>
  <main>
    <WorkOuts />
  </main>
</template>

<script>
import WorkOuts from "@/components/WorkOuts.vue";
export default {
  components: { WorkOuts },
}
</script>

<style scoped>
main{
  background-color: whitesmoke;
  display: flex;
  table-layout: fixed;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

h1{
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: rgb(15, 14, 14);
}

</style>


