<template>
  <div style="height: 100%">
    <v-sheet class="left-sheet">
      <v-img :contain="true" class="profile-picture" src="../../public/images/image-placeholder.jpg"/>
      <v-container>
        <h2 class="mb-8 mt-4">{{ fullName }}</h2>
        <v-select color="tertiary" v-model="sex" :items="sexes" label="Sex" required outlined />
        <birthday-picker color="tertiary" :initial-date="birthday" @changed="birthdayChanged"/>
      </v-container>
      <v-btn rounded color="tertiary white--text">Cerrar Sesión</v-btn>
    </v-sheet>
  </div>
</template>

<script>
import BirthdayPicker from "@/components/profile/BirthdayPicker";

export default {
  name: "ProfilePage",
  components: {BirthdayPicker},
  data: () => ({
    fullName: 'Pedro McPedro',
    sex: 'Male',
    sexes: ['Male', 'Female', 'Unspecified', 'Tornado'],
    birthday: '2000-4-20'
  }),
  methods: {
    birthdayChanged: function (newValue) {
      this.birthday = newValue;
    }
  }
}
</script>

<style scoped>
.left-sheet {
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  isolation: isolate;

  width: 340px;
  height: 100%;

  background: #FFFFFF;
  border-right: 1px solid #C6C3C3;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
}

.profile-picture {
  border-radius: 50px;

  /* Inside auto layout */
  flex: none;
}
</style>