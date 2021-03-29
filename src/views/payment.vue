<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <!-- 中間購物清單 -->
    <section class="container mt-5">
      <h1 class="text-center text-white my-4">購物清單</h1>
      <div class="row justify-content-center">
        <div class="col-md-10 col-12">
          <table class="table text-white movieCart">
            <thead class="cartTitle">
              <th class="align-middle">選購電影</th>
              <th class="align-middle text-right">數量</th>
              <th class="align-middle text-right">售價</th>
              <th></th>
            </thead>
            <tbody
              v-for="item in cartItem.data"
              :key="item.id"
              class="cartContent"
            >
              <tr></tr>
              <tr>
                <td class="d-flex align-items-center">
                  <div class="movieImg">
                    <img :src="item.image_url" alt="" />
                  </div>
                  <div class="flex-column movieName">
                    <h5>{{ item.product_name }}</h5>
                    <span class="badge badge-warning movieType">{{
                      item.product_type
                    }}</span>
                  </div>
                </td>
                <td class="align-middle text-right">
                  {{ item.product_qty }}/部
                </td>
                <td class="align-middle text-right moviePrice">
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
                <td class="text-right">
                  {{ cartItem.total_price | currency }}
                </td>
                <td></td>
              </tr>
              <tr v-if="coupon">
                <td></td>
                <td class="text-right text-success">已套用優惠碼</td>
                <td class="text-right text-success">
                  {{ cartItem.final_price | currency }}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10 col-12">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
              v-model="couponCode"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-danger"
                type="button"
                id="button-addon2"
                @click="addCouponCode(couponCode)"
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
        <div class="col-md-10 col-sm-12">
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
              <button class="btn btn-success orderBtn" @click="checkPay()">
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
      couponCode: '',
      isLoading: false,
      cartItem: {
        data: [],
        discount_price: '', //打折金額
        final_price: '', //打折後扣掉的金額
        totalPrice: '', //尚未打折金額
      },
      coupon: false,
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
          // console.log(response.data)
          this.cartItem = response
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
          // console.log(response)
          this.getCartInfo()
        })
    },
    //套用優惠券
    addCouponCode(code) {
      const couponApi = `${process.env.USERAPI}/api/v1/coupon`
      fetch(couponApi, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coupon_code: code,
          enabled: true,
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          if (code === 'test') {
            if (code === this.couponCode) {
              this.coupon = response.enabled
              console.log('輸入正確')
            } else {
              this.coupon = false
              console.log('第二層判斷，確認 code 跟 couponCod 沒有一致')
            }
          } else {
            this.coupon = false
            console.log('第一層判斷，確認 code 錯誤')
          }
          console.log(response)
          // this.coupon = response.enabled
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
  },
  mounted() {
    this.getCartInfo()
  },
}
</script>

<style lang="scss" scoped>
.movieCart {
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 375px) {
    font-size: 16px;
  }
  .cartContent {
    font-size: 20px;
    @media (max-width: 375px) {
      font-size: 16px;
    }
  }
  .movieName {
    padding-left: 10px;
    @media (max-width: 375px) {
      padding-left: 0;
      h5 {
        font-size: 16px;
      }
    }
  }
}

.movieImg {
  img {
    height: 150px;
    @media (max-width: 375px) {
      display: none;
    }
  }
}

.movieType {
  @media (max-width: 375px) {
    display: none;
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
