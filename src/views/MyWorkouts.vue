<template>
  <main>
    <div class="wrapper">
    <!--    <article>
        <h1>Articles</h1>
        <div class="banner">
          <img class="pic1" src="@/assets/pic1.jpg" />
          <img src="@/assets/webp.webp" height="540" />
          <img src="@/assets/united.jpg" />
        </div>
      </article> -->

      <div class="hero-container">
        <div class="hero-content">
          <img src="@/assets/banner1.png" alt="" />
        </div>
      </div>

      <div class="my-workouts-container">
        <div class="my-list">
          <ul v-for="workout in workouts" :key="workout.id">
     
           
            <h2>{{ workout.name }}</h2>

          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

  computed: {
    workouts() {
      return this.$store.getters.getMyList;
    },
  },

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

.hero-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
.hero-content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border: solid 10px rgb(12, 215, 241)
}
.my-list {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
.my-list img {
  width: 15%;
}
</style>
