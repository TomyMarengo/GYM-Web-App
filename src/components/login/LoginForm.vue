<template>
    <v-container fill-height>
        <v-row justify="center" align="center">
            <v-col>
                <v-form ref="loginForm">
                <div class="login-text">INICIAR SESIÓN</div>
                <v-text-field solo v-model="email" label='Correo electrónico *' :rules="emailRules" required></v-text-field>
                <v-text-field solo v-model="password" label='Contraseña *' :rules="passwordRules" type="password" required></v-text-field>
                <v-btn x-large class="access-btn" @click="validateForm" text rounded> Acceder </v-btn>
                <router-link to="/forgot-password"><div class="forgot-password"> ¿Olvidaste tu contraseña? </div></router-link>  
                <div class="register">¿Todavía no tienes cuenta? Regístrate <router-link to="registrarse"><span style="color:cadetblue;text-decoration: underline;">aquí</span></router-link></div> 
            </v-form>
            </v-col>
        </v-row>
    </v-container>
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
                    this.$refs.loginForm.validate()
                },
            }
        }
</script>

<style scoped>

    .container {
        text-align: center;
        width: 50vw;
        height: 752px;
        padding: 40px 120px;
    }

    .col {
        background-color: #EDEDED; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        padding: 40px 120px;
    }

    .login-text {
        font-family: 'Bakbak One';
        font-style: normal;
        font-size: 48px;
        letter-spacing: 1.25px;
        color: #000000;
        margin-bottom: 1em;
        text-transform: uppercase;
    }

    .access-btn {
        padding: 0px 16px;
        margin-top: 0.5em;
        background: #D6FF00;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        font-family: 'Bakbak One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 45px;
        align-items: center;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: #343333;
    }

    .register {
        margin-top: 1em;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 36px;
        letter-spacing: 1.25px;
        color: #000000;
    }

    .forgot-password {
        margin-top: 1em;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 1.25px;
        text-decoration-line: underline;
        color: #000000;
        text-decoration-color: #888;
    }

</style>