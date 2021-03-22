<template>
  <div>
    <!-- 右上幾角購物車 icon -->
    <div class="dropdown ml-auto cart">
      <button
        class="btn btn-sm btnCart text-white"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-cart-arrow-down fa-3x"></i>
        <span class="badge badge-pill badge-danger">2</span>
      </button>
      <!-- 點選購物車 -->
      <div
        class="dropdown-menu p-2 dropdownMenu"
        aria-labelledby="dropdownMenuButton"
      >
        <!-- 購物車表格 -->
        <table class="table table-sm">
          <h6 class="mb-3 pt-2">已選擇電影</h6>
          <tbody>
            <tr>
              <td class="align-middle text-center">
                <a
                  href="#removeModal"
                  class="text-muted"
                  data-toggle="modal"
                  data-target="#removeModal"
                  data-title="刪除 白頭山：半島浩劫 1 件"
                  data-backdrop="static"
                >
                  <i class="far fa-trash-alt" aria-hidden="true"></i>
                </a>
              </td>
              <td class="align-middle">白頭山：半島浩劫</td>
              <td class="align-middle">1 部</td>
              <td class="align-middle text-right">$520</td>
            </tr>
            <tr>
              <td class="align-middle text-center">
                <a
                  href="#removeModal"
                  class="text-muted"
                  data-toggle="modal"
                  data-target="#removeModal"
                  data-title="刪除 魔物獵人 1"
                  data-backdrop="static"
                >
                  <i class="far fa-trash-alt" aria-hidden="true"></i>
                </a>
              </td>
              <td class="align-middle">魔物獵人</td>
              <td class="align-middle">1部</td>
              <td class="align-middle text-right">$300</td>
            </tr>
          </tbody>
        </table>
        <router-link to="/payment" class="btn btn-outline-secondary btn-block">
          <i class="fas fa-shopping-cart fa-lg"></i> 結帳去
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
  .cartTable {
    z-index: 3;
  }
  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
}

// 購物車 table
.dropdownMenu {
  min-width: 300px;
  // 強制顯示左邊
  position: fixed;
  z-index: 3;
  right: 0;
  left: auto;
}
</style>
