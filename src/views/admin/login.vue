<template>
  <div class="login">
    <div class="flex-center flex-column">
      <div class="card border-0">
        <div class="card-header text-center">
          <router-link to="/home">
            <img src="../../assets/static/logo.png" class="img-fluid mb-3" />
          </router-link>
          <h5>Admin</h5>
        </div>
        <div class="card-body px-0 px-lg-3">
          <form @submit.prevent="doLogin">
            <div class="form-group mb-4">
              <small class="text-danger" v-if="errors.email_err">{{errors.email_err}}</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="E-mail"
                v-model="loginData.email"
              />
            </div>
            <div class="form-group">
              <small class="text-danger" v-if="errors.password_err">{{errors.password_err}}</small>
              <input
                type="password"
                class="form-control shadow-none"
                placeholder="Password"
                v-model="loginData.password"
              />
            </div>
            <button type="submit" class="btn btn-block shadow-none">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      },
      errors: {
        email_err: "",
        password_err: ""
      }
    };
  },
  methods: {
    doLogin() {
      if (!this.loginData.email) {
        this.errors.email_err = "E-mail is required*";
      } else if (this.loginData.email.indexOf("@gmail.com") < 0) {
        this.errors.email_err = "E-mail isn't valid*";
      } else if (!this.loginData.password) {
        this.errors.password_err = "Password is required*";
      } else {
        this.errors = false;
        this.$axios
          .post(`${this.$admin_api}login`, this.loginData)
          .then(res => {
            if (res.status === 200) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("id", res.data.id);
              this.$router.push({ path: "/menu" });
            }
            if (res.status === 204) {
              this.$fire({
                title: "Login Failed",
                text: "E-mail or password incorrect !!",
                type: "warning",
                timer: 3000
              });
            }
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  .card {
    .card-header {
      background: none;
      border: 0;
      img {
        height: 40px;
      }
      h5 {
        font-weight: 600;
        color: #555;
        font-size: 20px;
        font-family: "Source Sans Pro", sans-serif;
      }
    }
    .card-body {
      form {
        font-family: "Source Sans Pro", sans-serif;
        small {
          font-weight: 200;
          font-size: 15px;
        }
        .form-control {
          font-weight: 200;
          border-radius: 3px;
        }
        .form-control:focus {
          border: 1px solid #2bae66;
        }
        .btn {
          color: #ffffff;
          background: #2bae66;
          border-radius: 3px;
          font-weight: 600;
          letter-spacing: 0;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .login {
    .card {
      width: 90vw;
    }
  }
}
@media (min-width: 576px) {
  .login {
    .card {
      width: 450px;
    }
  }
}
</style>