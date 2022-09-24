<template>
  <v-container>
    <v-row>
      <v-col lg="3" sm="12" md="4" >
        <side-bar></side-bar>
      </v-col>
      <v-col md="8">
        <workouts-display></workouts-display>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SideBar from "@/components/workouts/SideBar";
  import WorkoutsDisplay from "@/components/workouts/WorkoutsDisplay";

  export default {
    name: "WorkoutsPage",
    components: {
      SideBar,
      WorkoutsDisplay
    }
  }
</script>

<style scoped>

</style>