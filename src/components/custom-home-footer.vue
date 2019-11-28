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
          <router-link to="/">sign in</router-link>
          <router-link to="/">doctor list</router-link>
          <router-link to="/">registration</router-link>
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
  </div>
</template>
<script>
export default {
  name: "custom-home-footer"
};
</script>
<style lang="scss" scoped>
.homeFooter {
  margin-top: 50px;
  padding-top: 40px;
  padding-bottom: 25px;
  img {
    height: 60px;
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
}
</style>