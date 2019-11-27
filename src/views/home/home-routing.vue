<template>
    <div>
        <HomeNav></HomeNav>
        <router-view></router-view>
    </div>
</template>
<script>
import HomeNav from '../../components/home-nav'
export default {
    name: 'home-routing',
    components: {
        HomeNav
    }
}
</script>