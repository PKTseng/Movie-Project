<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-0">
      <div class="container">
        <router-link to="/Home">
          <img src="@/assets/logo.png" alt="" class="logo" />
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
              <a class="nav-link navListLink" href="./index.html">
                <span class="itemLink"><i class="fas fa-home"></i></span>
                <span class="ml-1 itemLink">首頁</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navListLink" href="./favorite.html">
                <span><i class="far fa-heart"></i></span>
                <span class="ml-1"> 我的最愛</span>
              </a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link navListLink" href="#">
                <span><i class="fas fa-user-circle"></i></span>
                <span class="ml-1">登入</span>
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style scoped>
/*  首頁 logo */
.logo {
  height: 70px;
}

.navbar {
  z-index: 4;
}
</style>
