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
              <h5 class="mb-0 text-capitalize">{{request.patientname}}</h5>
              <small>
                <span class="text-muted pr-2">{{request.date | time}}</span>
                <span class="text-success">Online</span>
              </small>
              <p class="mb-0">{{request.symptoms}}</p>
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
      requests: [],
      doctorId: localStorage.getItem("id"),
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },
  mounted() {
    this.$axios.get(`${this.$doctor_api}consult-requests/` + this.doctorId, this.header)
    .then(res => {
      this.requests = res.data.requests;
    })
  },
  methods: {
    goConsult(request) {
      this.$router.push({ path: "/chat/" + this.doctorId + '/' + request.patientid });
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