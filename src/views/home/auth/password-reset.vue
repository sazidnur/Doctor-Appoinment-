<template>
  <div class="reset">
    <div class="flex-center flex-column">
      <div class="card border-0">
        <div class="card-header text-center">
          <h5 class="mb-0">Forgotten password ?</h5>
        </div>
        <div class="card-body py-5 px-lg-4">
          <div class="text-center">
            <p
              class="text-muted"
            >Just enter your registered email address, we will send new password in your email.</p>
          </div>
          <form @submit.prevent="doReset">
            <div class="form-group mb-4">
              <small class="text-muted" v-if="label.emailLabel">Email</small>
              <small class="text-danger" v-if="errors.email_err">{{errors.email_err}}</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Your e-mail"
                v-model="resetData.email"
              />
            </div>

            <button type="submit" class="btn btn-block shadow-none">Reset Password</button>
          </form>

          <div class="text-center pt-4 links">
            <div>
              <router-link to="/login">Login now</router-link>
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
      resetData: {
        email: ""
      },
      errors: {
        email_err: ""
      },
      label: {
        emailLabel: true
      }
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    doReset() {
      if (!this.resetData.email) {
        this.label.emailLabel = false;
        this.errors.email_err = "E-mail is required*";
      } else if (this.resetData.email.indexOf("@gmail.com") < 0) {
        this.label.email = false;
        this.errors.email_err = "E-mail address isn't valid*";
      } else {
        this.errors = false;
        this.label = true;
        console.log(this.logData);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.reset {
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
  .reset {
    .custom-content {
      width: 90vw;
    }
    .card {
      width: 90vw;
    }
  }
}
@media (min-width: 576px) {
  .reset {
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