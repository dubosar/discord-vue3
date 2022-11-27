import { createStore } from "vuex"

export default createStore({
  state: {
    counter: 1,
  },
  getters: {

  },
  actions: {

  },
  mutations: {
    increment() {
      this.state.counter++
    }
  },
  modules: {

  }
})
