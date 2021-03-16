<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
  // created() {
  //   const api = `${process.env.APIPATH}/api/${process.env.COSTOMPATH}/products`;
  //   // console.log(process.env.APIPATH);
  //   // console.log(process.env.COSTOMPATH);
  //   Vue.axios.get(api).then(response => {
  //     console.log(response.data);
  //   });
  // }
};
</script>

<style>
body {
  position: relative;
  box-sizing: border-box;
  background: #000;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
</style>
