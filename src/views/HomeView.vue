<template>
  <main>
  <HeroBanner />
    <div class="gender">
      <button @click="toggleMens">Mens</button>
      <button @click="toggleWomens">Womens</button>
    </div>

    <div class="wrapper">
      <div class="workouts" v-for="workout in workouts" :key="workout.id">
        <div class="card-item-container">
          <img v-if="mens" :src="workout.male.image" />
          <img v-else :src="workout.female.image" />
        </div>

        <div class="card-item-content">
          <h3>{{ workout.name }}</h3>
          <button @click="handleModal(workout.id)">Details</button>
          <button @click="addWorkout(workout)"> ♡ </button>
        </div>

                   <!-- details modal -->
        <div class="modal" v-if="showModal === workout.id">
          <div class="modal-wrapper">
            <img v-if="mens" :src="workout.male.image"  />
            <img v-else :src="workout.female.image"   />
            <h1>{{ workout.name }}</h1>
            <h3> Mouscle groups: {{ workout.bodyAreas[0] }} {{ workout.bodyAreas[1] }}</h3>
            <b v-html="workout.transcript"> </b>
            <button class="close" @click="showModal = false">close</button>
          </div>
        </div> 

      </div>
    </div>
  </main>
</template>
<script>
import HeroBanner from "@/components/HeroBanner.vue";

export default {
  components: {
    HeroBanner,
  },
  data() {
    return {
      mens: true,
      womens: true,
      showModal: false,
    };
  },

  methods: {
    toggleMens() {
      this.mens = true;
      this.womens = false;
    },
    toggleWomens() {
      this.womens = true;
      this.mens = false;
    },
    handleModal(id) {
      this.showModal = id;
    },
    addWorkout(id) {
      this.$store.dispatch("addWorkout" , id );
    }
   
  },

  computed: {
    workouts() {
      return this.$store.state.workouts;
    },
  },

  async mounted() {
    await this.$store.dispatch("fetchWorkouts");
  },
};
</script>

<style scoped lang="scss">
.gender {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.wrapper {
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}

img {
  display: flex;
  width: 100%;
}

.workouts {
  width: 350px;
  padding: 0.3rem;
  flex-flow: column;
  margin: 2rem;
}



.card-item-content {
  padding: 0.5rem;
  height: 120px;
  background-color: #ffffff;
  font-family: "Montserrat", sans-serif;
}

button {
  width: 120px;
  background-color: rgba(0, 0, 0, 0.887);
  color: whitesmoke;
  padding: 0.3rem;
  margin: 10px;
  border: solid 1px rgb(255, 255, 255);
  text-transform: uppercase;
  border-radius: 1px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.fav-btn:active {
   background-color: rgba(0, 255, 255, 0.959);
}






.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
}
.modal img{
  width: 20%;
}

.modal-wrapper {
  width: 80vw;
  height: 90vh;
  background: rgb(235, 235, 235);
  color: #000;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5rem;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  line-height: 2;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap");
</style>
