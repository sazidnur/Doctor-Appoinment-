<template>
  <div class="registration">
    <div class="flex-center flex-column">
      <div class="card border-0">
        <div class="card-header text-center">
          <h5 class="mb-0">Registration</h5>
        </div>
        <div class="card-body py-5 px-lg-4">
          <form @submit.prevent="doRegistration">
            <div class="form-group mb-4">
              <small class="text-muted" v-if="label.fullNameLabel">Full name*</small>
              <small class="text-danger" v-if="errors.fullName_err">{{errors.fullName_err}}</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Your name"
                v-model="regData.fullName"
              />
            </div>
            <div class="form-group mb-4">
              <small class="text-muted" v-if="label.userNameLabel">Username*</small>
              <small class="text-danger" v-if="errors.userName_err">{{errors.userName_err}}</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Username"
                v-model="regData.username"
              />
            </div>
            <div class="form-group mb-4">
              <small class="text-muted" v-if="label.passwordLabel">Password*</small>
              <small class="text-danger" v-if="errors.password_err">{{errors.password_err}}</small>
              <input
                type="password"
                class="form-control shadow-none"
                placeholder="******"
                v-model="regData.password"
              />
            </div>
            <div class="form-group mb-4">
              <small class="text-muted" v-if="label.phoneLabel">Phone*</small>
              <small class="text-danger" v-if="errors.phone_err">{{errors.phone_err}}</small>
              <input
                type="number"
                class="form-control shadow-none"
                placeholder="01xxxxxxxxx"
                v-model="regData.phone"
              />
            </div>
            <div class="form-group mb-4">
              <small class="text-muted">Email</small>
              <input
                type="email"
                class="form-control shadow-none"
                placeholder="E-mail address"
                v-model="regData.email"
              />
            </div>
            <div class="form-group mb-4">
              <small class="text-muted">Address</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Current address"
                v-model="regData.address"
              />
            </div>
            <div class="form-group mb-4">
              <small class="text-muted">Who are you?</small>
              <select class="form-control shadow-none" v-model="regData.userType">
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            <button type="submit" class="btn btn-block shadow-none">Create Account</button>
          </form>

          <div class="text-center pt-4 links">
            <div>
              <router-link to="/login">Already have an account?</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-registration",
  data() {
    return {
      regData: {
        fullName: "",
        username: "",
        password: "",
        phone: "",
        email: "",
        address: "",
        userType: "patient"
      },
      errors: {
        fullName_err: "",
        userName_err: "",
        phone_err: "",
        password_err: "",
        email_err: ""
      },
      label: {
        fullNameLabel: true,
        userNameLabel: true,
        phoneLabel: true,
        passwordLabel: true,
        emailLabel: true
      }
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    doRegistration() {
      if (!this.regData.fullName) {
        this.label.fullNameLabel = false;
        this.errors.fullName_err = "Full name is required*";
      } else if (!this.regData.username) {
        this.label.userNameLabel = false;
        this.errors.userName_err = "Username is required*";
      } else if (!this.regData.password) {
        this.label.passwordLabel = false;
        this.errors.password_err = "Password is required*";
      } else if (this.regData.password.length < 6) {
        this.label.passwordLabel = false;
        this.errors.password_err = "Minimum length is 6 character*";
      } else if (!this.regData.phone) {
        this.label.phoneLabel = false;
        this.errors.phone_err = "Phone number is required*";
      } else if (this.regData.phone.length < 11) {
        this.label.phoneLabel = false;
        this.errors.phone_err = "Phone number isn't valid*";
      } else if (this.regData.phone.length > 11) {
        this.label.phoneLabel = false;
        this.errors.phone_err = "Phone number isn't valid*";
      } else {
        this.errors = false;
        this.label = true;
        console.log(this.regData);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.registration {
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
  .registration {
    .custom-content {
      width: 90vw;
    }
    .card {
      width: 90vw;
    }
  }
}
@media (min-width: 576px) {
  .registration {
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