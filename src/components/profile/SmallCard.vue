<template>
  <v-card class="card py-8 px-4" width="320px" height="220px" color="#EDEDED">
    <div class="main-div">
      <img :src="image" style="border-radius: 20px; height: 100%; aspect-ratio: 1" alt="profile picture"/>
      <div class="content-div">
        <slot/>
      </div>
    </div>
    <v-btn v-if="icon" @click.prevent="iconClicked" icon style="position: absolute; right: 16px; top: 16px;">
      <v-icon large :color="iconColor">{{icon}}</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "SmallCard",

  props: {
    image: { default: require('../../../public/images/image-placeholder.jpg') },
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
.card {
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  border-radius: 20px;
}

.main-div {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100%;
}

.content-div {
  display: flex;
  flex-direction: column;
}
</style>