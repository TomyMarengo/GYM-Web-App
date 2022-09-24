import Vue from 'vue';
import Vuex from "vuex";
import rutines from '../rutines.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rutines,
        logged: false,
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