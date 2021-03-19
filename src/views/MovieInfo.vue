<template>
  <div>
    <Navbar />
    <section class="container mt-5 h-100">
      <div class="row text-white">
        <div class="col-md-5 movie d-flex justify-content-end">
          <img :src="movieInfo.img" alt="" />
        </div>
        <div class="col-md-5 d-flex flex-column justify-content-lg-between">
          <div class="movieInfo">
            <h2>{{ movieInfo.name }}</h2>
            <h5 class="d-flex align-items-center">
              類型:
              <span class="badge badge-success mx-1 p-2">{{
                movieInfo.type
              }}</span>
            </h5>
            <p>{{ movieInfo.description }}</p>
            <p>滿意度 : {{ movieInfo.score }}</p>
            <p>時數 : {{ movieInfo.time }}</p>
          </div>
          <!-- 價格 -->
          <div>
            <div class="d-flex flex-column align-items-end">
              <del class="text-white"
                ><h5>售價 NT {{ movieInfo.price | currency }}</h5></del
              >
              <div class="h3 m-0 ml-auto text-danger">
                <span>特價 NT</span>
                <strong>{{ movieInfo.price | currency }} </strong>
              </div>
            </div>
            <div
              class="d-flex justify-content-end align-items-end mt-3 btn-group"
            >
              <button class="btn btn-outline-light">
                <i class="far fa-heart"></i>
                <span class="px-1 mobile">加到我的最愛</span>
              </button>
              <button class="btn btn-outline-light">
                <i class="fas fa-cart-arrow-down"></i>
                <span class="px-1 mobile">加入購物車</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'MovieInfo',
  data() {
    return {
      movieInfo: {
        id: this.$route.params.id,
        img: this.$route.params.img,
        name: this.$route.params.name,
        type: this.$route.params.type,
        description: this.$route.params.description,
        price: this.$route.params.price,
        score: this.$route.params.score,
        time: this.$route.params.time,
      },
    }
  },
  components: {
    Navbar,
    Footer,
  },
  // mounted() {
  //   this.moiveName = this.$route.params.id
  // },
}
</script>

<style></style>
