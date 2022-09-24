<template>
  <v-content class="bg">
    <v-container fill-height pa-0>
      <v-layout align-center justify-center>
        <v-flex xs10 sm7 md6 class="max">
          <v-card elevation="10" shaped>
            <v-toolbar dark color="secondary">
              <v-btn @click="goBack" icon>
                <v-icon >mdi-arrow-left</v-icon>
              </v-btn>
              <v-toolbar-title class="font-weight-bold text-uppercase">Registrarse</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-10 mt-4">
              <v-form ref="registerForm">
                <v-text-field style="max-width: 600px; margin: auto" solo v-model="email" label='Correo electrónico *' :rules="emailRules" required></v-text-field>
                <v-text-field style="max-width: 600px; margin: auto" solo v-model="fullName" label='Nombre y apellido *' :rules="usernameRules" required></v-text-field>
                <v-text-field style="max-width: 600px; margin: auto" solo v-model="password" label='Contraseña *' :rules="passwordRules" type="password" required></v-text-field>
                <v-text-field style="max-width: 600px; margin: auto" solo v-model="confirmPassword" label='Repetir contraseña *' :rules="[ passwordConfirmationRule ]" type="password" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn x-large @click="validateForm" rounded color="primary" class="secondary--text px-7 py-2">Siguiente</v-btn>
            </v-card-actions>
            <v-card-text class="d-flex justify-center text-center">
              <div class="sign-in-text my-3">¿Ya tienes una cuenta? Ingresa <router-link to="/ingresar"><span style="color:cadetblue;text-decoration: underline;">aquí</span></router-link></div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
    export default {
            name: "RegisterForm",

            data: () => ({
                email: '',
                fullName: '',
                password: '',
                confirmPassword: '',

                emailRules: [ // Basic validations were made. TO DO: if necessary, improve them.
                    value => !!value || 'El campo no puede estar vacío.',
                    value => value.indexOf('@') !== 0 || 'El correo electrónico debe contener un nombre de usuario.',
                    value => value.includes('@') || 'El correo electrónico debe contener un @.',
                    value => (value.match(/@/g) || []).length == 1 || 'El correo electrónico debe contener un único @',
                    value => value.lastIndexOf('.') - value.indexOf('@') > 1 || 'El correo electrónico debe contener un dominio válido.',
                    value =>  value.lastIndexOf('.') <= value.length - 3 || 'El correo electrónico debe contener una extensión de dominio válida.'
                ],

                usernameRules: [ // Basic validations were made. TO DO: if necessary, improve them.
                    value => !!value || 'El campo Nombre y Apellido no puede estar vacío.',
                    value => value.includes(' ') || 'El campo debe contener su apellido.',
                    value => value.length > 7 || 'Ingrese un nombre y apellido válido.',
                    value => value.length - value.lastIndexOf(' ') > 1 || 'El campo debe contener su apellido',
                    value => !(/\d/g.test(value)) || 'El campo no puede contener números.'
                ],

                passwordRules: [  // Basic validations were made. TO DO: if necessary, improve them.
                    value => !!value || 'El campo no puede estar vacío.',
                    value => value.length > 8 || 'Su contraseña debe ser de al menos 8 símbolos'
                ],

            }),

            computed: {
                passwordConfirmationRule() { // Basic validations were made. TO DO: if necessary, improve them.
                    return () => (this.password === this.confirmPassword) || 'La contraseña no coincide.'
                },
            },

            methods: {
                validateForm(){
                    this.$refs.registerForm.validate()
                },
                goBack(){
                  this.$router.push({path: this.$store.getters.getFromPath})
                }
            }
        }
</script>

<style scoped>
    .sign-in-text {
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 1.25px;
    }

    .bg {
      background-image: url('../../../public/images/login-register-image.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
    }
</style>