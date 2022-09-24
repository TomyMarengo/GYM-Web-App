<template>
  <v-card outlined class="fill-height mb-15">
    <v-img src="../../../public/images/abdominales.jpg" height="200px" />
    <v-card-title>{{ rutine.name }}</v-card-title>
    <v-card-subtitle>Creador por {{ rutine.creator }}</v-card-subtitle>
    <v-card-text>
      <strong>Contiene ejercicios de:</strong>
      <span v-for="(muscle, index) of rutine.muscles" :key="muscle">
        {{muscle}}
      <span v-if="index != Object.keys(rutine.muscles).length-1">-</span></span>
      <span v-for="(type, index) of rutine.exerciseTypes" :key="type">
        <span v-if="index == 0">-</span>
        {{type}}
      <span v-if="index != Object.keys(rutine.exerciseTypes).length-1">-</span></span>
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-spacer></v-spacer>
      <v-sheet elevation="2" class="px-2 py-1 mr-4 d-flex align-center">
        <div class="pr-1">{{rutine.rating}}</div>
        <v-icon color="yellow">
          mdi-star
        </v-icon>
      </v-sheet>
      <v-sheet elevation="2" class="px-2 py-1 mr-4 d-flex align-center">
        <div class="pr-1">{{rutine.difficulty}}</div>
        <v-icon color="red">
          mdi-weight
        </v-icon>
      </v-sheet>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RoutineCard",
  props: {
    rutine: Object,
  }
}
</script>

<style scoped>
  .card-actions {
    position: absolute;
    bottom: 10px;
    right: 0;
  }
</style>