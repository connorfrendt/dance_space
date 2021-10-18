<template>
    <div id="header">
        <div>
            <div>FIND DANCE STUDIOS</div>
            <div>WHEREVER YOU ARE</div>
        </div>
        <div>
            <form @submit.prevent="username">
                <div>
                    <label>
                        Username:
                        <input v-model="user.username">
                    </label>
                </div>
                
                <div>
                    <label>
                        Password:
                        <input type="password" v-model="user.password">
                    </label>
                </div>

                <button>Enter</button>
                <router-link to="/SignUp">CREATE ACCOUNT</router-link>
            </form>
        </div>
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
            console.log(this.user.name, '\n', this.user.username, '\n', this.user.password);
        }
    }
}
</script>

<style>
#header {
    display: flex;
    justify-content: space-between;
}
</style>