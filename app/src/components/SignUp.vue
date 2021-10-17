<template>
    <div>
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

</style>