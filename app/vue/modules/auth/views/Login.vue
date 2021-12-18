<template>
    <div class="container">
        <div class="columns is-mobile">
            <form-login-component class="column is-5 is-offset-7"/>
        </div>
    </div>
</template>

<script>

import FormLoginComponent from "App/modules/auth/components/FormLogin.vue"

export default {
    name: "login",
    components: {
        "form-login-component": FormLoginComponent
    },
    data(){
        return {
            email: "mbonifasi-2019139@kinal.edu.gt",
            password: "root"
        }
    },
    mounted(){
        
    }
}
</script>