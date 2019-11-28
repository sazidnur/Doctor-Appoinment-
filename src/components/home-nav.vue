<template>
  <div class="home-nav">
    <div class="desktop-nav d-none d-lg-block">
      <div class="d-flex">
        <div>
          <img src="../assets/static/logo.png" class="img-fluid" v-on:click="goHome" />
        </div>
        <div class="ml-auto mt-1">
          <router-link to="/home">home</router-link>
          <router-link to="/login">login</router-link>
          <router-link to="/registration">regisration</router-link>
          <router-link to="/doctors">doctor list</router-link>
        </div>
      </div>
    </div>

    <!-- Mobile nav -->
    <div class="mobile-nav d-block d-lg-none border-bottom">
      <div class="d-flex px-3">
        <div>
          <i class="fas fa-bars bars" v-on:click="openMenu" v-show="bars"></i>
          <i class="fas fa-times" v-on:click="closeMenu" v-show="close"></i>
        </div>
        <div class="ml-auto">
          <router-link to="/home">
            <img src="../assets/static/logo.png" class="img-fluid" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="mobile-menu d-block d-lg-none" ref="mobileMenu">
      <router-link to="/home">Home</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/registration">registration</router-link>
      <router-link to="/doctors">doctor list</router-link>
    </div>

    <div class="break"></div>
  </div>
</template>
<script>
export default {
  name: "home-nav",
  data() {
    return {
      bars: true,
      close: false
    };
  },
  mounted() {
    this.$refs.mobileMenu.style.top = "-100%";
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/home" });
    },
    openMenu() {
      this.bars = false;
      this.close = true;
      this.$refs.mobileMenu.style.top = "41px";
    },
    closeMenu() {
      this.close = false;
      this.bars = true;
      this.$refs.mobileMenu.style.top = "-100%";
    }
  }
};
</script>
<style lang="scss" scoped>
.home-nav {
  width: 100%;
  .desktop-nav {
    padding: 20px 100px;
    background: none;
    height: 80px;
    img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    a {
      text-transform: uppercase;
      font-size: 18px;
      padding: 10px;
      color: #000;
      font-weight: 200;
      transition: 0.3s;
      text-decoration: none;
    }
    a:hover {
      color: #2bae66;
    }
    .router-link-exact-active {
      color: #2bae66;
      border-bottom: 1px solid #2bae66;
    }
  }

  .mobile-nav {
    height: 63px;
    position: relative;
    z-index: 3;
    .bars {
      cursor: pointer;
      font-size: 22px;
      padding-top: 5px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }

  .mobile-nav {
    padding-top: 8px;
    padding-bottom: 8px;
    width: 100%;
    height: 41px;
    z-index: 3;
    background: #ffffff;
    position: fixed;
    top: 0;
    i {
      cursor: pointer;
      font-size: 22px;
      padding-top: 4px;
      transition: 0.9s;
    }
    img {
      height: 28px;
    }
    .break {
      height: 41px;
    }
  }
  .mobile-menu {
    position: fixed;
    top: 41px;
    width: 100%;
    height: auto;
    left: 0;
    background: #ffffff;
    z-index: 2;
    transition: 0.9s;
    a {
      width: 100%;
      padding: 10px 15px;
      display: block;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 200;
      color: #726e6e;
      text-decoration: none;
      transition: 0.3s;
      font-family: "Source Sans Pro", sans-serif;
      border-bottom: 1px solid #726e6e28;
    }
    .router-link-exact-active {
      color: #2bae66;
    }
  }
}
</style>