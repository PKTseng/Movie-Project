<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-5">
      <div class="row">
        <!-- 左邊選擇電影類型 -->
        <div class="col-12 col-lg-3">
          <div class="list-group sticky-top listMenu">
            <a
              class="list-group-item list-group-item-action active list-group-item-dark"
            >
              <span class="menuText">全部顯示</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center"
              v-for="item in categories"
              @click.prevent="categoryItem(item)"
            >
              <i class="fas fa-film fa-2x videoIcon"></i>
              <span class="ml-3 menuText">{{ item }}類</span>
              <span class="badge badge-light badge-pill ml-auto">{{
                getCount(item)
              }}</span>
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
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- 所有電影類型 -->
          <div class="tab-content">
            <div class="tab-pane active" id="home">
              <div class="row cardList">
                <!-- 第1張 -->
                <!-- v-for 動態綁定的 key，可以使用 key 或是 item.id ，用item.id 是因為他是唯一的 -->
                <div
                  class="col-md-6 mb-4 col-lg-4"
                  v-for="item in renderProduct"
                  :key="item.id"
                >
                  <MovieCard :item="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
export default {
  name: 'MovieList',
  components: {
    MovieCard,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      categoryWithCount: {},
      categories: [],
      renderProduct: [],
    }
  },
  methods: {
    getProducts: function () {
      this.isLoading = true
      // const api = '/data/api/v1/product'
      const api = 'http://localhost:3000/products'
      Vue.axios.get(api).then(response => {
        // console.log(response.data.data)
        // console.log(response)
        // this.products = response.data.data
        // this.renderProduct = response.data.data
        this.products = response.data
        this.renderProduct = response.data
        this.getCategories()
        this.getCategoryWithCount()
        this.isLoading = false
      })
    },
    getCategories: function () {
      let categories = this.products.map(element => {
        return element.product_type
      })
      this.categories = categories.filter(
        (item, index) => categories.indexOf(item) === index
      )
    },
    getCategoryWithCount: function () {
      let count_hash = {}
      for (const category of this.categories) {
        this.products.forEach(element => {
          if (element.product_type === category) {
            if (typeof count_hash[category] === 'undefined') {
              count_hash[category] = 0
            }
            count_hash[category] = count_hash[category] + 1
          }
        })
      }
      this.categoryWithCount = count_hash
    },
    getCount: function (item) {
      return this.categoryWithCount[item]
    },
    categoryItem: function (category) {
      this.renderProduct = this.products.filter(function (item) {
        return category === item.product_type
      })
    },
  },
  mounted() {
    this.getProducts()
  },
  // created() {
  //   this.getProducts()
  // },
}
</script>

<style lang="scss" scoped>
.cardList {
  margin-bottom: 100px;
}
.movieName {
  font-weight: 600;
}

.menuText {
  font-size: 20px;
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
</style>
