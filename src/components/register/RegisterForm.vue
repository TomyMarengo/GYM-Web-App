<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col>
                <v-form ref="registerForm">
                <div class="register-text">REGISTRARSE</div>
                <v-text-field solo v-model="email" label='Correo electrónico *' :rules="emailRules" required></v-text-field>
                <v-text-field solo v-model="fullName" label='Nombre y apellido *' :rules="usernameRules" required></v-text-field>
                <v-text-field solo v-model="password" label='Contraseña *' :rules="passwordRules" type="password" required></v-text-field>
                <v-text-field solo v-model="confirmPassword" label='Repetir contraseña *' :rules="[ passwordConfirmationRule ]" type="password" required></v-text-field>
                <v-btn x-large class="next-btn" @click="validateForm" text rounded> Siguiente </v-btn>
                <div class="sign-in">¿Ya tienes una cuenta? Ingresa aquí</div>   <!-- To Do: ref to sign in -->
            </v-form>
            </v-col>
        </v-row>
    </v-container>
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

    .register-text {
        font-family: 'Bakbak One';
        font-style: normal;
        font-size: 48px;
        letter-spacing: 1.25px;
        color: #000000;
        margin-bottom: 1em;
        text-transform: uppercase;
    }

    .next-btn {
        
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

    .sign-in {
        margin-top: 0.25em;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 36px;
        letter-spacing: 1.25px;
        color: #000000;
    }


</style>