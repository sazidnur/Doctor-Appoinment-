<template>
  <div class="routing">
    <div class="custom-top-nav border-bottom p-3">
      <div class="d-flex">
        <div>
          <i class="fas fa-bars" v-on:click="openMenu"></i>
        </div>
        <div class="ml-auto">
          <router-link to="/menu/profile">
            <p class="mb-0 text-capitalize">admin</p>
          </router-link>
          <i class="fas fa-power-off logout mx-2" v-on:click="logout"></i>
        </div>
      </div>
    </div>
    <div class="side-menu border-right" id="sideMenu">
      <div class="text-right">
        <i class="fas fa-times pt-3 pr-3" v-on:click="closeMenu"></i>
      </div>
      <div class="p-3">
        <router-link to="/menu/dashboard" class="btn btn-block">Dashboard</router-link>
        <router-link to="/menu/create-admin" class="btn btn-block">New Admin</router-link>
      </div>
    </div>
    <div class="break"></div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "admin-routing",
  data() {
    return {
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },
  mounted() {
    document.getElementById("sideMenu").style.marginLeft = "0px";
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/admin" });
    },
    openMenu() {
      document.getElementById("sideMenu").style.marginLeft = "0px";
    },
    closeMenu() {
      document.getElementById("sideMenu").style.marginLeft = "-220px";
    }
  }
};
</script>
<style lang="scss" scoped>
.routing {
  background: #ffffff;
  .custom-top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    background: #ffffff;
    p {
      font-size: 16px;
      float: left;
      font-family: Nunito-regular;
    }
    .logout {
      cursor: pointer;
      transition: 0.3s;
      float: left;
      padding-top: 2px;
    }
    .logout:hover {
      color: #2bae66;
    }
    i {
      padding-left: 10px;
      cursor: pointer;
      font-size: 18px;
      transition: 0.3s;
    }
    i:hover {
      color: #2bae66;
    }
  }
  .side-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100vh;
    background: #ffffff;
    z-index: 9;
    transition: 0.6s;
    i {
      cursor: pointer;
      font-size: 18px;
      transition: 0.3s;
    }
    i:hover {
      color: #2bae66;
    }
    .btn {
      font-family: Nunito-regular;
      border-radius: 3px;
      transition: 0.3s;
      box-shadow: none;
      padding-top: 6px;
      padding-bottom: 6px;
      text-align: left;
      padding-left: 20px;
    }
    .btn:hover {
      color: #ffffff;
      background: #2bae66;
    }
    a.router-link-exact-active {
      color: #ffffff;
      background: #2bae66;
    }
  }
  .break {
    height: 60px;
  }
}
</style>
