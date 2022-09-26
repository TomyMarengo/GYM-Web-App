<template>
  <div>
    <v-card :elevation="4" class="my-6 pb-5">
      <v-toolbar dark color="secondary">
        <v-toolbar-title class="font-weight-bold text-uppercase">Mi Perfil</v-toolbar-title>
      </v-toolbar>

      <v-img :contain="true" :src="profilePicToDisplay">
        <button v-if="isEditingProfile" v-ripple @click.prevent="uploadProfilePictureClicked" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,0.5);">
          <v-icon size="164" style="position: absolute; left: 12.5%; right: 12.5%; top: 12.5%; bottom: 12.5%;">mdi-arrow-up-bold-box</v-icon>
        </button>
      </v-img>

      <template v-if="!isEditingProfile">
        <v-card-title>
          {{userData.fullName}}
        </v-card-title>
        <v-card-text>
          <p><strong>Sexo: </strong>{{userData.sex}}</p>
          <p><strong>Cumpleaños: </strong>{{userData.birthday}}</p>
        </v-card-text>
        <v-card-actions class="d-flex flex-column">
          <v-btn class="pa-4" rounded large color="primary black--text" @click.prevent="editProfileClicked">
            <v-icon left>mdi-pencil</v-icon>
            Editar Perfil
          </v-btn>
          <v-btn class="mt-4" rounded large color="tertiary white--text" outlined :disabled="isLoggingOut" @click.prevent="logoutClicked">
            Cerrar Sesión
          </v-btn>
        </v-card-actions>
      </template>

      <template v-else>
        <v-card-text>
          <v-text-field class="mb-4 mt-4" color="tertiary" label="Nombre" counter="50" outlined dense v-model="editingUserData.fullName"/>
          <v-select item-color="tertiary" color="tertiary" v-model="editingUserData.sex" :items="sexes" label="Sex" required outlined />
          <text-date-picker color="tertiary" :initial-date="editingUserData.birthday" @changed="birthdayChanged"/>
        </v-card-text>
        <v-card-actions v-if="!isSavingProfile">
          <v-spacer></v-spacer>
          <v-btn class="pa-4" rounded large color="primary black--text" :disabled="isSavingProfile" :loading="isSavingProfile" @click.prevent="editProfileSaveClicked">
            Guardar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="pa-4" rounded large color="error black--text" :disabled="isSavingProfile" @click.prevent="editProfileCancelClicked">
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-actions v-else class="flex justify-center align-center">
          <v-progress-circular color="tertiary" indeterminate :size="50"/>
          <p class="mt-3 ml-4">Guardando...</p>
        </v-card-actions>
      </template>
    </v-card>

    <v-snackbar v-model="showSnackbar" :multi-line="true" :bottom="true"
                :timeout="snackbarTimeout" color="tertiary">
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>

<script>
import TextDatePicker from "@/components/profile/TextDatePicker";

export default {
  name: "profileData",

  components: { TextDatePicker},

  data: () => ({
    isEditingProfile: false,
    isSavingProfile: false,
    isLoggingOut: false,
    sexes: ['Male', 'Female', 'Unspecified' ],
    editingUserData: undefined,
    snackbarMessage: '',
    showSnackbar: false,
    snackbarTimeout: 5000,
  }),
  props: ['userData'],

  computed: {
    profilePicToDisplay: function () {
      return (this.userData.picture && this.userData.picture.length > 0)  ?
          this.userData.picture
          : require('../../../public/images/perfil.jpeg');
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
      this.$props.userData = this.editingUserData;
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

</style>