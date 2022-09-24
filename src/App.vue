<template>
  <v-app>
    <nav-bar v-if="!$route.path.includes('ingresar') && !$route.path.includes('registrarse')"></nav-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-bar v-if="!$route.path.includes('ingresar') && !$route.path.includes('registrarse')"></footer-bar>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from "@/components/FooterBar";

export default {
  name: 'App',
  components: {
    NavBar, FooterBar
  },
}
</script>