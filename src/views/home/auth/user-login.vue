<template>
  <div class="login">
    <div class="flex-center flex-column">
      <div class="card border-0">
        <div class="card-header text-center">
          <h5 class="mb-0">Login</h5>
        </div>
        <div class="card-body py-5 px-lg-4">
          <form @submit.prevent="doLogin">
            <div class="form-group mb-4">
              <small class="text-muted" v-if="label.userNameLabel">Username*</small>
              <small class="text-danger" v-if="errors.userName_err">{{errors.userName_err}}</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Username"
                v-model="logData.username"
              />
            </div>
            <div class="form-group mb-4">
              <small class="text-muted" v-if="label.passwordLabel">Password*</small>
              <small class="text-danger" v-if="errors.password_err">{{errors.password_err}}</small>
              <input
                type="password"
                class="form-control shadow-none"
                placeholder="******"
                v-model="logData.password"
              />
            </div>

            <div class="form-group mb-4">
              <small class="text-muted">Who are you?</small>
              <select class="form-control shadow-none" v-model="logData.userType">
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            <button type="submit" class="btn btn-block shadow-none">Login</button>
          </form>

          <div class="text-center pt-4 links">
            <div>
              <router-link to="/registration">Have no account?</router-link>
            </div>
            <div>
              <router-link to="/reset">Forgotten password?</router-link>
            </div>
          </div>
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
      logData: {
        username: "",
        password: "",
        userType: "patient"
      },
      errors: {
        userName_err: "",
        password_err: ""
      },
      label: {
        userNameLabel: true,
        passwordLabel: true
      }
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    doLogin() {
      if (!this.logData.username) {
        this.label.userNameLabel = false;
        this.errors.userName_err = "Username is required*";
      } else if (!this.logData.password) {
        this.label.passwordLabel = false;
        this.errors.password_err = "Password is required*";
      } else {
        this.errors = false;
        this.label = true;
        this.$axios.post(`${this.$login_api}login`, this.logData).then(res => {
          if (res.status == 204) {
            this.$fire({
              title: "Failed",
              text: "Username or Password incorrect !!",
              type: "warning",
              timer: 3000
            });
          }
          if (res.status == 200) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("type", res.data.type);
            if (res.data.type == "doctor") {
              this.$router.push({ path: "/doctor" });
            }
            if (res.data.type == "patient") {
              this.$router.push({ path: "/patient" });
            }
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background: #f5f5f5;
  padding-top: 80px;
  padding-bottom: 80px;
  .card {
    .card-header {
      padding-top: 30px;
      padding-bottom: 30px;
      background: none;
      border-bottom: 2px solid #dfdfdf;
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
      .links {
        a {
          font-size: 16px;
          font-weight: 400;
          color: #2bae66;
          font-family: "Source Sans Pro", sans-serif;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .login {
    .custom-content {
      width: 90vw;
    }
    .card {
      width: 90vw;
    }
  }
}
@media (min-width: 576px) {
  .login {
    .custom-content {
      width: 450px;
    }
    .card {
      width: 450px;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    }
  }
}
</style>