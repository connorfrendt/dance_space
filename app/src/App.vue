<template>
  <div id="app">
    <Login></Login>
    <MainPage></MainPage>
    <Asdf></Asdf>
  </div>
</template>

<script>
import MainPage from './components/MainPage';
import Login from './components/Login';
import Asdf from './components/Asdf';

export default {
  name: 'App',
  components: {
    Login,
    MainPage,
    Asdf
  }
}
</script>

<style>

</style>