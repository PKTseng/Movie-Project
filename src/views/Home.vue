<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Header></Header>
    <MovieBanner></MovieBanner>
    <!-- 下半部所有電影內容 -->
    <MovieList />
    <Footer />
    <Cart />
  </div>
</template>

<script>
// import $ from 'jquery'
import Header from '@/components/Navbar'
import Footer from '@/components/Footer'
import MovieBanner from '@/components/MovieBanner'
import Cart from '@/components/Cart'
import MovieList from '@/views/MovieList'

export default {
  name: 'index',
  data() {
    return {
      isLoading: false,
      status: {
        addLoading: false,
      },
      products: [], // render
      movieType: {
        allMovie: null, // all movie
        motion: [],
        love: null,
      },
      rentInfo: {},
      info: [],
    }
  },
  components: {
    Header,
    Footer,
    MovieBanner,
    Cart,
    MovieList,
  },
}
</script>

<style scoped lang="scss">
html {
  height: 100%;
}
</style>
