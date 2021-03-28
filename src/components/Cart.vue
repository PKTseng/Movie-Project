<template>
  <div>
    <!-- Button trigger modal -->
    <div class="cart">
      <button
        type="button"
        class="btn btnCart text-white"
        data-toggle="modal"
        data-target="#cartModal"
        @click="showCart"
      >
        <i class="fas fa-cart-arrow-down fa-3x"></i>
        <span class="badge badge-pill badge-danger">2</span>
      </button>
    </div>

    <!-- Modal <!-- 購物車表格 -->-->
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title cartTitle" id="exampleModalLabel">
              已購買電影
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table movieList">
              <thead class="thead-light">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">電影名稱</th>
                  <th scope="col">購買數量</th>
                  <th scope="col">單價</th>
                </tr>
              </thead>
              <tbody v-for="item in carts" :key="item.id">
                <tr>
                  <th scope="row">
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click="deleteCart(item.product_id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </th>
                  <td>{{ item.product_name }}</td>
                  <td class="text-right">{{ item.product_qty }}/部</td>
                  <td class="text-right">
                    {{ item.product_total_price | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td class="text-right">總金額</td>
                  <td class="text-right">{{ totalPrice | currency }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              再看一下
            </button>
            <button @click.prevent="goShopping" class="btn btn-outline-danger">
              前往購物商城
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Cart',
  data() {
    return {
      totalPrice: '',
      carts: [],
    }
  },
  methods: {
    showCart() {
      const addCartApi = `${process.env.USERAPI}/api/v1/cart`
      fetch(addCartApi)
        .then(response => {
          return response.json()
        })
        .then(response => {
          // console.log(response)
          this.carts = response.data
          this.totalPrice = response.total_price
        })
    },
    deleteCart(id) {
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
        })
    },
    goShopping() {
      $('#cartModal').modal('hide')
      const path = '/payment'
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.cartTitle {
  font-weight: 700;
}
.cart {
  position: fixed;
  bottom: 30px;
  right: 20px;
  @media (max-width: 768px) {
    display: none;
  }
}

// 右下角購物車
.btnCart {
  position: relative;
  bottom: 20px;
  right: 10px;
  .badge {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
}

.movieList {
  th,
  td {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
