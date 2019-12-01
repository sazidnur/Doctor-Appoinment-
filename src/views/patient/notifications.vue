<template>
  <div class="notifications">
    <div class="row">
      <div class="col-12 mb-3">
        <div
          class="d-flex notification p-3 border-bottom"
          v-for="(notifi, i) in notificatons"
          :key="i"
          v-on:click="startChat(notifi)"
        >
          <div>
            <h6 class="mb-0 text-capitalize">dr. abdullah al mamun</h6>
            <small class="text-muted">02:40AM 10 NOV, 2019</small>
          </div>
          <div class="ml-auto"></div>
        </div>
      </div>
      <div class="col-12 text-center">
        <button type="button" class="btn shadow-none px-5">Load More</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "notifications",
  data() {
    return {
      notificatons: []
    };
  },
  mounted() {
    for (var i = 0; i < 11; i++) {
      this.notificatons = i;
    }
  },
  methods: {
    startChat(notifi) {
      this.$router.push({ path: "/chat/" + notifi });
    }
  }
};
</script>
<style lang="scss" scoped>
.notifications {
  .notification {
    cursor: pointer;
    transition: 0.3s;
    background: #dfdfdf50;
  }
  .notification:hover {
    background: #dfdfdf6e;
  }
  .btn {
    color: #000;
    font-size: 17px;
    background: #dfdfdf50;
    font-family: "Source Sans Pro", sans-serif;
  }
}
</style>