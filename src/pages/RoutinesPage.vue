<template>
  <v-container>
    <v-row>
      <v-col lg="3" sm="12" md="4" class="pb-0">
        <filter-bar v-on:filter-event="filterHandle"></filter-bar>
      </v-col>
      <v-col md="8">
        <v-row>
          <v-col class="d-flex flex-column">
            <search-bar v-on:search-event="searchHandle"></search-bar>
            <v-btn @click.prevent="search" x-large color="primary" class="secondary--text px-6 mb-5" :class="{'mt-4': $vuetify.breakpoint.smAndDown}">Buscar</v-btn>
          </v-col>
        </v-row>
        <workouts-display :routines="routines"></workouts-display>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import FilterBar from "@/components/routines/FilterBar";
  import WorkoutsDisplay from "@/components/routines/WorkoutsDisplay";
  import SearchBar from "@/components/routines/SearchBar";
  import store from "@/store";

  export default {
    name: "WorkoutsPage",
    components: {
      FilterBar,
      WorkoutsDisplay,
      SearchBar
    },
    data: () => ({
      routines: null,
      searchByName: '',
      searchByCreator: '',
      orderBySelected: [],
      filterByMuscles: [],
      filterByTypes: [],
      filterByClassification: [0, 5],
      filterByDifficulty: [0, 5]
    }),
    methods: {
      searchHandle: function (routine, creator, selected) {
        this.searchByName = routine
        this.searchByCreator = creator
        this.orderBySelected = selected
      },
      filterHandle: function (muscles, types, classification, difficulty) {
        this.filterByMuscles = muscles
        this.filterByTypes = types
        this.filterByClassification = classification
        this.filterByDifficulty = difficulty
      },
      search: function () {
        this.routines = store.state.routines

        //by creator or by name
        if (this.searchByCreator != null && this.searchByCreator.length != 0)
          this.routines = this.routines.filter(r => r.creator.toLowerCase() == this.searchByCreator.toLowerCase())
        if (this.searchByName != null && this.searchByName.length != 0)
          this.routines = this.routines.filter(r => r.name.toLowerCase() == this.searchByName.toLowerCase())

        //filters
        if (this.filterByDifficulty != null && this.filterByDifficulty.length != 0)
          this.routines = this.routines.filter(r => r.difficulty >= this.filterByDifficulty[0] && r.difficulty <= this.filterByDifficulty[1])
        if (this.filterByClassification != null && this.filterByClassification.length != 0)
          this.routines = this.routines.filter(r => r.classification >= this.filterByClassification[0] && r.classification <= this.filterByClassification[1])

        if (this.filterByMuscles != null && this.filterByMuscles.length != 0)
          this.routines = this.routines.filter(r => r.muscles.some(muscle => this.filterByMuscles.includes(muscle)))
        if (this.filterByTypes != null && this.filterByTypes.length != 0)
          this.routines = this.routines.filter(r => r.exerciseTypes.some(exerciseType => this.filterByTypes.includes(exerciseType)))

        function sortBy(selected) {
          return function (a, b) {
            for (let prop of selected) {
              if (typeof(a[prop]) === "string") {
                if (a[prop] !== b[prop]) {
                  return a[prop].localeCompare(b[prop])
                }
              }
              else {
                if (a[prop] !== b[prop]) {
                  return a[prop] - b[prop]
                }
              }
            }
          }
        }

        this.routines.sort(sortBy(this.orderBySelected))
      }
    },
    mounted() {
      this.routines = store.state.routines
    },
  }
</script>

<style scoped>

</style>