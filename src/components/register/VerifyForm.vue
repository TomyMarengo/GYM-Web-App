<template>
    <v-content class="bg">
      <v-container fill-height pa-0>
        <v-layout align-center justify-center>
          <v-flex xs10 sm7 md6>
            <v-card elevation="10" shaped>
              <v-toolbar dark color="secondary">
                <v-btn @click="goBack" icon>
                  <v-icon >mdi-arrow-left</v-icon>
                </v-btn>
                <v-toolbar-title class="font-weight-bold text-uppercase">¡USUARIO REGISTRADO!</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="d-flex justify-center text-center">
                <div class="text my-3">Antes de poder acceder, te pedimos que verifiques tu dirección de email. Ingrese el código que ha sido enviado a su casilla de correo electrónico para poder continuar.</div>
              </v-card-text>
              <v-card-text class="px-10 mt-4">
                <v-form ref="verifyForm">
                  <v-text-field style="max-width: 600px; margin: auto" solo v-model="secutiryCode" :rules="codeRules" label='Código *' required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn x-large @click="validateForm" rounded color="primary" class="secondary--text px-7 py-2">Verificar</v-btn>
              </v-card-actions>
              <v-card-text class="d-flex justify-center text-center">
              <div class="text my-3">¿No te llegó un código? <span @click="togglePopup()" style="color:cadetblue; text-decoration: underline; cursor: pointer;">Reenviar</span></div>
              <popup-component class="d-flex justify-center text-center" @close-event="togglePopup()" v-if="buttonTrigger">
                <h2>Código reenviado con éxito</h2>
              </popup-component>
            </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </template>
  
  <script>
    
    import PopupComponent from './PopupComponent';
    
    export default {
        name: "VerifyForm",
        
        components: {
              PopupComponent
        },

        data: () => ({
            secutiryCode: '',
            codeRules: [ // Basic validations were made. TO DO: if necessary, improve them.
                value => !!value || 'El campo no puede estar vacío.',
            ],
            buttonTrigger: false,
        }),

        methods: {
            validateForm(){
                this.$refs.verifyForm.validate()
            },

            togglePopup(){
              console.log(this.buttonTrigger);
              this.buttonTrigger=!this.buttonTrigger;
            }
        }

    }
  </script>
  
  <style scoped>
      .text {
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