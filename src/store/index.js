import { createStore } from "vuex";

export default createStore({
  state: { 
    workouts: [],
    myWorkoutList: [],
  },
  mutations: {
    saveWorkouts(state, workouts) {
      state.workouts = workouts; 
    },
    addToList(state, workout) {
      state.myWorkoutList.push(workout);
    }
  
  },
  actions: {
    async fetchWorkouts(context) {
      const request = await fetch(
        "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
      );
      const data = await request.json();
      context.commit("saveWorkouts", data.exercises);
    },

    addToList(context, workout) {
      context.commit("addToList", workout);
    }

   
  },
});
