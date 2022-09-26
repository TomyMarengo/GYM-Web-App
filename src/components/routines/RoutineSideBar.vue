<template>
  <v-card :elevation="4" class="my-6 pb-4">
    <v-toolbar dark color="secondary">
      <v-btn @click="goBack" icon>
        <v-icon >mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="font-weight-bold text-uppercase">{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-card-actions v-if="this.$store.getters.getLogged" class="d-flex flex-column">
      <v-btn large rounded class="mt-4" width="250px">
        <v-icon left>
          mdi-share-variant
        </v-icon>
        Compartí esta rutina
      </v-btn>
      <v-btn large rounded class="mt-4" color="#FFA8A8" width="250px">
        <v-icon left>
          mdi-heart
        </v-icon>
        agregala a favoritos
      </v-btn>
      <div class="mt-5 mb-2">
        <span class="text-caption text-uppercase font-weight-bold">Clasifica esta rutina: </span>
        <span class="font-weight-bold">{{ rating }}</span>
      </div>
      <v-rating class="d-flex flex-wrap"
          color="yellow"
          background-color="yellow"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half-full"
          half-increments
          hover
          length="5"
          size="35"
          :value="rating"
      ></v-rating>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RoutineSideBar",
  props: ['title', 'rating'],
  methods: {
    goBack(){
      if (this.$store.getters.getFromPath.includes('/registrarse') || this.$store.getters.getFromPath.includes('/ingresar'))
        this.$router.push({path: '/'})
      else
        this.$router.push({path: this.$store.getters.getFromPath})
    }
  }
}
</script>

<style scoped>

</style>