<template>
  <small-card :id="id" icon="mdi-pencil" icon-color="black" @icon-click="iconClicked">
    <v-card-title>{{exercise.name}}</v-card-title>
    <template v-slot:extra>
      <div class="mx-4" v-if="exercise.series">{{exercise.series}} series</div>
      <div class="mx-4" v-if="exercise.seconds">{{exercise.seconds}} segundos</div>
    </template>
  </small-card>
</template>

<script>
import SmallCard from "@/components/profile/SmallCard";
export default {
  name: "SmallExerciseCard",

  components: {SmallCard},

  props: {
    exercise: {type: Object},
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