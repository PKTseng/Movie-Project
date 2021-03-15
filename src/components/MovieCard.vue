<template>
  <div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100 border-0 bg-dark text-light cardTitle">
        <div class="type">{{ movieType }}</div>
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
          <h4 class="m-0">{{ movieTitle }}</h4>
          <button class="btn btn-sm">
            <i class="fa-heart fa-lg text-white far"></i>
          </button>
        </div>
        <div class="card-footer d-flex justify-content-around border-white">
          <router-link to="/Home" class="btn btn-outline-light"
            >查看更多</router-link
          >
          <router-link to="/Home" class="btn btn-outline-danger"
            >加入購物車</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  data() {
    return {
      movieType: "冒險",
      movieTitle: "魔物獵人"
    };
  }
};
</script>

<style scoped lang="scss">
// 卡片
.cardTitle {
  position: relative;
  overflow: hidden;
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
