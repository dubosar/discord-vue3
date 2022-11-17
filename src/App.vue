<script setup>
import Layout from './views/Layout.vue'
const  colors = {
  "black": "#1e2124",
  "dark": "#282b30",
  "dark-gray": "#36393e",
  "gray": "#424549",
  "light-gray": "#97A9B4",
  "white": "#ffffff",
  "main": "#7289da",
  "green": "#57f287",
}

</script>

<template>
  <div class="container">
    <Layout />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1280px;
  margin: 50px auto;
}
</style>
