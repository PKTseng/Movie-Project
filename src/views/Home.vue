<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Header></Header>
    <MovieBanner></MovieBanner>
    <!-- 下半部所有電影內容 -->
    <div class="container mt-5">
      <div class="row">
        <!-- 左邊選擇電影類型 -->
        <div class="col-md-3">
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
        <div class="col-md-9">
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
                <div
                  class="col-md-6 mb-4 col-lg-4"
                  v-for="item in products"
                  :key="item"
                >
                  <div class="card h-100 border-0 bg-dark text-light cardTitle">
                    <div class="type">{{ item.product_type }}</div>
                    <div class="thumbnail">
                      <img
                        :src="item.image_url"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div
                      class="card-body d-flex justify-content-between align-items-center"
                    >
                      <h4 class="m-0">{{ item.product_name }}</h4>
                      <button class="btn btn-sm">
                        <i class="fa-heart fa-lg text-white far"></i>
                      </button>
                    </div>
                    <div
                      class="card-footer d-flex justify-content-around border-white"
                    >
                      <router-link
                        to="/movieInfo"
                        class="btn btn-outline-light btn-sm"
                        @click="getProduct(id)"
                        >查看更多</router-link
                      >
                      <button
                        class="btn btn-outline-danger btn-sm"
                        @click="addCart"
                      >
                        <i
                          class="fas fa-spinner fa-spin"
                          v-if="status.addLoading"
                        ></i>
                        加入購物車
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
  </div>
</template>

<script>
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieBanner from "@/components/MovieBanner";
import Cart from "@/components/Cart";
export default {
  name: "index",
  data() {
    return {
      isLoading: false,
      status: {
        addLoading: false
      },
      products: []
    };
  },

  components: {
    Header,
    Footer,
    MovieBanner,
    Cart
  },
  methods: {
    getProducts() {
      const api = "http://localhost:3000/products";
      // const api = "http://bb8fa0d4b539.ngrok.io/api/v1/product";
      this.isLoading = true;
      Vue.axios.get(api).then(response => {
        // console.log(response.data);
        // console.log(response.data.products);
        this.products = response.data;
        this.isLoading = false;
      });
    },
    getProduct(id) {
      const api = "http://localhost:3000/products/{id}";
      // const api = "http://bb8fa0d4b539.ngrok.io/api/v1/product/{product_id}";
      Vue.axios.get(api).then(response => {
        // console.log(response.data);
        // console.log(response.data.products);
        this.products = response.data.products;
      });
    },
    addCart() {
      this.status.addLoading = true;
      const api = "http://localhost:3000/cart";
      Vue.axios.get(api).then(response => {
        console.log(response.data);
        this.status.addLoading = false;
        // this.products = response.data.
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped lang="scss">
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
