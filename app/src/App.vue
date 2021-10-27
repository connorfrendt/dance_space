<template>
    <div id="app">
        <RouterView
            :onSignUp="handleSignUp"
        ></RouterView>
    </div>
</template>

<script>
import api from './services/api';

export default {
    name: 'App',
    methods: {
            handleSignUp(profile) {
                console.log('here');
                return api.signUp(profile);
            }
    }
}
</script>

<style>

</style>