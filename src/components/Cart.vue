<template>
  <div>
    <!-- Button trigger modal -->
    <div class="cart">
      <button
        type="button"
        class="btn btnCart text-white"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i class="fas fa-cart-arrow-down fa-3x"></i>
        <span class="badge badge-pill badge-danger">2</span>
      </button>
    </div>

    <!-- Modal <!-- 購物車表格 -->-->
    <div
      class="modal fade"
      id="exampleModal"
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
              <tbody>
                <tr>
                  <th scope="row">
                    <button class="btn btn-sm btn-outline-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </th>
                  <td>魔物獵人</td>
                  <td>1/部</td>
                  <td class="text-right">$1000</td>
                </tr>
              </tbody>
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
            <button type="button" class="btn btn-outline-danger">結帳去</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
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
