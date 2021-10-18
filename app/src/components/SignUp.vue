<template>
    <div id="sign-up-form">
        <div id="child">
            <form @submit.prevent="signUp">
                <label>
                    Name:
                    <input type="textbox" />
                </label>
            
                <label>
                    Username:
                    <input type="textbox" />
                </label>

                <label>
                    Password:
                    <input type="password" />
                </label>
            
                <button>Sign Up!</button>
            </form>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        signUp() {
            console.log('You have successfully signed up');
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
    /* position: absolute; */
    bottom: 50px;
    background: lightgray;
}

label {
    display: block;
}
</style>