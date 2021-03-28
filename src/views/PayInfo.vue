<template>
  <div>
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
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'payInfo',
  data() {
    return {
      userCartInfo: [],
    }
  },
  methods: {
    userCartInfo() {
      this.isLoading = true
      const userCartPay = `${process.env.USERAPI}/api/v1/order`
      fetch(userCartPay)
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          this.userCartInfo = response.data
          this.isLoading = false
        })
    },
  },
  mounted() {
    this.userCartInfo
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
