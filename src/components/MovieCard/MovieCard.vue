<template>
  <div>
    <div class="col-md-6 mb-4 col-lg-4" v-for="(item, key) in info" :key="key">
      <div class="card h-100 border-0 bg-dark text-light cardTitle">
        <div class="type">{{ item.product_type }}</div>
        <router-link
          :to="{
            name: 'MovieInfo',
            params: {
              id: item.product_id,
              img: item.image_url,
              name: item.product_name,
              type: item.product_type,
              description: item.description,
              price: item.price,
              score: item.movie_score,
              time: item.movie_runtime,
            },
          }"
          class="thumbnail"
          ><img :src="item.image_url" class="card-img-top" alt="..."
        /></router-link>

        <div
          class="card-body d-flex justify-content-between align-items-center"
        >
          <h4 class="m-0">{{ item.product_name }}</h4>
        </div>
        <div class="px-2 d-flex flex-column border-white">
          <button class="btn btn-outline-light btn-sm mb-2">
            加入我的最愛
          </button>
          <button class="btn btn-outline-light btn-sm mb-2">我要租借</button>
          <button class="btn btn-outline-danger btn-sm mb-2">
            <i class="fas fa-spinner fa-spin" v-if="status.addLoading"></i>
            我要購買
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {
      info: [],
    }
  },
  props: ['info'],
}
</script>

<style></style>
