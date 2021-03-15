<template>
  <div>
    <form class="form-signin" @submit.prevent="signIn">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.username"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-outline-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signIn() {
      // 練習打登入的 API
      // const api = `${process.env.APIPATH}/signin`;
      // const api = "https://vue-course-api.hexschool.io/signin";
      const api = `http://localhost:3000/api/v1/login`;

      // console.log(process.env.THEO);
      Vue.axios.post(api, this.user).then(response => {
        console.log(response.data);
      });
      // Vue.axios.post(api, this.user).then(response => {
      //   console.log(response.data);
      //   if (response.data.success) {
      //     this.$router.push("/Home"); //暫時導入到首頁，日後要改
      //   }
      // });
    }
  }
};
</script>

<style scoped lang="scss">
html,
body {
  height: 100vh;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #000;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
