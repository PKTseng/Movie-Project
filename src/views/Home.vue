<template>
  <div>
    <Navbar />
    <MovieBanner />
    <!-- 下半部所有電影內容 -->
    <MovieList />
    <Footer />
    <Cart />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MovieBanner from '@/components/MovieBanner'
import Cart from '@/components/Cart'
import MovieList from '@/components/MovieList'

export default {
  name: 'Home',
  components: {
    Navbar,
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
