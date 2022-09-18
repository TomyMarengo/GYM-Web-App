<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from "@/components/FooterBar";

export default {
  name: 'App',
  components: {
    NavBar, FooterBar
  }
}
</script>