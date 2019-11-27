<template>
  <div class="home">
    <!-- Banner -->
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8 text-center text-lg-left banner-column">
            <h1 class="mb-4">
              Manage Your Health Care Online
              100%Cost Free
            </h1>
            <a href class="btn btn-lg shadow-none color-btn mb-2 mb-md-0">checkup now</a>
            <a href class="btn btn-lg shadow-none boder-btn ml-2">schedule</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Need section -->
    <div class="custom-need-section">
      <div class="container">
        <div class="row pb-5">
          <div class="col-12 text-center">
            <h1 class="mb-0">Care When You Need it!</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
            <i class="far fa-clock mb-3"></i>
            <h2>24/7 Available</h2>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
            <i class="far fa-calendar mb-3"></i>
            <h2>365 Days Service</h2>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
            <i class="fas fa-phone mb-3"></i>
            <h2>Offline Contacts Available</h2>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
            <i class="fas fa-check-double mb-3"></i>
            <h2>100% Cost FREE</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Approce section -->
    <div class="approce">
      <div class="flex-center flex-column text-center">
        <img src="../../assets/static/approch.svg" class="img-fluid mb-4" />
        <h1 class="mb-3">A new approach to healthcare</h1>
        <p>When it comes to health and wellbeing, we want to give you and your family peace of mind, whenever and wherever you need it.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../../assets/static/banner.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
  .banner {
    width: 100%;
    background: none;
    .banner-column {
      h1 {
        color: #ffffff;
        font-weight: 200;
        text-transform: uppercase;
        font-family: "Source Sans Pro", sans-serif;
      }
      .color-btn {
        color: #ffffff;
        font-weight: 200;
        text-transform: uppercase;
        font-size: 18px;
        border-radius: 25px;
        padding-left: 30px;
        padding-right: 30px;
        background: #2bae66;
        font-family: "Source Sans Pro", sans-serif;
        transition: 0.3s;
      }
      .color-btn:hover {
        background: #23804c;
      }
      .boder-btn {
        color: #ffffff;
        font-weight: 200;
        text-transform: uppercase;
        font-size: 18px;
        border-radius: 25px;
        padding-left: 30px;
        padding-right: 30px;
        border: 2px solid #2bae66;
        font-family: "Source Sans Pro", sans-serif;
        transition: 0.3s;
      }
      .boder-btn:hover {
        color: #ffffff;
        background: #23804c;
        border: 2px solid #23804c;
      }
    }
  }

  // custom-need-section
  .custom-need-section {
    padding-top: 80px;
    padding-bottom: 80px;
    background: #ffffff;
    h1 {
      font-weight: 200;
      color: #555;
      font-size: 35px;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-family: "Source Sans Pro", sans-serif;
    }
    i {
      color: #2bae66;
      font-size: 32px;
    }
    h2 {
      font-size: 25px;
      font-weight: 200;
      color: #555;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-family: "Source Sans Pro", sans-serif;
    }
  }

  //   Approce
  .approce {
    padding-top: 100px;
    padding-bottom: 100px;
    background: url("../../assets/static/dots-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 450px;
    img {
      width: 320px;
      height: 250px;
    }
    h1 {
      font-weight: 200;
      color: #ffffff;
      font-size: 30px;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-family: "Source Sans Pro", sans-serif;
    }
    p {
      font-weight: 200;
      color: #ffffff;
      font-size: 20px;
      margin-bottom: 0px;
      font-family: "Source Sans Pro", sans-serif;
    }
  }
}

@media (max-width: 768px) {
  .banner {
    height: 550px;
    padding-top: 150px;
    padding-left: 20px;
    padding-right: 20px;
    .banner-column {
      h1 {
        font-size: 30px;
      }
    }
  }
  .approce {
    p {
      width: 85%;
    }
  }
}
@media (min-width: 768px) {
  .banner {
    height: 550px;
    padding-top: 170px;
    .banner-column {
      h1 {
        font-size: 45px;
      }
    }
  }

  .approce {
    p {
      width: 700px;
    }
  }
}
</style>