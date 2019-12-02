<template>
  <div class="consultation">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="d-flex border-bottom"
            v-for="(request, i) in requests"
            :key="i"
            v-on:click="goConsult(request)"
          >
            <div class="px-2 py-3 w-100">
              <h5 class="mb-0 text-capitalize">abdullah al mamun</h5>
              <small>
                <span class="text-muted pr-2">12:00 AM</span>
                <span class="text-success">Online</span>
              </small>
              <p class="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, eos.</p>
            </div>
          </div>
          <div class="text-center pt-4">
            <button type="button" class="btn shadow-none px-5">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "consultation",
  data() {
    return {
      requests: []
    };
  },
  mounted() {
    for (var i = 0; i < 11; i++) {
      this.requests = i;
    }
  },
  methods: {
    goConsult(request) {
      this.$router.push({ path: "/start-consulnt/" + request });
    }
  }
};
</script>
<style lang="scss" scoped>
.consultation {
  margin-bottom: 50px;
  .d-flex {
    cursor: pointer;
    transition: 0.3s;
    h5 {
      font-weight: 200;
      font-size: 18px;
      font-family: "Source Sans Pro", sans-serif;
    }
    p {
      font-size: 17px;
      color: #000;
      font-weight: 200;
      font-family: "Source Sans Pro", sans-serif;
    }
  }
  .d-flex:hover {
    background: hsla(0, 0%, 87.5%, 0.31);
  }
  .btn {
    font-weight: 400;
    font-size: 16px;
    border-radius: 4px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border: 1px solid hsla(0, 0%, 87.5%, 0.31);
    font-family: "Source Sans Pro", sans-serif;
  }
  .btn:hover {
    background: hsla(0, 0%, 87.5%, 0.31);
  }
}
</style>