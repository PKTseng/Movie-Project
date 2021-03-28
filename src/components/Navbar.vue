<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-0">
      <div class="container">
        <router-link to="/Home">
          <img src="@/assets/logo1.png" alt="" class="logo" />
        </router-link>
        <!-- <a class="navbar-brand" href="./index.html"></a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto menuList">
            <li class="nav-item active">
              <router-link class="nav-link navListLink" to="/Home">
                <span class="itemLink"><i class="fas fa-home"></i></span>
                <span class="ml-1 itemLink">首頁</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link navListLink" to="/favorite">
                <span><i class="far fa-heart"></i></span>
                <span class="ml-1">我的最愛</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      message: 'Hello World',
    }
  },
}
</script>

<style scoped lang="scss">
/*  首頁 logo */
.logo {
  height: 70px;
}

.navbar {
  z-index: 4;
}

.menuList {
  font-size: 20px;
  font-weight: 600;
  .navListLink {
    padding: 30px;
    transition: 0.4s;
    &:hover {
      background: #c6c8ca;
      span {
        color: #000;
      }
    }
  }
  @media (max-width: 768px) {
    .navListLink {
      padding: 15px;
    }
  }
}
</style>
