<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './assets/SCSS/all.scss';
html {
  height: 100%;
}

body {
  position: relative;
  box-sizing: border-box;
  background-color: #121212 !important;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #000000;
  margin: 0;
  padding: 0;
  min-height: 100%;
}
</style>
