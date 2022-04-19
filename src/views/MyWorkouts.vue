<template>
  <main>
    <div class="wrapper">
      <article>
        <h1>Articles</h1>
        <div class="banner">
          <img class="pic1" src="@/assets/pic1.jpg" />
          <img src="@/assets/webp.webp" height="540" />
          <img src="@/assets/united.jpg" />
        </div>
      </article>

      <div class="my-workouts-container">
        <div class="my-workouts-list">
          <h1>Your personal workout list</h1>
          <li></li>
          <li></li>
          <li></li>
        
         
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
 data() {
   return {
    workoutList: this.$store.state.workoutList,
   };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 5rem;
}

.banner {
  gap: 15px;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(21, 180, 228);
  /*  border: solid 10px #00a2eccc; */
}
</style>
