<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <section class="container mt-5">
      <h1 class="text-white">收藏清單</h1>
      <div class="row favorite">
        <!--  第1張 魔物獵人 劇情類-->
        <div class="col-lg-4 col-md-6 mb-4" v-for="item in products">
          <div class="card h-100 border-0 bg-dark text-light cardTitle">
            <div class="type">{{ item.product_type }}</div>
            <div class="thumbnail">
              <img :src="item.image_url" class="card-img-top" alt="..." />
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <h4 class="m-0 movieName">{{ item.product_name }}</h4>
            </div>
            <div
              class="px-2 d-flex flex-column border-white"
              @click="removeFavorite(item.product_id)"
            >
              <button class="btn btn-outline-light btn-sm mb-2 py-2">
                <i class="fas fa-heart px-2"></i>
                從我的最愛移除
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
      movieName: [],
    }
  },
  methods: {
    getFavorite() {
      this.isLoading = true
      const favoriteApi = `${process.env.USERAPI}/api/v1/favorite`
      fetch(favoriteApi)
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.products = response.data
          this.isLoading = false
        })
    },
    removeFavorite(id) {
      const removeFavorite = `${process.env.USERAPI}/api/v1/favorite`
      fetch(removeFavorite, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: id,
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
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
