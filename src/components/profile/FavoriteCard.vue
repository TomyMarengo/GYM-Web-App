<template>
  <small-card :id="id" icon="mdi-heart" icon-color="#FFA8A8" @icon-click="iconClicked">
    <v-card-title>{{routine.name}}</v-card-title>
  </small-card>
</template>

<script>
import SmallCard from "@/components/profile/SmallCard";
export default {
  name: "FavoriteCard",

  components: {SmallCard},

  props: {
    routine: {type: Object},
    id: {}
  },

  methods: {
    iconClicked: function (id) {
      this.$emit('icon-click', id);
    }
  }
}
</script>

<style scoped>

</style>