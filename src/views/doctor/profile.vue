<template>
  <div class="profile">
    <div class="banner">
      <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 text-center d-block d-lg-none pt-4">
            <div class="image-box rounded-circle">
              <img src="../../assets/static/no-image.png" class="img-fluid rounded-circle" />
            </div>
          </div>
          <div class="col-12 col-lg-6 text-center text-lg-left content-column pb-4 pb-lg-0">
            <h2 class="text-capitalize">sazid nur ratul</h2>
            <h5>MBBS, FCPS (UK)</h5>
            <h6 class="text-capitalize">medicine specialist</h6>
          </div>
          <div class="col-12 col-lg-6 text-center d-none d-lg-block">
            <div class="image-box rounded-circle">
              <img src="../../assets/static/no-image.png" class="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      doctorId: this.$route.params.id
    };
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
}

@media (max-width: 992px) {
  .profile {
    margin-top: 41px;
    .content-column {
      width: 100%;
      padding-top: 35px;
    }
    .image-box {
      margin-top: 45px;
    }
  }
}

@media (min-width: 992px) {
  .profile {
    .content-column {
      width: 100%;
      padding-top: 70px;
    }
    .image-box {
      margin-top: 45px;
    }
  }
}
</style>