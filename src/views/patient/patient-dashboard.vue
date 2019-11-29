<template>
  <div class="dashboard">
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 image-column">
            <img src="../../assets/patients/patient.jpg" class="img-fluid" />
          </div>
          <div class="col-12 col-md-6 col-lg-8 text-center text-md-left content-column">
            <h1 class="text-capitalize">sazid nur ratul</h1>
            <h5 class="mb-2">Expected delivery date: 30/10/19</h5>
            <h5 class="mb-2">Next appoinment date: 30/10/19</h5>
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
    .image-column {
      overflow: hidden;
      img {
        min-width: 100%;
        min-height: 100%;
      }
    }
    .content-column {
      h1 {
        color: #2bae66;
      }
      h5 {
        font-size: 16px;
        font-family: "Source Sans Pro", sans-serif;
      }
    }
  }
}

@media (max-width: 768px) {
  .dashboard {
    .banner {
      .image-column {
        height: 200px;
      }
      .content-column {
        height: 200px;
        padding-top: 20px;
        h1 {
          font-size: 25px;
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .dashboard {
    .banner {
      .image-column {
        height: 250px;
      }
      .content-column {
        height: 250px;
        padding-top: 45px;
        h1 {
          font-weight: 900;
          font-size: 40px;
          font-family: "Source Sans Pro", sans-serif;
        }
      }
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
      .content-column {
        height: 250px;
        padding-top: 45px;
        padding-left: 75px;
      }
    }
  }
}
@media (min-width: 1280px) {
  .dashboard {
    .banner {
      .content-column {
        padding-left: 375px;
      }
    }
  }
}
@media (min-width: 1440px) {
  .dashboard {
    .banner {
      .content-column {
        padding-left: 455px;
      }
    }
  }
}
</style>