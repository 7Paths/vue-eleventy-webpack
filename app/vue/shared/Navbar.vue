<template>
    <div>
        <b-navbar class="p-2">
            <template #start>
                <b-navbar-item @click="$router.push({name: 'home'}).catch(() => {})">
                    Home
                </b-navbar-item>
                <b-navbar-item @click="$router.push({name: 'login'}).catch(() => {})">
                    Login
                </b-navbar-item>
            </template>
            <template #end>
                <b-button class="mr-2" type="is-primary">Sign in</b-button>
                <b-button type="is-primary is-light">Sing up</b-button>
            </template>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>
