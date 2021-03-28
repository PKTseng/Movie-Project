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
              <!-- <form class="from-line my-lg-0">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="輸入關鍵字"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    v-model="searchText"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      @click="searchText = ''"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form> -->
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
      searchText: '',
    }
  },
  methods: {
    getProducts: function () {
      this.isLoading = true
      fetch(`${process.env.USERAPI}/api/v1/product`)
        .then(response => {
          return response.json()
        })
        .then(response => {
          // console.log(response)
          this.products = response.data
          this.renderProduct = response.data
          this.getCategories()
          this.getCategoryWithCount()
          this.isLoading = false
        })
    },
    getCategories: function () {
      // categories 只放電影類型的陣列
      let categories = this.products.map(element => {
        return element.product_type
      })
      // 過濾掉 categories 陣列內重複的電影類型
      this.categories = categories.filter(
        (item, index) => categories.indexOf(item) === index
      )
    },
    getCategoryWithCount: function () {
      let count_hash = {}
      for (const category of this.categories) {
        // category指向單個電影類型
        this.products.forEach(element => {
          // 用單個電影類型跟陣列內的電影類型比對
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
    // 顯示 sidebar 類型數量
    getCount: function (item) {
      return this.categoryWithCount[item]
    },
    // 透過 sidebar 塞選電影類型
    categoryItem: function (category) {
      this.renderProduct = this.products.filter(
        item => category === item.product_type
      )
    },
  },
  // 文字過濾塞選功能
  // compted: {
  //   renderProductFilter() {
  //     if (this.searchText) {
  //       return this.renderProduct.filter(item =>
  //         item.product_name.includes(this.searchText)
  //       )
  //     }
  //   },
  // },
  mounted() {
    this.getProducts()
  },
}
</script>

<style lang="scss" scoped>
.cardList {
  margin-bottom: 100px;
}

.itemTitle {
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
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
