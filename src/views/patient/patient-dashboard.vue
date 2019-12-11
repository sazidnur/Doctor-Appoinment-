<template>
  <div class="dashboard">
    <div class="banner" v-if="patient">
      <img src="../../assets/patients/patient_banner_bg.jpg" class="img-fluid" />
      <div class="profile-card">
        <div class="card rounded-0 border-0 shadow">
          <div class="custom-profile-img pb-3">
            <img src="../../assets/patients/sazid.jpg" class="img-fluid rounded-circle" />
          </div>
          <div class="card-body text-center">
            <h2 class="text-capitalize mb-3">{{patient.fullname}}</h2>
            <p class="mb-0">Running week 4</p>
            <p>
              Expected delivery date:
              <span class="text-success font-weight-bold">02 Aug 2020</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="custom-break"></div>

    <div class="container mt-3">
      <div class="row">
        <div class="col-12 px-0">
          <div class="card rounded-0 text-center custom-tab border-0">
            <div class="custom-felx-center">
              <router-link
                to="/patient/primary-treatment"
                type="button"
                class="btn rounded-0 shadow-none"
              >Dashboard</router-link>

              <router-link
                to="/patient/prescription"
                type="button"
                class="btn rounded-0 shadow-none"
              >Prescription</router-link>

              <router-link
                to="/patient/risk"
                type="button"
                class="btn rounded-0 shadow-none"
              >Risk analysis</router-link>

              <router-link to="/doctors" type="button" class="btn rounded-0 shadow-none">Consult</router-link>

              <router-link
                to="/patient/notification"
                type="button"
                class="btn rounded-0 shadow-none"
              >Notifications</router-link>

              <router-link
                to="/patient/report-submit"
                type="button"
                class="btn rounded-0 shadow-none"
              >Report submit</router-link>

              <router-link
                to="/patient/profile"
                type="button"
                class="btn rounded-0 shadow-none"
              >Edit Profile</router-link>
              <a v-on:click="logout" class="btn rounded-0 shadow-none">Logout</a>
            </div>

            <div class="card-body pl-lg-1 pr-lg-0 text-left">
              <div class="pt-3 pt-lg-5">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "patient-dashboard",
  data() {
    return {
      patient: "",
      patientId: localStorage.getItem("id")
    };
  },
  mounted() {
    this.$axios
      .get(`${this.$patient_api}logged-patient/` + this.patientId)
      .then(res => {
        this.patient = res.data.patient;
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
.dashboard {
  .banner {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .profile-card {
      position: absolute;
      left: 0;
      width: 100%;
      .card {
        min-height: 250px;
        .custom-profile-img {
          position: absolute;
          top: -65px;
          left: 0;
          width: 100%;
          text-align: center;
          img {
            width: 150px;
            height: 150px;
            margin: auto;
          }
        }
        .card-body {
          margin-top: 85px;
          h2 {
            font-weight: 900;
            font-family: "Source Sans Pro", sans-serif;
          }
        }
      }
    }
  }
  .container {
    margin-bottom: 70px;
    .custom-tab {
      .btn {
        border: 0;
        font-size: 18px;
        font-weight: 200;
        color: #ffffff;
        background: #0050ff;
        transition: 0.3s;
        font-family: "Source Sans Pro", sans-serif;
      }
      .router-link-exact-active {
        border: 0;
        opacity: 0.4;
        background: #0050ff;
      }
    }
  }
}

@media (max-width: 576px) {
  .dashboard {
    .banner {
      height: 200px;
      .profile-card {
        top: 100px;
        .card {
          width: 90vw;
          margin: auto;
        }
      }
    }
    .custom-break {
      height: 175px;
    }
  }
}
@media (min-width: 576px) {
  .dashboard {
    .banner {
      height: 300px;
      .profile-card {
        top: 150px;
        .card {
          width: 500px;
          margin: auto;
        }
      }
    }
    .custom-break {
      height: 130px;
    }
  }
}

@media (max-width: 992px) {
  .dashboard {
    margin-top: 41px;
    .container {
      .custom-tab {
        text-align: center;
        .btn {
          margin-bottom: 5px;
          width: 250px;
          margin-left: 5px;
        }
      }
    }
  }
}
@media (min-width: 992px) {
  .dashboard {
    .banner {
      height: 350px;
    }
    .custom-break {
      height: 75px;
    }
    .container {
      .custom-tab {
        .custom-felx-center {
          justify-content: center !important;
          display: flex !important;
          .btn {
            width: 250px;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>