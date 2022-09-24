<template>
  <div>
    <v-row class="mb-5" >
      <v-col
          sm="6"
          md="4"
          v-for="rutine in $store.state.rutines"
          :key="rutine.name"
      >
        <RoutineCard :rutine="rutine"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RoutineCard from "@/components/cards/RoutineCard";
export default {
  name: "WorkoutsDisplay",
  components: {RoutineCard}
}
</script>

<style scoped>

</style>