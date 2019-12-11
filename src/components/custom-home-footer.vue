<template>
  <div class="homeFooter border-top">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
          <router-link to="/home">
            <img src="../assets/static/logo.png" class="img-fluid" />
          </router-link>
        </div>
        <div class="col-12 col-lg-4 text-center text-lg-left mb-4 mb-lg-0 links">
          <h5>Important Links</h5>
          <router-link to="/home">home</router-link>
          <router-link to="/login">login</router-link>
          <router-link to="/doctors">doctor list</router-link>
          <router-link to="/registration">registration</router-link>
        </div>
        <div class="col-12 col-lg-4 text-center text-lg-left mb-4 mb-lg-0 social-media">
          <h5 class="mb-2">Connect With Us</h5>
          <a target="_blank" href>
            <i class="fab fa-facebook-square facebook"></i>
          </a>
          <a target="_blank" href>
            <i class="fab fa-linkedin linkedin"></i>
          </a>
          <a target="_blank" href>
            <i class="fab fa-twitter-square twitter"></i>
          </a>
          <a target="_blank" href>
            <i class="fab fa-google-plus google"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="dev-content py-3">
      <!-- <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p>
              All right reserved & develop by
              <a
                target="_blank"
                href="https://www.facebook.com/sazidnur"
              >Sazid Nur Ratul</a>
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "custom-home-footer"
};
</script>
<style lang="scss" scoped>
.homeFooter {
  padding-top: 40px;
  background: #b6b5b521;
  img {
    height: 80px;
  }
  h5 {
    font-weight: 200;
    font-family: "Source Sans Pro", sans-serif;
  }
  .links {
    a {
      font-size: 15px;
      font-weight: 200;
      transition: 0.3s;
      display: block;
      color: #555;
      margin-bottom: 3px;
      text-decoration: none;
      text-transform: uppercase;
      font-family: "Source Sans Pro", sans-serif;
    }
    a:hover {
      color: #2bae66;
    }
    .router-link-exact-active {
      color: #2bae66;
    }
  }
  .social-media {
    a {
      margin: 5px;
      i {
        font-size: 23px;
        padding: 5px;
        color: #555;
        transition: 0.3s;
      }
      .facebook:hover {
        color: #3b5998;
      }
      .linkedin:hover {
        color: #0e76a8;
      }
      .twitter:hover {
        color: #55acee;
      }
      .google:hover {
        color: #dc4e41;
      }
    }
  }
  .dev-content {
    margin-top: 25px;
    padding-bottom: 5px;
    // background: #a49e9e21;
    p {
      margin-bottom: 0;
      font-weight: 200;
      color: #000;
      letter-spacing: 0.05px;
      font-family: "Source Sans Pro", sans-serif;
      a {
        color: #007bff;
      }
    }
  }
}
</style>