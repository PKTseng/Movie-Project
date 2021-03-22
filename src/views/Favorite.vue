<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <section class="container mt-5">
      <h1 class="text-white">收藏清單</h1>
      <div class="row favorite">
        <!--  第1張 魔物獵人 劇情類-->
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 border-0 bg-dark text-light cardTitle">
            <div class="type">類型</div>
            <div class="thumbnail">
              <img
                src="@/assets/movies/movie3.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <h4 class="m-0 movieName">電影名稱</h4>
            </div>
            <div class="px-2 d-flex flex-column border-white">
              <button class="btn btn-outline-light btn-sm mb-2 py-2">
                <i class="fas fa-heart px-2"></i>
                加入我的最愛
              </button>

              <button class="btn btn-outline-danger btn-sm mb-2 py-2">
                <i class="fas fa-cart-plus px-2"></i>
                我要購買
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
  name: 'Favorite',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      products: [],
    }
  },
  methods: {
    getFavorite() {
      this.isLoading = true
      fetch('http://7bcd8d479c82.ngrok.io/api/v1/product')
        .then(response => {
          return response.json()
        })
        .then(response => {
          // console.log(typeof response.data)
          // console.log(response.data)
          this.products = response.data
          this.isLoading = false
        })
    },
  },
  mounted() {
    this.getFavorite()
  },
}
</script>

<style scoped lang="scss">
.favorite {
  margin-bottom: 1000px;
}
// 卡片
.cardTitle {
  position: relative;
  overflow: hidden;
  border: 0;
  .thumbnail {
    overflow: hidden;
    img {
      transform: scale(1, 1);
      transition: 0.5s;
    }
    img:hover {
      transform: scale(1.1, 1.1);
    }
  }
}

// 卡片標籤
.type {
  z-index: 1;
  font-weight: 700;
  padding: 5px;
  width: 120px;
  left: -30px;
  top: 10px;
  text-align: center;
  position: absolute;
  background: #ee5a24;
  transform: rotate(-45deg);
  font-size: 18px;
}
</style>
