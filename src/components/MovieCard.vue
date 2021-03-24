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
    <div class="px-2 d-flex flex-column border-white">
      <button class="btn btn-outline-light btn-sm mb-2 px-2">
        <i class="fas fa-heart px-2"></i>
        加入我的最愛
      </button>

      <button
        class="btn btn-outline-danger btn-sm mb-2"
        @click="addCart(item.product_id)"
      >
        <i class="fas fa-spinner fa-spin" v-if="status.addLoading"></i>
        <i class="fas fa-cart-plus px-2"></i>
        {{ item.product_id }}
        我要購買
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {
      status: {
        addLoading: false,
      },
    }
  },
  props: {
    item: {},
  },
  methods: {
    addCart(id, qty = 1) {
      this.status.addLoading = true
      const addCartApi = 'http://7bcd8d479c82.ngrok.io/api/v1/cart'
      fetch(addCartApi, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          qty,
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
