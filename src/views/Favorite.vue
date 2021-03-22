<template>
  <div>
    <Header></Header>
    <section class="container mt-5">
      <h1 class="text-white">收藏清單</h1>
      <div class="row">
        <!--  第1張 魔物獵人 冒險類-->
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 border-0 bg-dark text-light cardTitle">
            <div class="type">冒險</div>
            <div class="thumbnail">
              <img
                src="@/assets/movies/movie1.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <h4 class="m-0">魔物獵人</h4>
              <button class="btn btn-sm">
                <i class="fa-heart fa-lg text-white far"></i>
              </button>
            </div>
            <div class="card-footer d-flex justify-content-around border-white">
              <a href="#" class="btn btn-outline-light btn-sm">查看更多</a>
              <a href="#" class="btn btn-outline-danger btn-sm">加入購物車</a>
            </div>
          </div>
        </div>
        <!--  第2張 白頭山：半島浩劫 冒險類-->
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 border-0 bg-dark text-light cardTitle">
            <div class="type">冒險</div>
            <div class="thumbnail">
              <img
                src="@/assets/movies/movie2.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <h4 class="m-0">白頭山：半島浩劫</h4>
              <button class="btn btn-sm">
                <i class="fa-heart fa-lg text-white far"></i>
              </button>
            </div>
            <div class="card-footer d-flex justify-content-around border-white">
              <a href="#" class="btn btn-outline-light btn-sm">查看更多</a>
              <a href="#" class="btn btn-outline-danger btn-sm">加入購物車</a>
            </div>
          </div>
        </div>
        <!--  第1張 魔物獵人 劇情類-->
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 border-0 bg-dark text-light cardTitle">
            <div class="type">劇情</div>
            <div class="thumbnail">
              <img
                src="@/assets/movies/movie3.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <h4 class="m-0">異種獵殺</h4>
              <button class="btn btn-sm">
                <i class="fa-heart fa-lg text-white far"></i>
              </button>
            </div>
            <div class="card-footer d-flex justify-content-around border-white">
              <a href="#" class="btn btn-outline-light btn-sm">查看更多</a>
              <a href="#" class="btn btn-outline-danger btn-sm">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Navbar'
export default {
  name: 'Favorite',
  components: {
    Header,
  },
}
</script>

<style scoped lang="scss">
// 卡片
.cardTitle {
  position: relative;
  overflow: hidden;
  border: 0;
  .thumbnail {
    overflow: hidden;
    img {
      transform: scale(1, 1);
      transition: 0.5s;
    }
    img:hover {
      transform: scale(1.1, 1.1);
    }
  }
}

// 卡片標籤
.type {
  z-index: 1;
  font-weight: 700;
  padding: 5px;
  width: 120px;
  left: -30px;
  top: 10px;
  text-align: center;
  position: absolute;
  background: #ee5a24;
  transform: rotate(-45deg);
  font-size: 18px;
}
</style>
