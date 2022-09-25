<template>
  <v-container class="ma-0 mr-0" style="max-width: 100%">
    <v-row>
      <v-col offset-lg="1" offset-md="2" lg="3" sm="12" md="8" class="pb-0">
        <profile-data></profile-data>
      </v-col>
      <v-col lg="8">
        <profile-routines-and-exercises></profile-routines-and-exercises>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ProfileData from "@/components/profile/profileData";
import ProfileRoutinesAndExercises from "@/components/profile/profileRoutinesAndExercises";

export default {
  name: "ProfilePage",

  components: {ProfileRoutinesAndExercises, ProfileData},
}
</script>

<style scoped>
</style>