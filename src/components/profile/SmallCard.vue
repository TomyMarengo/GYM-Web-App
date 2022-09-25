<template>
  <v-card outlined class="fill-height" height="350" width="350px">
    <v-img :src="image" height="200px" />
    <div class="d-flex align-center">
      <slot/>
      <v-spacer></v-spacer>
      <v-btn class="mr-3" v-if="icon" @click.prevent="iconClicked" icon>
        <v-icon large :color="iconColor">{{icon}}</v-icon>
      </v-btn>
    </div>
    <slot name="extra"></slot>
  </v-card>
</template>

<script>
export default {
  name: "SmallCard",

  props: {
    image: { default: require('../../../public/images/abdominales.jpg') },
    icon: { type: String },
    iconColor: { type: String },
    id: {},
  },

  methods: {
    iconClicked: function () {
      this.$emit('icon-click', this.id);
    }
  }
}
</script>

<style scoped>
</style>