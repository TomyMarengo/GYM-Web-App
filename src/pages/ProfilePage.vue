<template>
  <div class="main-div">
    <v-sheet class="left-sheet" height="100%" width="340px" tile>
      <v-img :contain="true" class="profile-picture" :src="profilePicToDisplay">
        <button v-if="isEditingProfile" v-ripple @click.prevent="uploadProfilePictureClicked" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,0.5);">
          <v-icon size="164" style="position: absolute; left: 12.5%; right: 12.5%; top: 12.5%; bottom: 12.5%;">mdi-arrow-up-bold-box</v-icon>
        </button>
      </v-img>

      <template v-if="!isEditingProfile">
        <v-container>
          <h2 class="mb-8 mt-4">{{ userData.fullName }}</h2>
          <p><strong>Sexo: </strong>{{userData.sex}}</p>
          <p><strong>Cumpleaños: </strong>{{userData.birthday}}</p>
        </v-container>

        <v-btn class="ma-4" rounded large color="primary black--text" @click.prevent="editProfileClicked">
          <v-icon class="mr-1">mdi-pencil</v-icon>
          Editar Perfil
        </v-btn>
      </template>

      <template v-else>
        <v-container>
          <v-text-field class="mb-4 mt-4" color="tertiary" label="Nombre" counter="50" outlined dense v-model="editingUserData.fullName"/>
          <v-select item-color="tertiary" color="tertiary" v-model="editingUserData.sex" :items="sexes" label="Sex" required outlined />
          <text-date-picker color="tertiary" :initial-date="editingUserData.birthday" @changed="birthdayChanged"/>
        </v-container>

        <template v-if="!isSavingProfile">
          <v-btn class="ma-1" rounded color="primary black--text" :disabled="isSavingProfile" :loading="isSavingProfile" @click.prevent="editProfileSaveClicked">Guardar</v-btn>
          <v-btn class="ma-1" rounded color="error black--text" :disabled="isSavingProfile" @click.prevent="editProfileCancelClicked">Cancelar</v-btn>
        </template>
        <template v-else>
          <v-progress-circular color="tertiary" indeterminate :size="50"/>
          <p class="mt-2">Guardando...</p>
        </template>
      </template>

      <v-spacer/>
      <v-btn v-if="!isEditingProfile" class="ma-4" rounded color="tertiary white--text" outlined :disabled="isLoggingOut" @click.prevent="logoutClicked">Cerrar Sesión</v-btn>
    </v-sheet>

    <small-favorite-card :routine="{ name: 'Rutina123' }" :id="1" @icon-click="onRoutineUnfavorited"/>
    <small-routine-card :routine="{ name: 'Rutina456' }" :id="1" @icon-click="onRoutineEditClicked"/>
    <small-exercise-card :exercise="{ name: 'Ejercicio1', series: 50, seconds: 20 }"/>
    <small-exercise-card :exercise="{ name: 'Ejercicio2', seconds: 20 }"/>

    <v-snackbar v-model="showSnackbar" :multi-line="true" :bottom="true" :absolute="true"
                :timeout="snackbarTimeout" color="tertiary">
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>

<script>
import TextDatePicker from "@/components/profile/TextDatePicker";
import SmallFavoriteCard from "@/components/profile/SmallFavoriteCard";
import SmallRoutineCard from "@/components/profile/SmallRoutineCard";
import SmallExerciseCard from "@/components/profile/SmallExerciseCard";

export default {
  name: "ProfilePage",
  components: {SmallExerciseCard, SmallRoutineCard, SmallFavoriteCard, TextDatePicker},

  data: () => ({
    isEditingProfile: false,
    isSavingProfile: false,
    isLoggingOut: false,
    sexes: ['Male', 'Female', 'Unspecified' ],
    userData: {
      fullName: 'Pedro McPedro',
      sex: 'Male',
      birthday: '2000-4-20',
      picture: null,
    },
    editingUserData: undefined,
    snackbarMessage: '',
    showSnackbar: false,
    snackbarTimeout: 5000,
  }),

  computed: {
    profilePicToDisplay: function () {
      return (this.userData.picture && this.userData.picture.length > 0)  ?
          this.userData.picture
          : require('../../public/images/image-placeholder.jpg');
    }
  },

  methods: {
    editProfileClicked: function() {
      this.editingUserData = Object.assign({}, this.userData);
      this.isEditingProfile = true;

    },

    editProfileSaveClicked: async function () {
      this.isSavingProfile = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.userData = this.editingUserData;
      this.snackbarMessage = 'Su perfil ha sido actualizado';
      this.showSnackbar = true;
      this.isSavingProfile = false;
      this.isEditingProfile = false;
    },

    editProfileCancelClicked: function () {
      this.isEditingProfile = false;
    },

    birthdayChanged: function (newValue) {
      this.editingUserData.birthday = newValue;
    },

    uploadProfilePictureClicked: function () {
      // TODO
    },

    logoutClicked: async function () {
      this.isLoggingOut = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.isLoggingOut = false;
    },

    onRoutineUnfavorited: function (id) {
      console.log('Routine unfavorited: ' + id);
    },

    onRoutineEditClicked: function (id) {
      console.log('Edit routine clicked: ' + id);
    },
  }
}
</script>

<style scoped>
.main-div {
  height: 100%;
  background-color: white;
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.left-sheet {
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  border-right: 1px solid #C6C3C3;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
}

.profile-picture {
  border-radius: 50px;

  /* Inside auto layout */
  flex: none;
}
</style>