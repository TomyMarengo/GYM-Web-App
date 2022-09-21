<template>
    <div class="bg"> 
        <register-form></register-form>
    </div>
</template>

<script>
    import RegisterForm from '../components/register/RegisterForm';

    export default {
        name: "RegisterPage",
        components: {
            RegisterForm
        }
    }
</script>

<style scoped>

    .bg {
        background-image: url('../../public/images/login-register-image.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
    }

</style>