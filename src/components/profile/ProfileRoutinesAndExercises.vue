<template>
  <div>

    <v-toolbar elevation="0"  color="transparent" class="">
      <v-toolbar-title class="font-weight-bold text-uppercase">Mis Favoritas</v-toolbar-title>
    </v-toolbar>
    <v-slide-group show-arrows>
      <v-slide-item v-for="(routine, i) in myFavorites" :key="i">
        <small-favorite-card class="ma-2" :routine="routine" :id="i" @icon-click="onRoutineUnfavorited"/>
      </v-slide-item>
    </v-slide-group>

    <v-toolbar elevation="0"  color="transparent" class="">
      <v-toolbar-title class="font-weight-bold text-uppercase">Mis Rutinas</v-toolbar-title>
      <v-btn @click.prevent="onAddRoutineClicked" fab :elevation="1" color="primary" small class="ml-3">
        <v-icon large color="secondary">mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-slide-group show-arrows>
      <v-slide-item v-for="(routine, i) in myRoutines" :key="i">
        <small-routine-card class="ma-2" :routine="routine" :id="i" @icon-click="onEditRoutineClicked"/>
      </v-slide-item>
    </v-slide-group>

    <v-toolbar elevation="0"  color="transparent" class="">
      <v-toolbar-title class="font-weight-bold text-uppercase">Mis Ejercicios</v-toolbar-title>
      <v-btn @click.prevent="onAddExerciseClicked" fab :elevation="1" color="primary" small class="ml-3">
        <v-icon large color="secondary">mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-slide-group show-arrows>
      <v-slide-item v-for="(exercise, i) in myExercises" :key="i">
        <small-exercise-card class="ma-2" :exercise="exercise" :id="i" @icon-click="onEditExerciseClicked"/>
      </v-slide-item>
    </v-slide-group>
  </div>

</template>

<script>
import SmallFavoriteCard from "@/components/profile/SmallFavoriteCard";
import SmallRoutineCard from "@/components/profile/SmallRoutineCard";
import SmallExerciseCard from "@/components/profile/SmallExerciseCard";

export default {
  name: "profileRoutinesAndExercises",

  components: {SmallExerciseCard, SmallRoutineCard, SmallFavoriteCard},

  data: () => ({
    myFavorites: [
      { name: 'Favorita1' },
      { name: 'Favorita2' },
      { name: 'Favorita3' },
      { name: 'Favorita4' },
      { name: 'Favorita5' },
      { name: 'Favorita6' },
    ],

    myRoutines: [
      { name: 'MiRutina1' },
      { name: 'MiRutina2' },
      { name: 'MiRutina3' },
      { name: 'MiRutina4' },
      { name: 'MiRutina5' },
      { name: 'MiRutina6' },
    ],

    myExercises: [
      { name: 'MiEjercicio1', series: 20, seconds: 50 },
      { name: 'MiEjercicio2', seconds: 70 },
      { name: 'MiEjercicio3', series: 30 },
      { name: 'MiEjercicio4', series: 20, seconds: 50 },
      { name: 'MiEjercicio5', seconds: 70 },
      { name: 'MiEjercicio6', series: 30 },
    ],
  }),

  methods: {
    onRoutineUnfavorited: function (id) {
      console.log('Routine unfavorited: ' + id);
    },

    onEditRoutineClicked: function (id) {
      console.log('Edit routine clicked: ' + id);
    },

    onEditExerciseClicked: function(id) {
      console.log('Edit exercise clicked: ' + id);
    },

    onAddRoutineClicked: function() {
      console.log('Add Routine Clicked!');
    },

    onAddExerciseClicked: function() {
      console.log('Add Exercise Clicked!');
    },
  }
}
</script>

<style scoped>
  .main-div {
    height: 100%;
    background-color: white;
    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .content-div {
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: clip;
  }

  .title-button-div {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
</style>