<template>
  <div>
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
            <tbody>
              <tr></tr>
              <tr>
                <td class="d-flex align-items-center">
                  <div class="priceMovie">
                    <img src="./images/movie1.jpg" alt="" />
                  </div>
                  <div class="flex-column px-3">
                    <h5>魔物獵人</h5>
                    <span class="badge badge-warning">冒險</span>
                  </div>
                </td>
                <td class="align-middle">1/部</td>
                <td class="align-middle text-right">$ 200</td>
                <td class="align-middle text-right">
                  <button class="btn btn-outline-danger btn-sm">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="d-flex align-items-center">
                  <div class="priceMovie">
                    <img src="./images/movie2.jpg" alt="" />
                  </div>
                  <div class="flex-column px-3">
                    <h5>白頭山：半島浩劫</h5>
                    <span class="badge badge-warning">冒險</span>
                  </div>
                </td>
                <td class="align-middle">1/部</td>
                <td class="align-middle text-right">$ 300</td>
                <td class="align-middle text-right">
                  <button class="btn btn-outline-danger btn-sm">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="align-middle text-right">總價</td>
                <td class="align-middle text-right">$1000</td>
                <td></td>
              </tr>
            </tbody>
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
              <button class="btn btn-outline-danger">送出訂單</button>
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
  components: {
    Navbar,
    Footer,
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
</style>
