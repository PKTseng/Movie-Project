<template>
  <div>
    <Header></Header>
    <MovieBanner></MovieBanner>
    <!-- <MovieCard></MovieCard> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import MovieBanner from "@/components/MovieBanner";

export default {
  name: "index",
  components: {
    Header,
    Footer,
    MovieCard,
    MovieBanner
  },
  data() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style scoped lang="scss"></style>
