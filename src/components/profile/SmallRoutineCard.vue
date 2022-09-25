<template>
  <small-card :id="id" icon="mdi-pencil" icon-color="black" @icon-click="iconClicked">
    <v-card-title>{{routine.name}}</v-card-title>
  </small-card>
</template>

<script>
import SmallCard from "@/components/profile/SmallCard";
export default {
  name: "SmallRoutineCard",

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