import { createStore } from "vuex";

export default createStore({
  state: {
    workouts: [],
    myList: [],
  },

  mutations: {
    saveWorkouts(state, workouts) {
      state.workouts = workouts;
    },
   ADD_WORKOUT(state, payload) {
     state.myList.push(payload)
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
    addWorkout(context, workout) {
      context.commit('ADD_WORKOUT', workout)
    }
  },

  getters: {
    getMyList(state) {
    return state.myList
  }
}

});
