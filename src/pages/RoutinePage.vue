<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="3" class="pb-0">
        <routine-side-bar :title="routine.name" :rating="routine.classification"></routine-side-bar>
      </v-col>
      <v-col md="8">
        <routine-card-horizontal class="mt-6" :routine="routine"></routine-card-horizontal>
        <cycle-card :belongs="belongs" v-for="(cycle,index) in routine.cycles" :key="index" :cycle="cycle"></cycle-card>
        <v-card
            v-if="!creatingCycle"
            class="d-flex justify-center align-center"
            color="primary"
            height="100px"
            @click="creatingCycle = true"
        >
          <v-icon
              color="secondary"
              size="60"
              v-text="'mdi-plus'"
          ></v-icon>
        </v-card>

        <v-expand-transition>
          <div v-click-outside="onClickOutside" v-if="creatingCycle">
            <v-divider></v-divider>
            <v-sheet class="mx-auto" height="400px" outlined> //TODO
              Nombre del ciclo nuevo
            </v-sheet>
          </div>
        </v-expand-transition>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import routines from "@/routines";
import users from "@/users";
import RoutineSideBar from "@/components/routines/RoutineSideBar";
import RoutineCardHorizontal from "@/components/routines/RoutineCardHorizontal"
import CycleCard from "@/components/routines/CycleCard";

export default {
  name: "RoutinePage",
  components: {RoutineCardHorizontal, RoutineSideBar, CycleCard},
  data: () => ({
    routine: Object,
    user: null,
    belongs: false,
    creatingCycle: false,
  }),
  methods: {
    onClickOutside () {
      this.creatingCycle = false
    },
  },
  beforeMount() {
    this.routine = routines.filter(r => r.id == this.$route.params.id)[0]
    if (this.$store.getters.getLogged) {
      this.user = users.filter(user => user.email === this.$store.getters.getUser)[0]
      if (this.user.routines.some(r => r.id == this.routine.id))
        this.belongs = true
    }
  }
}

</script>

<style scoped>

</style>