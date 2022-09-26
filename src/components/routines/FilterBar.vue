<template>
  <v-card :elevation="4" class="my-6">
    <v-toolbar dark color="secondary">
      <v-toolbar-title class="font-weight-bold text-uppercase">Rutinas</v-toolbar-title>
    </v-toolbar>
    <v-card-title>Filtros</v-card-title>
    <v-expansion-panels class="px-5">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="fa-angle-down">
          Tipos de ejercicios
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
              v-for="(exerciseType, i) in this.$store.getters.getExerciseTypes"
              :key="i"
              :label="exerciseType"
              :value="exerciseType"
              color="secondary"
              v-model="types"
              @change="filterChange()"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="fa-angle-down">
          Contiene estos músculos
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
              v-for="(muscle, i) in this.$store.getters.getMuscles"
              :key="i"
              :label="muscle"
              :value="muscle"
              color="secondary"
              v-model="muscles"
              @change="filterChange()"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row class="px-5">
      <v-col class="mt-10">
        <h3>Clasificación</h3>
        <v-range-slider
            v-model="classification"
            :tick-labels="['0','1','2','3','4','5']"
            :value="[0,5]"
            min="0"
            max="5"
            tick-size="0"
            ticks="always"
            thumb-color="yellow"
            color="secondary"
            track-fill-color="yellow"
            track-color="secondary"

            @change="filterChange()"
        >
        <template v-slot:thumb-label="props">
          <v-icon dark :size="props.value*6.5">
            {{ 'mdi-star' }}
          </v-icon>
        </template>
        </v-range-slider>
      </v-col>
    </v-row>
    <v-row class="px-5">
      <v-col class="mt-0">
        <h3>Dificultad</h3>
        <v-range-slider
            v-model="difficulty"
            :tick-labels="['0','1','2','3','4','5']"
            :value="[0,5]"
            min="0"
            max="5"
            tick-size="0"
            ticks="always"
            thumb-color="red"
            color="secondary"
            track-fill-color="red"
            track-color="secondary"
            @change="filterChange()"
        >
          <template v-slot:thumb-label="props">
            <v-icon dark :size="props.value*6">
              {{ 'mdi-weight' }}
            </v-icon>
          </template>
        </v-range-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    muscles: [],
    types: [],
    classification: [0,5],
    difficulty: [0,5]
  }),
  methods: {
    filterChange: function() {
      this.$emit('filter-event', this.muscles, this.types, this.classification, this.difficulty)
    }
  }
}
</script>

<style scoped>

</style>