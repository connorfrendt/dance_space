<template>
  <div id="app">
    <MainPage></MainPage>
    <Login></Login>
  </div>
</template>

<script>
import MainPage from './components/MainPage';
import Login from './components/Login';

export default {
  name: 'App',
  components: {
    Login,
    MainPage
  }
}
</script>

<style>

</style>