<template>
  <main>
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
        </div>
 
        <div class="modal" v-if="showModal === workout.id">
          <h3>
            Mouscle groups: {{ workout.bodyAreas[0] }}
            {{ workout.bodyAreas[1] }}
          </h3>
          <b v-html="workout.transcript"> </b>
          <button class="close" @click="showModal = false">close</button>
        </div>


      </div>
    </div>
  </main>
</template>
<script>
export default {
  components: {},
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

<style scoped>
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

.modal {


  padding: 1rem 2rem;
  background-color: rgba(216, 213, 213, 0.382);
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap");
</style>
