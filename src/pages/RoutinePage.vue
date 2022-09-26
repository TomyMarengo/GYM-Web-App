<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="3" class="pb-0">
        <routine-side-bar :title="routine.name" :rating="routine.classification"></routine-side-bar>
      </v-col>
      <v-col md="8">
        <routine-card-horizontal class="mt-6" :routine="routine"></routine-card-horizontal>
        <cycle-card v-for="(cycle,index) in routine.cycles" :key="index" :cycle="cycle"></cycle-card>
      </v-col>
    </v-row>
    <v-row></v-row>
  </v-container>
</template>

<script>
import routines from "@/routines";
import RoutineSideBar from "@/components/routines/RoutineSideBar";
import RoutineCardHorizontal from "@/components/routines/RoutineCardHorizontal"
import CycleCard from "@/components/routines/CycleCard";

export default {
  name: "RoutinePage",
  components: {RoutineCardHorizontal, RoutineSideBar, CycleCard},
  data: () => ({
    routine: Object,
  }),
  beforeMount() {
    this.routine = routines.filter(r => r.id == this.$route.params.id)[0]
    console.log(this.routine)
  }
}

</script>

<style scoped>

</style>