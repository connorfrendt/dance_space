<template>
    <div id="sign-up-form">
        <div id="child">
            <form @submit.prevent="signUp(profile)">
                <label>
                    Name:
                    <input type="textbox" v-model="profile.name" />
                </label>
            
                <label>
                    Username:
                    <input type="textbox" v-model="profile.username" />
                </label>

                <label>
                    Password:
                    <input type="password" v-model="profile.password" />
                </label>
            
                <button>Sign Up!</button>
            </form>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            profile: {
                name: '',
                username: '',
                password: ''
            }
        }
    },
    props: {
        onSignUp: Function
    },
    methods: {
        signUp() {
            console.log('and here');
            this.onSignUp(this.profile);
        }
    }
}
</script>

<style>
#sign-up-form {
    height: 50vh;
    text-align: center;
    background: gray;
}

#child {
    background: lightgray;
}

label {
    display: block;
}
</style>