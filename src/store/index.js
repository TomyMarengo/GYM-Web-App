import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logged: false,
        fromPath: null
    },
    getters: {
      getLogged (state) {
          return state.logged
      },
      getFromPath (state) {
          return state.fromPath
      }
    },
    mutations: {
        login: state => {
            state.logged = true
        },
        logout: state => {
            state.logged = false
        },
        setFromPath: (state, newFromPath) => {
            state.fromPath = newFromPath
        }
    }
})