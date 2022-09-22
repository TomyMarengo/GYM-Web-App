<template>
    <div class="bg"> 
        <login-form></login-form>
    </div>
</template>

<script>
    import LoginForm from '../components/login/LoginForm';

    export default {
        name: "LoginPage",
        components: {
            LoginForm
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