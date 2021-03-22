<template>
  <div>
    <footer class="footer py-3 text-muted mt-4">
      <div class="container"></div>
      <ul class="list-inline d-flex justify-content-center align-items-center">
        <li class="list-inline-item">
          © Copyright 2021 平價電影出租純屬練習作品，無任何商業用途
        </li>
      </ul>
      <div class="text-center">
        此作品的版型參考自 :
        <a
          href="https://gx7879.github.io/vue-dashboard-demo/dist/#/"
          target="_blank"
          >週末電影院</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
// footer
.footer {
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  font-size: 20px;
  background: #1e1e1e;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 50px;
  }
}
</style>
