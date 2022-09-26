<template>
  <div>
    <v-row class="mb-5" >
      <v-col
          sm="6"
          lg="4"
          v-for="routine in this.routines"
          :key="routine.name + routine.creator"
      >
        <RoutineCard :routine="routine"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RoutineCard from "@/components/routines/RoutineCard";
export default {
  name: "WorkoutsDisplay",
  components: {RoutineCard},
  props: {
    routines: Array
  }
}
</script>

<style scoped>

</style>