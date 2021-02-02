import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: {
      toggleSidebar: null,
    },
  },
  mutations: {
    SET_EVENT(state, { name, value }) {
      state.events[name] = value
    },
  },
  actions: {},
  modules: {},
})
