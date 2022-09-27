<template>
  <div>

    <v-toolbar elevation="0"  color="transparent" class="">
      <v-toolbar-title class="font-weight-bold text-uppercase">Mis Favoritas</v-toolbar-title>
    </v-toolbar>
    <v-slide-group show-arrows>
      <v-slide-item v-for="(routine, i) in userData.favorites" :key="i">
        <small-favorite-card class="ma-2" :routine="getRoutine(routine.id)" :id="i" @icon-click="onRoutineUnfavorited"/>
      </v-slide-item>
    </v-slide-group>

    <v-toolbar elevation="0"  color="transparent" class="">
      <v-toolbar-title class="font-weight-bold text-uppercase">Mis Rutinas</v-toolbar-title>
      <v-btn @click.prevent="onAddRoutineClicked" fab :elevation="1" color="primary" small class="ml-3">
        <v-icon large color="secondary">mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-slide-group show-arrows>
      <v-slide-item v-for="(routine, i) in userData.routines" :key="i">
        <small-routine-card class="ma-2" :routine="getRoutine(routine.id)" :id="i" @icon-click="onEditRoutineClicked"/>
      </v-slide-item>
    </v-slide-group>

    <v-toolbar elevation="0"  color="transparent" class="">
      <v-toolbar-title class="font-weight-bold text-uppercase">Mis Ejercicios</v-toolbar-title>
      <v-btn @click.prevent="onAddExerciseClicked" fab :elevation="1" color="primary" small class="ml-3">
        <v-icon large color="secondary">mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-slide-group show-arrows>
      <v-slide-item v-for="(exercise, i) in userData.exercises" :key="i">
        <small-exercise-card class="ma-2" :exercise="exercise" :id="i" @icon-click="onEditExerciseClicked"/>
      </v-slide-item>
    </v-slide-group>
  </div>

</template>

<script>
import SmallFavoriteCard from "@/components/profile/SmallFavoriteCard";
import SmallRoutineCard from "@/components/profile/SmallRoutineCard";
import SmallExerciseCard from "@/components/profile/SmallExerciseCard";
import routines from "@/routines";

export default {
  name: "profileRoutinesAndExercises",

  components: {SmallExerciseCard, SmallRoutineCard, SmallFavoriteCard},

  props: ['userData'],

  methods: {
    getRoutine: function (id) {
      return routines.filter(r => r.id == id)[0]
    },

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

</style>