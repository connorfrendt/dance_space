<template>
  <div>
      <div id="header">Welcome {{ user }}!</div>
  </div>
</template>

<script>
export default {
    props: {
        user: Object
    }
}
</script>

<style>

</style>