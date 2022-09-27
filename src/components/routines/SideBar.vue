<template>
  <v-card :elevation="4" class="my-6 pb-4">
    <v-toolbar dark color="secondary">
      <v-btn @click="goBack" icon>
        <v-icon >mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="font-weight-bold text-uppercase">{{routine.name}}</v-toolbar-title>
    </v-toolbar>
    <v-card-actions v-if="this.$store.getters.getLogged" class="d-flex flex-column">
      <v-btn @click.prevent="copyLinkHandle" large rounded class="mt-4" width="250px">
        <v-icon left>
          mdi-share-variant
        </v-icon>
        Compartí esta rutina
      </v-btn>
      <v-btn @click="favoritesHandle" large rounded class="mt-4" color="#FFA8A8" width="250px">
        <v-icon left>
          mdi-heart
        </v-icon>
        {{isFavorite() ? "Quitar de favoritos" : "Agregala a favoritos"}}
      </v-btn>
      <div class="mt-5 mb-2">
        <span class="text-caption text-uppercase font-weight-bold">Clasifica esta rutina: </span>
        <span class="font-weight-bold">{{ routine.classification }}</span>
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
          :value="routine.classification"
      ></v-rating>

    </v-card-actions>

    <v-snackbar v-model="showSnackbar" :multi-line="true" :bottom="true"
                timeout=3000 color="tertiary">
      Enlace copiado en el portapapeles
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: "RoutineSideBar",
  props: ['routine'],
  data: () => ({
    showSnackbar: false
  }),
  methods: {
    goBack(){
      if (this.$store.getters.getFromPath.includes('/registrarse') || this.$store.getters.getFromPath.includes('/ingresar'))
        this.$router.push({path: '/'})
      else
        this.$router.push({path: this.$store.getters.getFromPath})
    },
    isFavorite(){
      return this.$store.state.users.filter(u => u.email === this.$store.state.user)[0].favorites.filter(f => f.id === this.$props.routine.id).length > 0
    },
    favoritesHandle(){
      const index = this.$store.state.users.filter(r => r.email === this.$store.state.user)[0].favorites.map(f => f.id).indexOf(this.$props.routine.id)
      if(index > -1)
        this.$store.state.users.filter(r => r.email === this.$store.state.user)[0].favorites.splice(index, 1)
      else
        this.$store.state.users.filter(r => r.email === this.$store.state.user)[0].favorites.push({id: this.$props.routine.id})
    },
    copyLinkHandle(){
      this.showSnackbar = true
      navigator.clipboard.writeText("localhost:8080/#" + this.$router.currentRoute.fullPath)
    }
  }
}
</script>

<style scoped>

</style>