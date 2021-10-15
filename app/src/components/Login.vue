<template>
    <div>
        <div>FIND DANCE STUDIOS</div>
        <div>ANYWHER YOU GO</div>
        <form @submit.prevent="username">
            <div>
                <label>
                    Name:
                    <input  v-model="user.name">
                </label>
            </div>
            
            <div>
                <label>
                    Username:
                    <input v-model="user.username">
                </label>
            </div>
            
            <div>
                <label>
                    Password:
                    <input v-model="user.password">
                </label>
            </div>

            <button>Enter</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        username() {
            console.log(this.user);
        }
    }
}
</script>

<style>
form {
    position: fixed;
    left: 50%;
    top: 50%;
}
</style>