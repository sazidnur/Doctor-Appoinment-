<template>
  <div class="dashboard">
    <div class="banner">
      <img src="../../assets/patients/patient_banner_bg.jpg" class="img-fluid" />
      <div class="profile-card">
        <div class="card rounded-0 border-0 shadow">
          <div class="custom-profile-img pb-3">
            <img src="../../assets/patients/patient.jpg" class="img-fluid rounded-circle" />
          </div>
          <div class="card-body text-center">
            <h2 class="text-capitalize mb-3">sazid nur ratul</h2>
            <p class="mb-0">Content one</p>
            <p>Content two</p>
          </div>
        </div>
      </div>
    </div>

    <div class="custom-break"></div>

    <div class="container mt-3">
        <div class="row">
            <div class="col-12">
                <div class="card rounded-0 text-center">
                    <div class="card-body">
                        <p class="mb-0">custom tab</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "patient-dashboard"
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
  .container{
      margin-bottom: 70px;
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
  }
}
</style>