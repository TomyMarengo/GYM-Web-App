<template>
  <v-container v-if="user" class="ma-0 mr-0" style="max-width: 100%">
    <v-row>
      <v-col offset-lg="1" offset-md="2" lg="3" sm="12" md="8" class="pb-0">
        <profile-data v-bind:user-data="{fullName: user.fullName, sex: user.sex, birthday: user.birthday, picture: user.picture}"></profile-data>
      </v-col>
      <v-col lg="8">
        <profile-routines-and-exercises v-bind:user-data="{routines: user.routines, favorites: user.favorites, exercises: user.exercises}"></profile-routines-and-exercises>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ProfileData from "@/components/profile/ProfileData";
import ProfileRoutinesAndExercises from "@/components/profile/ProfileRoutinesAndExercises";
import users from "@/users"

export default {
  name: "ProfilePage",
  data: () => ({
    user: null
  }),
  components: {ProfileRoutinesAndExercises, ProfileData},

  beforeMount() {
    if (this.$store.getters.getLogged) {
      this.user = users.filter(user => user.email === this.$store.getters.getUser)[0]
    }
  }
}
</script>

<style scoped>
</style>