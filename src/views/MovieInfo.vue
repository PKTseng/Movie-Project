<template>
  <div>
    <Navbar />
    <section class="container mt-5">
      <div class="row text-white">
        <div class="col-md-6 d-flex justify-content-center">
          <img :src="movieInfo.img" alt="" class="movieImg" />
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-lg-between">
          <div class="movieInfo">
            <h2 class="d-flex align-items-center">
              {{ movieInfo.name }}
            </h2>
            <p class="movieText">
              類型 :
              <span class="movieSpan category">{{ movieInfo.type }}</span>
            </p>

            <p class="movieText">
              評分 : <span class="movieSpan score">{{ movieInfo.score }}</span>
            </p>
            <p class="movieText">
              放映時數 :
              <span class="movieSpan time">{{ movieInfo.time }}</span>
            </p>
            <p class="description">{{ movieInfo.description }}</p>
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
            <div class="mobileBtn d-flex justify-content-end mt-3">
              <button class="btn btn-outline-light mr-3 p-2">
                <i class="far fa-heart"></i>
                <span class="px-1">加到我的最愛</span>
              </button>
              <button class="btn btn-outline-light mr-3 p-2">
                <i class="fas fa-cart-arrow-down"></i>
                <span class="px-1">加入購物車</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <Cart />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart.vue'

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
    Cart,
  },
}
</script>

<style lang="scss" scoped>
.movieImg {
  height: 500px;
}

.description {
  font-weight: 500;
  font-size: 16px;
}
.movieText {
  font-size: 20px;
}
.movieSpan {
  padding: 5px;
  border-radius: 5px;
}

.category {
  background: #27ae60;
  font-weight: 600;
}

.score {
  background: #e67e22;
}

.time {
  background: #3498db;
}

.movieInfo {
  @media (max-width: 768px) {
    margin-top: 50px;
  }
}

.mobileBtn {
  @media (max-width: 1024px) {
    margin-bottom: 100px;
  }
}
</style>
