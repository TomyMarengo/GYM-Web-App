<template>
  <div>
    <v-menu
        ref="menu" :color="color"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="date" :color="color"
            label="Cumpleaños"
            readonly outlined
            v-bind="attrs"
            v-on="on"
            hide-details
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="date" :color="color"
          :active-picker.sync="activePicker"
          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    initialDate: { type: String },

    color: { type: String, default: 'primary' },
  },
  data: () => ({
    activePicker: null,
    date: null,
    menu: false
  }),

  mounted() {
    this.date = this.initialDate;
  },

  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },

  methods: {
    save (date) {
      this.$emit('changed', date);
    },
  },
}
</script>

<style scoped>

</style>