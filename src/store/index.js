import { createStore } from "vuex";

export default createStore({
  state: {
    workouts: [],
    currentPage: 1,
    maxPages: 0,
  },

  mutations: {
    saveWorkouts(state, workouts) {
      state.workouts = workouts; 
    },
  },

  actions: {
    async fetchWorkouts(context) {
      const request = await fetch(
        "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
      );
      const data = await request.json();
      context.commit("saveWorkouts", data.exercises);
    },
  },
});
