<template>
  <div class="card border-0 bg-dark text-light cardTitle h-100">
    <div class="type">{{ item.product_type }}</div>
    <router-link
      :to="{
        name: 'MovieInfo',
        params: {
          id: item.product_id,
          img: item.image_url,
          name: item.product_name,
          type: item.product_type,
          description: item.description,
          price: item.price,
          score: item.movie_score,
          time: item.movie_runtime,
        },
      }"
      class="thumbnail"
      ><img :src="item.image_url" class="card-img-top" alt="..."
    /></router-link>

    <div class="card-body d-flex justify-content-between align-items-center">
      <h4 class="m-0 movieName">{{ item.product_name }}</h4>
    </div>
    <div class="px-2 flex-column d-flex border-white mobileBtn">
      <!-- 用 class 動態綁 fas、far 狀態 -->
      <button
        v-if="!favoriteShow"
        class="btn btn-outline-danger mb-2 px-2"
        @click="addFavorite(item.product_id)"
        :class="{ active: favoriteShow }"
      >
        <i class="fas fa-spinner fa-spin" v-if="status.favoriteLoading"></i>
        <i class="far fa-heart px-2"></i>
        <span>加入我的最愛</span>
      </button>
      <button
        v-else
        class="btn btn-outline-danger mb-2 px-2"
        @click="removeFavorite(item.product_id)"
        :class="{ active: favoriteShow }"
      >
        <i class="fas fa-spinner fa-spin" v-if="status.favoriteLoading"></i>
        <i class="far fa-heart px-2"></i>
        <span>從我的最愛中移除</span>
      </button>

      <button
        class="btn btn-outline-success mb-2"
        @click="addCart(item.product_id)"
      >
        <i class="fas fa-spinner fa-spin" v-if="status.addLoading"></i>
        <i class="fas fa-cart-plus px-2"></i>
        <span>我要購買</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {
      favoriteShow: false,
      status: {
        addLoading: false,
        favoriteLoading: false,
      },
    }
  },
  props: {
    item: {},
  },
  methods: {
    addCart(id, qty = 1) {
      this.status.addLoading = true
      const addCartApi = `${process.env.USERAPI}/api/v1/cart`
      fetch(addCartApi, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: id,
          product_qty: qty,
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          this.status.addLoading = false
        })
    },
    addFavorite(id) {
      this.status.favoriteLoading = true
      const addFavoriteApi = `${process.env.USERAPI}/api/v1/favorite`
      fetch(addFavoriteApi, {
        method: 'post',
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
          this.favoriteShow = true
          this.status.favoriteLoading = false
        })
    },
    removeFavorite(id) {
      this.isLoading = true
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
          this.favoriteShow = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.movieName {
  font-weight: 600;
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
// 手機板固定在下方的選單
.mobileMenu {
  position: fixed;
  bottom: 0;
  display: none;
  @media (max-width: 768px) {
    display: block;
    z-index: 2;
  }
}

.movieInfo {
  @media (max-width: 768px) {
    margin-top: 50px;
  }
}

.mobile {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
