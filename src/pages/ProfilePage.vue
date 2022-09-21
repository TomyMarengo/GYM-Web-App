<template>
  <div style="height: 100%">
    <v-sheet class="left-sheet">
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

        <v-btn class="ma-1" rounded color="primary black--text" :disabled="isSavingProfile" @click.prevent="editProfileSaveClicked">Guardar</v-btn>
        <v-btn class="ma-1" rounded color="error black--text" :disabled="isSavingProfile" @click.prevent="editProfileCancelClicked">Cancelar</v-btn>
      </template>

      <v-spacer/>
      <v-btn class="ma-4" rounded color="tertiary white--text" outlined :disabled="isLoggingOut" @click.prevent="logoutClicked">Cerrar Sesión</v-btn>
    </v-sheet>

    <v-snackbar v-model="showSnackbar" :multi-line="true" :bottom="true" :absolute="true"
                :timeout="snackbarTimeout" color="tertiary">
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>

<script>
import TextDatePicker from "@/components/profile/TextDatePicker";

export default {
  name: "ProfilePage",
  components: {TextDatePicker},

  data: () => ({
    isEditingProfile: false,
    isSavingProfile: false,
    isLoggingOut: false,
    sexes: ['Male', 'Female', 'Unspecified', 'Tornado'],
    userData: {
      fullName: 'Pedro McPedro',
      sex: 'Male',
      birthday: '2000-4-20',
      picture: null,
    },
    editingUserData: {
      fullName: 'u',
      sex: 'u',
      birthday: 'u',
      picture: null,
    },
    snackbarMessage: '',
    showSnackbar: false,
    snackbarTimeout: 5000,
  }),

  computed: {
    profilePicToDisplay: function () {
      return (this.userData.picture && this.userData.picture.length > 0)  ?
          require(this.userData.picture)
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