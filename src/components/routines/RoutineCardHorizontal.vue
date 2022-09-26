<template>
  <v-card outlined class="mb-5">
    <v-img src="../../../public/images/abdominales.jpg" height="200px" />
    <v-card-title class="text-capitalize">{{ routine.name }}
      <v-card-actions class="card-actions" v-if="this.$vuetify.breakpoint.smAndUp">
        <v-spacer></v-spacer>
        <v-sheet elevation="1" class="px-2 py-1 mr-4 d-flex align-center">
          <div class="pr-1">{{routine.classification}}</div>
          <v-icon color="yellow">
            mdi-star
          </v-icon>
        </v-sheet>
        <v-sheet elevation="1" class="px-2 py-1 mr-4 d-flex align-center">
          <div class="pr-1">{{routine.difficulty}}</div>
          <v-icon color="red">
            mdi-weight
          </v-icon>
        </v-sheet>
      </v-card-actions>
    </v-card-title>
    <v-card-subtitle>Creada por {{ routine.creator }}</v-card-subtitle>
    <v-card-text>
      <strong>Contiene ejercicios de:</strong>
      <span v-for="(muscle, index) of routine.muscles" :key="muscle">
        {{muscle}}
      <span v-if="index != Object.keys(routine.muscles).length-1">-</span></span>
      <span v-for="(type, index) of routine.exerciseTypes" :key="type">
        <span v-if="index == 0">-</span>
        {{type}}
      <span v-if="index != Object.keys(routine.exerciseTypes).length-1">-</span></span>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "RoutineCardHorizontal",
  props: {
    routine: Object,
  }
}
</script>

<style scoped>
.card-actions {
  position: absolute;
  right: 0;
}
</style>