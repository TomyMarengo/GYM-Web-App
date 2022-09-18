<template>
  <div>
    <v-app-bar color="secondary">
      <v-app-bar-nav-icon>
        <v-icon color="primary">mdi-dumbbell</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="primary--text">ENTRENAGRATIS.ES</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="primary--text" to="/" text>Home</v-btn>
        <v-btn class="primary--text" to="/entrenamientos" text>Entrenamientos</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!isLoggedIn">
        <v-btn @click="$store.commit('login')" class="primary--text" to="/login" text>Iniciar Sesión</v-btn>
        <div class="d-flex align-center ml-1">
          <v-btn class="primary secondary--text" text rounded>Registrarse</v-btn>
        </div>
      </v-toolbar-items>
      <v-toolbar-title v-else>
        <div class="d-flex align-center ml-1">
          <v-btn @click="$store.commit('logout')" class="primary secondary--text" to="/" text rounded>Cerrar Sesión</v-btn>
        </div>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  data: function () {
    return {
      green: '#D6FF00',
      darkgray: '#343333',
      lightgray: '#E4E5E7'
    }
  },
  computed: {
    isLoggedIn (){
      return this.$store.getters.getLogged
    }
  }
}
</script>

<style scoped>

</style>