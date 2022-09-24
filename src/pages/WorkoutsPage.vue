<template>
  <v-container>
    <v-row>
      <v-col lg="3" sm="12" md="4" class="pb-0">
        <side-bar v-on:filter-event="filterHandle"></side-bar>
      </v-col>
      <v-col md="8">
        <v-row>
          <v-col class="d-flex flex-column">
            <search-bar v-on:search-event="searchHandle"></search-bar>
            <v-btn x-large color="primary" class="secondary--text px-6 mb-5" :class="{'mt-4': $vuetify.breakpoint.smAndDown}">Buscar</v-btn>
          </v-col>
        </v-row>
        <workouts-display :routines="routines"></workouts-display>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import SideBar from "@/components/workouts/SideBar";
  import WorkoutsDisplay from "@/components/workouts/WorkoutsDisplay";
  import SearchBar from "@/components/workouts/SearchBar";
  import store from "@/store";

  export default {
    name: "WorkoutsPage",
    components: {
      SideBar,
      WorkoutsDisplay,
      SearchBar
    },
    data: () => ({
      message: '',
      routines: store.state.routines
    }),
    computed: {

    },
    methods: {
      searchHandle: function (routine, creator, selected) {
        this.routines = store.state.routines
        if (creator != null && creator.length != 0)
          this.routines = this.routines.filter(r => r.creator == creator)
        if (routine != null && routine.length != 0)
          this.routines = this.routines.filter(r => r.name == routine)

        if (selected != null && selected.length != 0)
          console.log(selected) //TODO: ordenar por selected's
      },
      filterHandle: function () {

      }
    }
  }
</script>

<style scoped>

</style>