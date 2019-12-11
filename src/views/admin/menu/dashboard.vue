<template>
  <div class="dashboard">
    <div class="container py-3">
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card text-center">
            <div class="card-body py-4">
              <h4 class="mb-0">{{doctors}}</h4>
              <h5 class="mb-0">Doctors</h5>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card text-center">
            <div class="card-body py-4">
              <h4 class="mb-0">{{patients}}</h4>
              <h5 class="mb-0">Patients</h5>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card text-center" v-on:click="goDoctors">
            <div class="card-body py-4">
              <h4 class="mb-0">{{doctorRequest}}</h4>
              <h5 class="mb-0">Doctor request</h5>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card text-center" v-on:click="goPatients">
            <div class="card-body py-4">
              <h4 class="mb-0">{{patientsRequest}}</h4>
              <h5 class="mb-0">Patients requests</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dashborad",
  data() {
    return {
      patients: "",
      doctors: "",
      patientsRequest: "",
      doctorRequest: "",
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },
  mounted() {
    this.$axios
      .get(`${this.$admin_api}total-patient`, this.header)
      .then(res => {
        this.patients = res.data.totalpatient;
      });
    this.$axios.get(`${this.$admin_api}total-doctor`, this.header).then(res => {
      this.doctors = res.data.totaldoctor;
    });
    this.$axios
      .get(`${this.$admin_api}patient-request`, this.header)
      .then(res => {
        this.patientsRequest = res.data.totalpatient;
      });
    this.$axios
      .get(`${this.$admin_api}doctor-request`, this.header)
      .then(res => {
        this.doctorRequest = res.data.totaldoctor;
      });
  },
  methods: {
    goDoctors() {
      this.$router.push({ path: "/menu/requests/" + "doctors" });
    },
    goPatients() {
      this.$router.push({ path: "/menu/requests/" + "patients" });
    }
  }
};
</script>
<style lang="scss" scoped>
.dashboard {
  a {
    text-decoration: none;
  }
  .card {
    cursor: pointer;
    margin-bottom: 30px;
    h4,
    h5 {
      color: rgb(0, 0, 0);
      font-weight: 200;
      font-family: "Source Sans Pro", sans-serif;
    }
  }
}
</style>