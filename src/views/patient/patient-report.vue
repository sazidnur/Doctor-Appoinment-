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
                  <small class="text-muted" v-if="label.weightLabel">Weight</small>
                  <small class="text-danger" v-if="errors.weight_err">{{errors.weight_err}}</small>
                  <input
                    type="number"
                    class="form-control shadow-none"
                    placeholder="Your weight"
                    v-model="reportData.weight"
                  />
                </div>
                <div class="form-group mb-3">
                  <small class="text-muted" v-if="label.bloodPressureLabel">BP</small>
                  <small
                    class="text-danger"
                    v-if="errors.bloodPressure_err"
                  >{{errors.bloodPressure_err}}</small>
                  <input
                    type="number"
                    class="form-control shadow-none"
                    placeholder="Blood pressure"
                    v-model="reportData.bloodPressure"
                  />
                </div>
                <div class="form-group mb-3">
                  <small class="text-muted" v-if="label.pregnancyWeekLabel">Pregnancy week</small>
                  <small
                    class="text-danger"
                    v-if="errors.pregnancyWeek_err"
                  >{{errors.pregnancyWeek_err}}</small>
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
                  <small class="text-muted" v-if="label.symptomsLabel">Symptoms</small>
                  <small class="text-danger" v-if="errors.symptoms_err">{{errors.symptoms_err}}</small>
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
                  <input type="file" />
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
      reportData: {
        weight: "",
        bloodPressure: "",
        pregnancyWeek: "",
        symptoms: "",
        testsFile: []
      },
      label: {
        weightLabel: true,
        bloodPressureLabel: true,
        pregnancyWeekLabel: true,
        symptomsLabel: true
      },
      errors: {
        weight_err: "",
        bloodPressure_err: "",
        pregnancyWeek_err: "",
        symptoms_err: ""
      }
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    submitReport() {
      if (!this.reportData.weight) {
        this.label.weightLabel = false;
        this.errors.weight_err = "Weight is required*";
      } else if (!this.reportData.bloodPressure) {
        this.label.bloodPressureLabel = false;
        this.errors.bloodPressure_err = "Blood pressure is required*";
      } else if (!this.reportData.pregnancyWeek) {
        this.label.pregnancyWeekLabel = false;
        this.errors.pregnancyWeek_err = "Pregnancy week is required*";
      } else if (!this.reportData.symptoms) {
        this.label.symptomsLabel = false;
        this.errors.symptoms_err = "Symptoms is required*";
      } else {
        this.label = true;
        this.errors = false;
      }
    }
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