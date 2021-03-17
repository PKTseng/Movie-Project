<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // console.log(process.env.THEOAPI);
    // const api = `${process.env.THEOAPI}/api/v1/product`;
    const api = "http://bb8fa0d4b539.ngrok.io/api/v1/product";
    // const api = "  http://localhost:3000/product";//假資料
    Vue.axios.get(api).then(response => {
      console.log(response.data);
    });
  }
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
  height: 100%;
}
</style>
