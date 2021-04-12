<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <section class="container mt-5">
      <h1 class="text-center text-white my-4 text-success">付款完成!</h1>
      <div class="row justify-content-center">
        <div class="col-10">
          <table class="table text-white">
            <thead>
              <th class="align-middle text-center orderTitle">訂購日期</th>
              <th class="align-middle text-center orderTitle">產品 id</th>
              <th class="align-middle orderTitle">訂單價格</th>
              <th></th>
            </thead>
            <tbody v-for="item in orderList.data" :key="item.id">
              <tr></tr>
              <tr>
                <td class="d-flex align-items-center">
                  <div class="flex-column px-3">
                    <p>{{ item.order_date }}</p>
                    <span class="badge badge-warning">{{
                      item.product_type
                    }}</span>
                  </div>
                </td>
                <td class="align-middle">{{ item.order_id }}</td>
                <td class="align-middle text-right orderPrice">
                  {{ item.total_price | currency }}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
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
  name: 'payInfo',
  data() {
    return {
      isLoading: '',
      orderList: {
        data: [],
        total_count: '',
        current_count: '',
      },
    }
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    getOrder() {
      this.isLoading = true
      const userCartPay = `${process.env.USERAPI}/api/v1/order`
      fetch(userCartPay)
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          this.orderList = response
          this.isLoading = false
        })
    },
  },
  mounted() {
    this.getOrder()
  },
}
</script>

<style lang="scss" scoped>
.orderTitle {
  font-weight: 600;
  font-size: 24px;
}
.orderPrice {
  font-size: 20px;
}
</style>
