<template>
    <div class="container">

        <navbar-component></navbar-component>
        <login-view></login-view>

    </div>
</template>

<script>

// Views used for login
import LoginView from "./../views/Login.vue"

// Components used for login
import NavbarComponent from "App/shared/Navbar.vue"

export default {
    components: {
        "login-view": LoginView,
        "navbar-component": NavbarComponent
    }
}
</script>
