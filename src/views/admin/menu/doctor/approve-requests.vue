<template>
  <div class="approve">
    <div class="container">
      <div class="row">
        <div class="col-12 py-3" v-if="doctorrequests">
          <div class="d-flex border-bottom" v-for="(request, i) in doctorrequests" :key="i">
            <div class="p-2 w-100">
              <h6 class="text-capitalize mb-0">{{request.fullname}}</h6>
              <small class="text-muted text-lowercase">{{request.email}}</small>
            </div>
            <div class="p-2 flex-shrink-1">
              <button
                type="button"
                class="btn shadow-none"
                v-on:click="approveDoctor(request)"
              >Approve</button>
            </div>
          </div>
        </div>
        <div class="col-12 py-3" v-if="patientRequests">
          <div class="d-flex border-bottom" v-for="(request, i) in patientRequests" :key="i">
            <div class="p-2 w-100">
              <h6 class="text-capitalize mb-0">{{request.fullname}}</h6>
              <small class="text-muted text-lowercase">{{request.email}}</small>
            </div>
            <div class="p-2 flex-shrink-1">
              <button
                type="button"
                class="btn shadow-none"
                v-on:click="approvePatient(request)"
              >Approve</button>
            </div>
          </div>
        </div>
        <div class="col-12 py-3 text-center" v-if="nullType">
          <h3 class="text-muted">No request at this moment</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "approve-requests",
  data() {
    return {
      type: this.$route.params.type,
      doctorrequests: [],
      patientRequests: [],
      nullType: null,
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },
  mounted() {
    if (this.type == "doctors") {
      this.$axios
        .get(`${this.$admin_api}pending-doctors`, this.header)
        .then(res => {
          if (res.data.doctors.length > 0) {
            this.doctorrequests = res.data.doctors;
          } else {
            this.nullType = true;
          }
        });
    }
    if (this.type == "patients") {
      this.$axios
        .get(`${this.$admin_api}pending-patients`, this.header)
        .then(res => {
          if (res.data.patients.length > 0) {
            this.patientRequests = res.data.patients;
          } else {
            this.nullType = true;
          }
        });
    }
  },
  methods: {
    approveDoctor(request) {
      this.$axios
        .patch(`${this.$admin_api}approve-doctor/` + request._id, this.header)
        .then(res => {
          if (res.status === 200) {
            this.$axios
              .get(`${this.$admin_api}pending-doctors`, this.header)
              .then(res => {
                if (res.data.doctors.length > 0) {
                  this.doctorrequests = res.data.doctors;
                } else {
                  this.nullType = true;
                }
              });
            this.$fire({
              title: "Successfully",
              text: "Request approved.",
              type: "success",
              timer: 3000
            });
          }
        });
    },
    approvePatient(request) {
      this.$axios
        .patch(`${this.$admin_api}approve-patient/` + request._id, this.header)
        .then(res => {
          if (res.status === 200) {
            this.$axios
              .get(`${this.$admin_api}pending-patients`, this.header)
              .then(res => {
                if (res.data.doctors.length > 0) {
                  this.doctorrequests = res.data.doctors;
                } else {
                  this.nullType = true;
                }
              });
            this.$fire({
              title: "Successfully",
              text: "Request approved.",
              type: "success",
              timer: 3000
            });
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.approve {
  h6,
  small {
    font-weight: 200;
    font-family: "Source Sans Pro", sans-serif;
  }
  .btn {
    color: rgb(56, 55, 55);
    padding: 4px 15px;
    transition: 0.3s;
    font-size: 15px;
    background: rgba(185, 183, 183, 0.164);
  }
  .btn:hover {
    color: #ffffff;
    background: #2bae66;
  }
}
</style>