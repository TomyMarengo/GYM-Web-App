<template>
  <v-footer padless dark color="secondary" class="px-5">
    <v-card class="flex" color="secondary" >
      <v-card-title>
        <strong class="subtitle-1"> {{ new Date().getFullYear() }} — Todos los derechos reservados</strong>
        <v-spacer></v-spacer>
        <v-list-item-icon class="ma-0 px-3 align-self-center"><v-btn fab small dark><v-icon dark size="30px" color="primary">mdi-instagram</v-icon></v-btn></v-list-item-icon>
        <v-list-item-icon class="ma-0 px-3 align-self-center" ><v-btn fab small dark><v-icon dark size="30px" color="primary">mdi-facebook</v-icon></v-btn></v-list-item-icon>
        <v-list-item-icon class="ma-0 px-3 align-self-center"><v-btn fab small dark><v-icon dark size="30px" color="primary">mdi-twitter</v-icon></v-btn></v-list-item-icon>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar"
}
</script>

<style scoped>

</style>