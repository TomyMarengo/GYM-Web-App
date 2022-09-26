<template>
  <v-card outlined class="mb-5">
    <v-card-text>{{ cycle.name }} ({{cycle.repetitions}} {{cycle.repetitions==1? 'repetición' : 'repeticiones'}})</v-card-text>
    <v-card-actions>
      <v-btn color="orange darken-4" text> Ejercicios </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-sheet class="mx-auto" outlined max-width="800">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item
                v-for="(exercise, index) in cycle.exercises"
                :key="index"
                v-slot="{ active, toggle }"
            >
              <v-card
                  :elevation="active ? 5 : 1"
                  class="ma-4"
                  height="250"
                  width="200"
                  @click="toggle"
              >
                <v-img src="../../../public/images/abdominales.jpg" height="100px" />
                <v-card-title>{{exercise.name}}</v-card-title>
                <v-card-subtitle>
                  {{exercise.series == 0 ? '' : exercise.series + " series"}}
                  {{exercise.series != 0 && exercise.seconds != 0 ? "-" : "" }}
                  {{exercise.seconds == 0 ? '' : exercise.seconds + " segundos"}}
                </v-card-subtitle>
              </v-card>
            </v-slide-item>
          </v-slide-group>

          <v-expand-transition>
                <v-carousel v-if="model != null && cycle.exercises[model].archives.length!=0">
                  <v-carousel-item
                      v-for="(archive, index) in cycle.exercises[model].archives"
                      :src="require('../../../public/images/' + archive)"
                      :key="index"
                  >
                  </v-carousel-item>
                </v-carousel>
          </v-expand-transition>
        </v-sheet>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "CycleCard",
  props: ['cycle'],
  data: () => ({
    show: false,
    model: null,
  }),
}
</script>

<style scoped>

</style>