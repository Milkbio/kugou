import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideNav: {},
    crumbs: []
  },
  mutations: {
    updateSide (state, data) {
      state.sideNav = data
    },
    updateCrumbs (state, data) {
      state.crubms = data
    }
  },
  actions: {
    updateSide ({commit}, data) {
      commit('updateSide', data)
    },
    updateCrumbs ({commit}, data) {
      commit('updateCrumbs', data)
    }
  }
})
