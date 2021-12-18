<template>
    <section>
        <b-field label="Enter your email">
            <b-input type="email" v-model="email" required></b-input>
        </b-field>

        <b-field label="Enter your password">
            <b-input type="password" v-model="password" required></b-input>
        </b-field>

        <b-button type="is-primary" expanded>Login</b-button>
    </section>
</template>

<script>
export default {
    data(){
        return {
            email: "mbonifasi-2019139@kinal.edu.gt",
            password: "root"
        }
    }
}
</script>

<style>

</style>