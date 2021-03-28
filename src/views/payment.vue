<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <!-- 中間購物清單 -->
    <section class="container mt-5">
      <h1 class="text-center text-white my-4">購物清單</h1>
      <div class="row justify-content-center">
        <div class="col-10">
          <table class="table text-white">
            <thead>
              <th class="align-middle">電影名稱</th>
              <th class="align-middle">數量</th>
              <th class="align-middle">售價</th>
              <th class="align-middle"></th>
            </thead>
            <tbody v-for="item in cartItem" :key="item.id">
              <tr></tr>
              <tr>
                <td class="d-flex align-items-center">
                  <div class="priceMovie">
                    <img :src="item.image_url" alt="" />
                  </div>
                  <div class="flex-column px-3">
                    <h5>{{ item.product_name }}</h5>
                    <span class="badge badge-warning">{{
                      item.product_type
                    }}</span>
                  </div>
                </td>
                <td class="align-middle">{{ item.product_qty }}/部</td>
                <td class="align-middle text-right">
                  {{ item.product_total_price | currency }}
                </td>
                <td class="align-middle text-right">
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteCart(item.product_id)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td class="text-right">總金額</td>
                <td class="text-right">{{ totalPrice | currency }}</td>
                <td></td>
              </tr>
              <!-- <tr v-if="item.product_total_price !== item.product_total_price">
                <td></td>
                <td class="text-right text-success">折扣價</td>
                <td class="text-right text-success">
                  {{ item.product_total_price | currency }}
                </td>
                <td></td>
              </tr> -->
            </tfoot>
          </table>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-danger"
                type="button"
                id="button-addon2"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用者訂單資訊 -->
    <section class="container mt-5">
      <h2 class="text-white text-center">使用者訂購資訊</h2>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <form class="text-white">
            <div class="form-group">
              <label for="userEmail">Email : </label>
              <input
                type="email"
                class="form-control"
                id="userEmail"
                placeholder="name@example.com"
              />
              <label for="userName">訂購人姓名 : </label>
              <input
                type="text"
                class="form-control"
                id="userName"
                placeholder="請輸入姓名"
              />
              <label for="userPhone">訂購人電話 :</label>
              <input
                type="number"
                class="form-control"
                id="userPhone"
                placeholder="請輸入電話號碼"
              />
            </div>
            <div class="form-group">
              <label for="remarks">備註 :</label>
              <textarea
                class="form-control"
                id="remarks"
                rows="10"
                cols="50"
              ></textarea>
            </div>
            <div class="text-right">
              <button
                class="btn btn-outline-danger orderBtn"
                @click="checkPay()"
              >
                送出訂單
              </button>
            </div>
          </form>
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
  name: 'Checkout',
  data() {
    return {
      isLoading: false,
      cartItem: [],
      totalPrice: '',
    }
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    //進入網頁拿取資料
    getCartInfo() {
      this.isLoading = true
      const finalPay = `${process.env.USERAPI}/api/v1/cart`
      fetch(finalPay)
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          // console.log(response.total_price)
          this.cartItem = response.data
          this.totalPrice = response.total_price
          this.isLoading = false
        })
    },
    //刪除產品
    deleteCart(id) {
      this.isLoading = true
      const deleteCartApi = `${process.env.USERAPI}/api/v1/cart`
      fetch(deleteCartApi, {
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
          this.getCartInfo()
        })
    },
    //確認付款
    checkPay() {
      this.isLoading = true
      const checkPayApi = `${process.env.USERAPI}/api/v1/order`
      fetch(checkPayApi, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: '',
          order_date: '',
          message: 'Success',
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          this.getCartInfo()
        })
    },
    //套用優惠券
    addCouponCode() {
      const couponApi = `${process.env.USERAPI}/api/v1/coupon/test`
      fetch(couponApi)
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          if (response) {
          }
        })
    },
  },
  mounted() {
    this.getCartInfo()
  },
}
</script>

<style lang="scss" scoped>
.priceMovie {
  img {
    height: 150px;
  }
}

label {
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
}
.orderBtn {
  margin-bottom: 200px;
}
</style>
