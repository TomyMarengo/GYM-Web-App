import Vue from 'vue';
import Vuex from "vuex";
import routines from '../routines'
import users from '../users'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routines,
        users: users,
        logged: true,
        user: 'tmarengo@itba.edu.ar',
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
        },
        addExercise: (state, idRoutine, idCycle, exercise) => {
            state.routines[idRoutine].cycles[idCycle].exercises.push(exercise)
        }
    }
})