<template>
  <div>
    <HomeNav></HomeNav>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>
<script>
import HomeNav from "../../components/home-nav";
import myFooter from "../../components/custom-home-footer";
export default {
  name: "home-routing",
  components: {
    HomeNav,
    myFooter
  }
};
</script>