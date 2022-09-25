<template>
  <v-card :elevation="4" class="my-md-6">
    <v-card-title>Búsqueda</v-card-title>
    <v-card-text class="d-flex align-center" >
      <v-text-field v-model="routine" @change="searchChange()" solo hide-details label='Buscar por rutina' class="pr-3"></v-text-field>
      <v-text-field v-model="creator" @change="searchChange()" solo hide-details label='Buscar por creador' class="px-3"></v-text-field>
    </v-card-text>
    <v-card-text>
      <span><strong>Ordenar por</strong></span>
      <v-select
        v-model="selected"
        :items="orderBy"
        attach
        chips
        multiple
        item-color="secondary"
        @change="searchChange()"
    ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    orderBy: ['fecha', 'puntuación', 'dificultad', 'categoría', 'nombre', 'creador'],
    routine: '',
    creator: '',
    selected: []
  }),
  methods: {
    searchChange: function() {
      this.$emit('search-event', this.routine, this.creator, this.selected)
    }
  }
}
</script>

<style scoped>

</style>