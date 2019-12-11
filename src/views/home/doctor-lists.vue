<template>
  <div class="doctors">
    <div class="banner">
      <img src="../../assets/static/doctors.jpg" class="img-fluid" />
      <div class="custom-overlay">
        <div class="flex-center flex-column">
          <div class="card border-0 rounded-0">
            <form>
              <div class="d-flex">
                <div class="w-100">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    placeholder="Find specialist"
                  />
                </div>
                <div class="flex-shrink-1">
                  <button type="submit" class="btn btn warning rounded-0 shadow-none px-3">Find</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container doctors-list">
      <div class="row">
        <div class="col-12 py-2 title-column">
          <div class="card">
            <div class="card-body px-3 py-2">
              <h5 class="mb-0">
                <i class="fas fa-caret-right mr-2 text-success"></i>Doctors
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="row pt-2 pb-4 px-lg-3">
        <div
          class="col-12 col-lg-6 doctors-column px-lg-0"
          v-for="(doctor, i) in doctors"
          :key="i"
          v-on:click="showDoctorProfile(doctor)"
        >
          <div class="d-flex border py-3">
            <div class="pr-2">
              <img src="../../assets/static/no-image.png" class="img-flud rounded-circle" />
            </div>
            <div class="pl-2">
              <h6 class="mb-0 text-capitalize">{{doctor.fullname}}</h6>
              <p class="mb-0">MBBS, FCPS</p>
              <p class="mb-0 text-capitalize">Medicine</p>
            </div>
          </div>
          <i class="far fa-eye"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mb-4 text-center">
          <button type="button" class="btn shadow-none border px-4 load-btn">See More Doctors</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "doctor-list",
  data() {
    return {
      doctors: []
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$axios.get(`${this.$patient_api}all-doctor`).then(res => {
      this.doctors = res.data.doctors;
    });
  },
  methods: {
    showDoctorProfile(doctor) {
      this.$router.push({ path: "/doctor-profile/" + doctor._id });
    }
  }
};
</script>
<style lang="scss" scoped>
.doctors {
  .banner {
    width: 100%;
    height: 200px;
    text-align: center;
    position: relative;
    img {
      margin: auto;
      height: 200px;
    }
    .custom-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff65;
      .card {
        form {
          .form-control {
            border: 0;
            border-radius: 0;
            font-weight: 200;
            color: #000;
            font-family: "Source Sans Pro", sans-serif;
          }
          .form-control:focus {
            box-shadow: none;
          }
          .btn {
            font-weight: 400;
            color: #ffffff;
            background: #28a745;
            font-family: "Source Sans Pro", sans-serif;
          }
        }
      }
    }
  }

  // Doctor lists
  .doctors-list {
    .title-column {
      .card {
        border-radius: 3px;
        h5 {
          color: #555;
          font-weight: 600;
          font-family: "Source Sans Pro", sans-serif;
        }
      }
    }
    .doctors-column {
      height: 93px;
      transition: 0.3s;
      position: relative;
      cursor: pointer;
      .d-flex {
        padding-left: 15px;
        img {
          width: 40px;
          height: 40px;
          margin-top: 10px;
        }
        h6 {
          font-size: 16px;
        }
        p {
          font-size: 15px;
          font-weight: 200;
          line-height: 20px;
          font-family: "Source Sans Pro", sans-serif;
        }
      }
      i {
        position: absolute;
        top: 35px;
        right: 15px;
        font-size: 20px;
        color: rgba(85, 85, 85, 0.452);
        display: none;
      }
    }
    .doctors-column:hover {
      background: #dfdfdf6b;
    }
    .doctors-column:hover i {
      display: block;
    }
    .load-btn {
      font-weight: 400;
      font-size: 16px;
      border-radius: 4px;
      transition: 0.3s;
      font-family: "Source Sans Pro", sans-serif;
    }
    .load-btn:hover {
      color: #ffffff;
      background: #28a745;
      border-radius: 4px;
      border: 1px solid #28a745;
    }
  }
}

@media (max-width: 576px) {
  .doctors {
    .banner {
      height: 150px;
      overflow: hidden;
      .custom-overlay {
        .card {
          margin-top: 80px;
          width: 85%;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .doctors {
    .banner {
      .custom-overlay {
        .card {
          width: 500px;
          margin-top: 70px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .doctors {
    .banner {
      margin-top: 41px;
    }
  }
}
</style>