<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "@/components/Navbar";
export default {
  name: "index",
  components: {
    Header
  },
  data() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style></style>
