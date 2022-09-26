import Vue from 'vue';
import Vuex from "vuex";
import routines from '../routines.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routines,
        logged: false,
        user: '',
        fromPath: null,
        exerciseTypes: ['Fortalecimiento', 'Aeróbico', 'Flexibilidad', 'Resistencia'],
        muscles: ['Biceps', 'Cuadriceps', 'Dorsal', 'Pectoral', 'Piernas', 'Glúteos']
    },
    getters: {
      getLogged (state) {
          return state.logged
      },
      getFromPath (state) {
          return state.fromPath
      },
      getExerciseTypes (state) {
          return state.exerciseTypes
      },
      getMuscles (state) {
          return state.muscles
      },
      getUser (state) {
          return state.user
      }
    },
    mutations: {
        login: (state, user) => {
            state.logged = true
            state.user = user
        },
        logout: state => {
            state.logged = false
            state.user = ''
        },
        setFromPath: (state, newFromPath) => {
            state.fromPath = newFromPath
        }
    }
})