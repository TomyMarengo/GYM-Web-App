<template>
  <v-content class="bg">
    <v-container fill-height pa-0>
      <v-layout align-center justify-center>
        <v-flex xs10 sm7 md5>
          <v-card elevation="10" shaped>
            <v-toolbar dark color="secondary">
              <v-btn @click="goBack" icon>
                <v-icon >mdi-arrow-left</v-icon>
              </v-btn>
              <v-toolbar-title class="font-weight-bold text-uppercase">Iniciar Sesión</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-10 mt-4">
              <v-form ref="loginForm">
                <v-text-field style="max-width: 600px; margin: auto" solo v-model="email" label='Correo electrónico *' :rules="emailRules" required></v-text-field>
                <v-text-field style="max-width: 600px; margin: auto" solo v-model="password" label='Contraseña *' :rules="passwordRules" type="password" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn x-large @click="validateForm" rounded color="primary" class="secondary--text px-7 py-2">Acceder</v-btn>
            </v-card-actions>

            <v-card-text class="d-flex flex-column justify-center text-center">
              <router-link to="/forgot-password"><span class="register-text secondary--text link"> ¿Olvidaste tu contraseña? </span></router-link>
              <span class="register-text my-3">¿Todavía no tienes cuenta? Regístrate <router-link to="registrarse"><span class="link">aquí</span></router-link></span>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
    export default {
            name: "LoginForm",

            data: () => ({
                email: '',
                password: '',

                emailRules: [ // Basic validations were made. TO DO: if necessary, improve them.
                    value => !!value || 'El campo no puede estar vacío.',
                    value => value.indexOf('@') !== 0 || 'El correo electrónico debe contener un nombre de usuario.',
                    value => value.includes('@') || 'El correo electrónico debe contener un @.',
                    value => (value.match(/@/g) || []).length == 1 || 'El correo electrónico debe contener un único @',
                    value => value.lastIndexOf('.') - value.indexOf('@') > 1 || 'El correo electrónico debe contener un dominio válido.',
                    value =>  value.lastIndexOf('.') <= value.length - 3 || 'El correo electrónico debe contener una extensión de dominio válida.'
                ],

                passwordRules: [  // Basic validations were made. TO DO: if necessary, improve them.
                    value => !!value || 'El campo no puede estar vacío.',
                ],

            }),
            methods: {
                validateForm(){
                    if (this.$refs.loginForm.validate()) {
                      this.$store.commit('login')
                      this.goBack()
                    }
                },
                goBack(){
                  this.$router.push({path: this.$store.getters.getFromPath})
                }
            }
        }
</script>

<style scoped>
.register-text {
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 1.25px;
}

.link {
  color:cadetblue;
  text-decoration: underline;
}

.bg {
  background-image: url('../../../public/images/login-register-image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
</style>