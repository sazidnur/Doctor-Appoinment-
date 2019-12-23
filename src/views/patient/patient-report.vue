<template>
  <div class="report">
    <div class="container">
      <form @submit.prevent="submitReport">
        <div class="row">
          <div class="col-12 col-lg-4 mb-2 mb-lg-0">
            <div class="card">
              <div class="card-header">
                <p class="mb-0">Basic information*</p>
              </div>
              <div class="card-body">
                <div class="form-group mb-3">
                  <small class="text-muted">Weight</small>
                  <input
                    type="number"
                    class="form-control shadow-none"
                    placeholder="Your weight"
                    v-model="reportData.weight"
                  />
                </div>
                <div class="form-group mb-3">
                  <small class="text-muted">BP</small>
                  <input
                    type="number"
                    class="form-control shadow-none"
                    placeholder="Blood pressure"
                    v-model="reportData.bloodPressure"
                  />
                </div>
                <div class="form-group mb-3">
                  <small class="text-muted">Pregnancy week</small>
                  <input
                    type="number"
                    class="form-control shadow-none"
                    placeholder="Week"
                    v-model="reportData.pregnancyWeek"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="card">
              <div class="card-header">
                <p class="mb-0">Write your symptoms</p>
              </div>
              <div class="card-body">
                <div class="form-group mb-3">
                  <small class="text-muted">Symptoms</small>
                  <textarea
                    rows="6"
                    class="form-control shadow-none"
                    placeholder="Write here...."
                    v-model="reportData.symptoms"
                  ></textarea>
                </div>
                <div class="form-group mb-2 file-group">
                  <button type="button" class="btn btn-block file-btn rounded-0 shadow-none">
                    <i class="fas fa-upload mr-2"></i> Select report file
                  </button>
                  <input type="file" id="file" ref="file" v-on:change="handleFileUpload" />
                </div>
                <button type="submit" class="btn btn-block submit-btn shadow-none rounded-0">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "patient-report",
  data() {
    return {
      doctorId: this.$route.params.doctorid,
      patientid: localStorage.getItem("id"),
      reportData: {
        weight: "",
        bloodPressure: "",
        pregnancyWeek: "",
        symptoms: "",
        file: ""
      },
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleFileUpload() {
      this.reportData.file = this.$refs.file.files[0];
    },
    submitReport() {
      let formData = new FormData();
      formData.append("doctoid", this.doctorId);
      formData.append("patientid", this.patientid);
      formData.append("name", localStorage.getItem("name"));
      formData.append("weight", this.reportData.weight);
      formData.append("bloodPressure", this.reportData.bloodPressure);
      formData.append("pregnancyWeek", this.reportData.pregnancyWeek);
      formData.append("symptoms", this.reportData.symptoms);
      formData.append("file", this.reportData.file);
      this.$axios
        .post(
          `${this.$consult_api}patient-report-submit`,
          formData,
          this.header
        )
        .then(res => {
          if (res.data.message == "success") {
            this.$fire({
              title: "Success",
              text: "Report submitted !!",
              type: "success",
              timer: 3000
            });
            this.$router.push({
              path: "/chat/" + this.doctorId + "/" + this.patientid
            });
          }
        });
    },

 



  }
};
</script>
<style lang="scss" scoped>
.report {
  width: 100%;
  background: #e0e4e7;
  .card {
    .card-header {
      background: #ffffff;
      p {
        font-size: 15px;
        font-family: "Source Sans Pro", sans-serif;
      }
    }
    .card-body {
      small {
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
      }
      .form-control {
        font-size: 16px;
        font-family: "Source Sans Pro", sans-serif;
      }
      .form-control:focus {
        border: 1px solid #2bae66;
      }
      .file-btn {
        font-size: 20px;
        font-weight: 200;
        color: #ffffff;
        cursor: pointer;
        background: #ec498a;
        font-family: "Source Sans Pro", sans-serif;
      }
      .submit-btn {
        height: 44px;
        font-weight: 200;
        color: #ffffff;
        font-size: 20px;
        background: #2bae66;
        font-family: "Source Sans Pro", sans-serif;
      }
      .file-group {
        width: 100%;
        position: relative;
        overflow: hidden;
        display: inline-block;
      }
      .file-group input[type="file"] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
    }
  }
}

@media (max-width: 992px) {
  .report {
    margin-top: 41px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
@media (min-width: 992px) {
  .report {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}
</style>