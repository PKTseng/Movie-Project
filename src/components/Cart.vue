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

    <!-- Modal -->
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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
</style>
