<template>
  <div class="profile">
    <div class="banner" v-if="doctor">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 text-center d-block d-lg-none pt-4">
            <div class="image-box rounded-circle">
              <img src="../../assets/doctors/doctor.jpg" class="img-fluid rounded-circle" />
            </div>
          </div>
          <div class="col-12 col-lg-6 text-center text-lg-left content-column">
            <h2 class="text-capitalize">{{doctor.fullname}}</h2>
            <h5>MBBS, FCPS (UK)</h5>
            <h6 class="text-capitalize">medicine specialist</h6>
            <h6>
              <i class="fas fa-phone mr-2 text-muted"></i>{{doctor.phone}}
            </h6>
          </div>
          <div class="col-12 col-lg-6 text-center d-none d-lg-block">
            <div class="image-box rounded-circle">
              <img src="../../assets/doctors/doctor.jpg" class="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="custom-tab px-lg-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 px-0">
            <div class="d-sm-flex justify-content-center">
              <div>
                <router-link
                  to="/doctor/dashboard"
                  class="btn rounded-0 shadow-none border-left border-right"
                >Dashboard</router-link>
              </div>
              <div>
                <router-link
                  to="/doctor/consultation"
                  class="btn rounded-0 shadow-none border-right"
                >Consulnt requests</router-link>
              </div>
              <div>
                <router-link
                  to="/doctor/patients"
                  class="btn rounded-0 shadow-none border-right"
                >Patients</router-link>
              </div>
              <div>
                <router-link
                  to="/doctor/edit"
                  class="btn rounded-0 shadow-none border-right"
                >Profile</router-link>
              </div>
              <div>
                <a v-on:click="logout" class="btn rounded-0 shadow-none border-right">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "private-profile",
  data() {
    return {
      doctor: "",
      doctorId: localStorage.getItem("id")
    };
  },
  mounted() {
    this.$axios
      .get(`${this.$doctor_api}logged-doctor/` + this.doctorId)
      .then(res => {
        this.doctor = res.data.doctor;
      });
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style lang="scss" scoped>
.profile {
  .banner {
    width: 100%;
    min-height: 250px;
    background: #e0e4e7;
    .content-column {
      h2,
      h5,
      h6 {
        font-weight: 200;
        font-family: "Source Sans Pro", sans-serif;
      }
    }
    .image-box {
      width: 100%;
      text-align: center;
      overflow: hidden;
      img {
        width: 160px;
        height: 160px;
      }
    }
  }

  .custom-tab {
    border-bottom: 1px solid #dfdfdf;
    .btn {
      font-size: 16px;
      color: #000;
      font-weight: 200;
      padding: 5px 15px;
      transition: 0.3s;
      font-family: "Source Sans Pro", sans-serif;
    }
    .btn:hover {
      background: hsla(0, 0%, 87.5%, 0.31);
    }
    .router-link-exact-active {
      background: hsla(0, 0%, 87.5%, 0.31);
    }
  }
}

@media (max-width: 576px) {
  .custom-tab {
    .btn {
      width: 50%;
      float: left;
      border: 1px solid #dfdfdf;
    }
  }
}
@media (max-width: 992px) {
  .profile {
    margin-top: 41px;
    .content-column {
      width: 100%;
      padding-top: 35px;
      padding-bottom: 65px;
    }
    .image-box {
      margin-top: 45px;
    }
    .router {
      padding-top: 40px;
    }
  }
}
@media (min-width: 992px) {
  .profile {
    .content-column {
      width: 100%;
      padding-top: 70px;
      padding-bottom: 70px;
    }
    .image-box {
      margin-top: 50px;
    }
    .router {
      padding-top: 80px;
      padding-bottom: 50px;
    }
  }
}
</style>