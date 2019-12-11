<template>
  <div class="profile">
    <div class="banner">
      <div class="container" v-if="doctor">
        <div class="row">
          <div class="col-12 col-lg-6 text-center d-block d-lg-none pt-4">
            <div class="image-box rounded-circle">
              <img src="../../assets/static/doctor.png" class="img-fluid rounded-circle" />
            </div>
          </div>
          <div class="col-12 col-lg-6 text-center text-lg-left content-column">
            <h2 class="text-capitalize">{{doctor.fullname}}</h2>
            <h5>MBBS, FCPS (UK)</h5>
            <h6 class="text-capitalize">medicine specialist</h6>
            <h6>
              <i class="fas fa-phone mr-2 text-muted"></i>{{doctor.phone}}
            </h6>
            <button
              type="button"
              class="btn rounded-0 shadow-none"
              v-on:click="goConsultant"
            >Consulnt</button>
          </div>
          <div class="col-12 col-lg-6 text-center d-none d-lg-block">
            <div class="image-box rounded-circle">
              <img src="../../assets/static/doctor.png" class="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="information">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3 mb-4 mb-lg-0">
            <h1>
              <span class="border-bottom">About Me</span>
            </h1>
          </div>
          <div class="col-12 col-lg-5 mb-4 mb-lg-0 content">
            <p>
              A leading expert in hematology-oncology, Dr. Thomas Martin is associate director of UCSF's myeloma program and director of the unrelated donor transplantation programs for adults at UCSF Medical Center.
              <br />
              <br />Martin is clinical research director of hematologic malignancies (blood cancers) at the UCSF Helen Diller Family Comprehensive Cancer Center. His research interests include developing treatments for myeloma and leukemia as well as expanding the use of bone marrow transplants. He has a special interest in umbilical cord blood transplants, and he is involved in efforts to improve outcomes for patients who have transplants from unrelated donors.
              <br />
              <br />Martin earned an undergraduate degree at Cornell University and his medical degree at the University of Connecticut School of Medicine. After a medical residency at Harbor-UCLA Medical Center, he completed a fellowship in hematology-oncology at UCSF. In 1999, he joined MD Anderson Cancer Center as an assistant professor of medicine. In 2001, he returned to UCSF.
            </p>
          </div>
          <div class="col-12 col-lg-4 mb-4 mb-lg-0 pl-lg-5 education">
            <div class="package">
              <i class="fas fa-graduation-cap"></i>
              <p>Education</p>
              <h5>University of Connecticut, School of Medicine, 1989</h5>
            </div>
            <div class="package">
              <i class="fas fa-city"></i>
              <p>Residencies</p>
              <h5>University of Connecticut, School of Medicine, 1989</h5>
            </div>
            <div class="package">
              <i class="fas fa-stethoscope"></i>
              <p>Fellowships</p>
              <h5>University of Connecticut, School of Medicine, 1989</h5>
            </div>
            <div class="package">
              <i class="fas fa-book-reader"></i>
              <p>Academic Title</p>
              <h5>University of Connecticut, School of Medicine, 1989</h5>
            </div>
            <div class="package">
              <i class="fas fa-globe-europe"></i>
              <p>Languages</p>
              <h5>University of Connecticut, School of Medicine, 1989</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "public-profile",
  data() {
    return {
      doctorId: this.$route.params.id,
      doctor: ""
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$axios.get(`${this.$patient_api}single-doctor/` + this.doctorId).then(res => {
      this.doctor = res.data.doctor;
    });
  },
  methods: {
    goConsultant() {
      this.$router.push({ path: "/report/" + this.doctorId });
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
      .btn {
        text-transform: uppercase;
        font-weight: 200;
        font-size: 20px;
        color: #ffffff;
        background: #0050ff;
        margin-top: 15px;
        padding: 8px 35px;
        font-family: "Source Sans Pro", sans-serif;
        transition: 0.3s;
      }
      .btn:hover {
        background: #0547d6;
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

  .information {
    h1 {
      font-weight: 200;
      font-family: "Source Sans Pro", sans-serif;
    }
    .content {
      p {
        font-weight: 200;
        font-size: 20px;
        line-height: 1.8rem;
        font-family: "Source Sans Pro", sans-serif;
      }
    }
  }

  .education {
    .package {
      margin-bottom: 45px;
      i {
        font-size: 20px;
        color: #2bae66;
        margin-bottom: 10px;
      }
      p {
        font-weight: 600;
        color: #000;
        font-size: 13px;
        margin-bottom: 5px;
        letter-spacing: 1.3px;
        text-transform: uppercase;
        font-family: "Source Sans Pro", sans-serif;
      }
      h5 {
        font-weight: 200;
        font-family: "Source Sans Pro", sans-serif;
      }
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

    .information {
      padding-top: 60px;
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
      margin-top: 84px;
    }

    .information {
      padding-top: 80px;
      padding-bottom: 50px;
    }
  }
}
</style>