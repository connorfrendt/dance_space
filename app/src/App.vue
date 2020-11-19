<template>
  <div id="app">
    <Login></Login>
    <MainPage></MainPage>
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