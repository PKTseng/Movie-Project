<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Header></Header>
    <MovieBanner></MovieBanner>
    <!-- 下半部所有電影內容 -->
    <div class="container mt-5">
      <div class="row">
        <!-- 左邊選擇電影類型 -->
        <div class="col-12 col-lg-3">
          <div class="list-group sticky-top listMenu">
            <a
              data-toggle="list"
              href="#home"
              class="list-group-item list-group-item-action active list-group-item-dark"
            >
              <span class="menuText"> 全部顯示</span>
            </a>
            <a
              data-toggle="list"
              href="#menu-1"
              class="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-film fa-2x videoIcon"></i>
              <span class="ml-3 menuText">冒險</span>
              <span class="badge badge-light badge-pill ml-auto">5</span>
            </a>
            <a
              data-toggle="list"
              href="#menu-2"
              class="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center"
              ><i class="fas fa-film fa-2x videoIcon"></i>
              <span class="ml-3 menuText">劇情類</span>
              <span class="badge badge-light badge-pill ml-auto">1</span>
            </a>
          </div>
        </div>
        <!-- 右邊所有電影清單 -->
        <div class="col-12 col-lg-9">
          <!-- 標題 & 搜尋欄 -->
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <h1 class="text-white itemTitle">強檔院線</h1>
              <form class="from-line my-lg-0">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="輸入關鍵字"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- 所有電影類型 -->
          <div class="tab-content">
            <div class="tab-pane active" id="home">
              <div class="row">
                <!-- 第1張 -->
                <!-- v-for 動態綁定的 key，可以使用 key 或是 item.id ，用item.id 是因為他是唯一的 -->
                <div
                  class="col-md-6 mb-4 col-lg-4"
                  v-for="(item, key) in products"
                  :key="item.id"
                >
                  <div class="card h-100 border-0 bg-dark text-light cardTitle">
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
                      ><img
                        :src="item.image_url"
                        class="card-img-top"
                        alt="..."
                    /></router-link>

                    <div
                      class="card-body d-flex justify-content-between align-items-center"
                    >
                      <h4 class="m-0 movieName">{{ item.product_name }}</h4>
                    </div>
                    <div class="px-2 d-flex flex-column border-white">
                      <button class="btn btn-outline-light btn-sm mb-2">
                        加入我的最愛
                      </button>
                      <button
                        class="btn btn-outline-light btn-sm mb-2"
                        data-toggle="modal"
                        data-target="#movieInfo"
                        @click="getProduct(item.id)"
                      >
                        <i
                          class="fas fa-spinner fa-spin"
                          v-if="status.loadingItem === item.id"
                        ></i>
                        我要租借
                      </button>
                      <button class="btn btn-outline-danger btn-sm mb-2">
                        <i
                          class="fas fa-spinner fa-spin"
                          v-if="status.addLoading"
                        ></i>
                        我要購買
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Cart />
    <!-- <MovieRent /> -->
    <!-- model -->
    <div
      class="modal fade"
      id="movieInfo"
      tabindex="-1"
      role="dialog"
      aria-labelledby="movieInfoLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 內容 -->
          <div class="modal-body">
            <img :src="rentInfo.image_url" alt="" />
            <h5 id="movieInfoLabel" class="mt-3">
              {{ rentInfo.product_name }}
            </h5>
            <select name="" class="form-control mt-3" v-model="rentInfo.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Header from '@/components/Navbar'
import Footer from '@/components/Footer'
import MovieBanner from '@/components/MovieBanner'
import Cart from '@/components/Cart'
// import MovieInfo from '@/views/MovieInfo'
// import MovieCard from '@/components/MovieCard/MovieCard'
import MovieRent from '@/components/MovieCard/MovieRent'

export default {
  name: 'index',
  data() {
    return {
      isLoading: false,
      status: {
        loadingItem: false,
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
    // MovieInfo,
    // MovieCard,
    MovieRent,
  },
  methods: {
    getProducts() {
      this.isLoading = true
      const api = '/data/api/v1/product'
      Vue.axios.get(api).then(response => {
        // console.log(response.data)
        this.products = response.data.data
        this.isLoading = false
      })
    },
    getProduct(id) {
      this.status.loadingItem = id
      // const api = `/data/api/v1/product/${id}`
      const api = `/data/api/v1/product/f65b8846-3`
      Vue.axios.get(api).then(res => {
        console.log(res.data)
        $('#movieInfo').modal('show')
        this.rentInfo = res.data
        this.status.loadingItem = ''
      })
    },
    // 以防萬一的 fetch
    // getProduct() {
    //   fetch('http://example.com/movies.json')
    //     .then(function (response) {
    //       return response.json()
    //     })
    //     .then(function (myJson) {
    //       console.log(myJson)
    //     })
    // },
  },
  created() {
    this.getProducts()
  },
}
</script>

<style scoped lang="scss">
html {
  height: 100%;
}

.movieName {
  font-weight: 600;
}
// 類型選單
.listMenu {
  top: 120px;
  z-index: 3;
  @media (max-width: 1024px) {
    .videoIcon {
      display: none;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
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
