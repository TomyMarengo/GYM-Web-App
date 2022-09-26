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
        :items="items"
        item-text="text"
        item-value="value"
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
    items: [
      {text: 'fecha', value: 'date'},
      {text: 'puntuación', value: 'classification'},
      {text: 'dificultad', value: 'difficulty'},
      {text: 'nombre', value: 'name'},
      {text: 'creador', value: 'creator'}
    ],
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