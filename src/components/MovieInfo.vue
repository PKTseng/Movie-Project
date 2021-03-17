<template>
  <div>
    <Navbar />
    <section class="container mt-5 h-100">
      <div class="row text-white">
        <div class="col-md-5 movie movie1"></div>
        <div class="col-md-5 d-flex flex-column justify-content-lg-between">
          <div class="movieInfo">
            <h2>魔物獵人</h2>
            <h5 class="d-flex align-items-center">
              類型:
              <span class="badge badge-success mx-1 p-2"></span>
            </h5>
            <p>
              本片根據CAPCOM熱門電玩遊戲改編，劇情描述在人類居住的世界背後，有個充滿危險強大的魔物世界，娜塔莉阿特彌斯中尉(蜜拉喬娃維琪
              飾演)與由她帶領的菁英部隊進入了這個神秘時空，在這個超能怪物群居的新世界，將面臨著全團滅亡的生存之際。娜塔莉一行人在尋求返家之路時，她們遇到了一名能在這蠻荒之地生存的神秘獵人(東尼嘉
              飾演)。面對蜂擁而至的凶狠且恐怖的魔物攻擊，娜塔莉和勇士們準備一一擊退並找到能順利回家的路…
            </p>
          </div>
          <!-- 價格 -->
          <div>
            <div class="d-flex flex-column align-items-end">
              <del class="text-white"><h5>售價 NT$500</h5></del>
              <div class="h3 m-0 ml-auto text-danger">
                <span>特價 NT$</span>
                <strong>300</strong>
              </div>
            </div>
            <div
              class="d-flex justify-content-end align-items-end mt-3 btn-group"
            >
              <button class="btn btn-outline-light">
                <i class="far fa-heart"></i>
                <span class="px-1 mobile">加到我的最愛</span>
              </button>
              <button class="btn btn-outline-light">
                <i class="fas fa-cart-arrow-down"></i>
                <span class="px-1 mobile">加入購物車</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'MovieInfo',
  props: ['productChild'],
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style></style>
