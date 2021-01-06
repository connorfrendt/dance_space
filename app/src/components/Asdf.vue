<template>
    <div>
        <form @submit.prevent="user">
            <div>
                <label>
                    Name
                    <input  v-model="user.name">
                </label>
            </div>
            
            <div>
                <label>
                    Username
                    <input v-model="user.username">
                </label>
            </div>
            
            <div>
                <label>
                    Password
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
        user() {
            
        }
    }
}
</script>

<style>

</style>