<template>
  <div class="patient-profile">
    <form @submit.prevent="updateProfile">
      <div class="row">
        <div class="col-12 col-lg-4 pr-lg-2">
          <div class="form-group mb-4">
            <small class="text-muted" v-if="label.ageLabel">Age*</small>
            <small class="text-danger" v-if="errors.age_err">{{errors.age_err}}</small>
            <input
              type="number"
              class="form-control shadow-none"
              placeholder="Your age"
              v-model="profileData.age"
            />
          </div>
        </div>
        <div class="col-12 col-lg-4 px-lg-2">
          <div class="form-group mb-4">
            <small class="text-muted" v-if="label.lastPeriodLabel">Last period*</small>
            <small class="text-danger" v-if="errors.lastPeriod_err">{{errors.lastPeriod_err}}</small>
            <DatePicker v-model="profileData.lastPeriod"></DatePicker>
          </div>
        </div>
        <div class="col-12 col-lg-4 pl-lg-2">
          <div class="form-group mb-4">
            <small class="text-muted" v-if="label.conciveNumberLabel">Concive number*</small>
            <small class="text-danger" v-if="errors.conciveNumber_err">{{errors.conciveNumber_err}}</small>
            <input
              type="number"
              class="form-control shadow-none"
              placeholder="Your concive number"
              v-model="profileData.conciveNumber"
            />
          </div>
        </div>
        <div class="col-12 col-lg-4 pr-lg-2">
          <div class="form-group mb-4">
            <small class="text-muted" v-if="label.heightLabel">Height*</small>
            <small class="text-danger" v-if="errors.height_err">{{errors.height_err}}</small>
            <input
              type="number"
              class="form-control shadow-none"
              placeholder="Your height"
              v-model="profileData.height"
            />
          </div>
        </div>
        <div class="col-12 col-lg-4 pl-lg-2">
          <div class="form-group mb-4">
            <small class="text-muted" v-if="label.weightLabel">Weight*</small>
            <small class="text-danger" v-if="errors.weight_err">{{errors.weight_err}}</small>
            <input
              type="number"
              class="form-control shadow-none"
              placeholder="Your weight"
              v-model="profileData.weight"
            />
          </div>
        </div>
        <div class="col-12 col-lg-4 pl-lg-2">
          <div class="form-group file-group mb-4">
            <small class="text-muted" v-if="label.fileLabel">Photo*</small>
            <small class="text-danger" v-if="errors.file_err">{{errors.file_err}}</small>
            <button type="button" class="btn btn-block file-btn shadow-none">
              <i class="fas fa-upload mr-2"></i> Select image
            </button>
            <input type="file" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <small class="text-muted">Physical problem</small>
            <textarea
              class="form-control shadow-none"
              rows="3"
              placeholder="Write your major physical problem (if any)"
              v-model="profileData.problem"
            ></textarea>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-block shadow-none">Update profile</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  name: "patient-profile",
  components: { DatePicker },
  data() {
    return {
      profileData: {
        age: "",
        lastPeriod: new Date(),
        conciveNumber: "",
        height: "",
        weight: "",
        file: "",
        problem: ""
      },
      label: {
        ageLabel: true,
        lastPeriodLabel: true,
        conciveNumberLabel: true,
        heightLabel: true,
        weightLabel: true,
        fileLabel: true
      },
      errors: {
        age_err: "",
        lastPeriod_err: "",
        conciveNumber_err: "",
        height_err: "",
        weight_err: "",
        file_err: ""
      }
    };
  },
  methods: {
    updateProfile() {
      if (!this.profileData.age) {
        this.label.ageLabel = false;
        this.errors.age_err = "Age is required*";
      } else if (!this.profileData.lastPeriod) {
        this.label.lastPeriodLabel = false;
        this.errors.lastPeriod_err = "Last period date is required*";
      } else if (!this.profileData.conciveNumber) {
        this.label.conciveNumberLabel = false;
        this.errors.conciveNumber_err = "Concive number is required*";
      } else if (!this.profileData.height) {
        this.label.heightLabel = false;
        this.errors.height_err = "Height is required*";
      } else if (!this.profileData.weight) {
        this.label.weightLabel = false;
        this.errors.weight_err = "Weight is required*";
      } else if (!this.profileData.file) {
        this.label.fileLabel = false;
        this.errors.file_err = "Image is required*";
      } else {
        this.errors = false;
        this.label = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.patient-profile {
  small {
    font-size: 14px;
    font-weight: 200;
    font-family: "Source Sans Pro", sans-serif;
  }
  .form-control {
    font-weight: 200;
    font-size: 17px;
    color: #000;
    font-family: "Source Sans Pro", sans-serif;
  }
  .form-control:focus {
    border: 1px solid #2bae66;
  }
  .btn {
    color: #555;
    background: #dfdfdf50;
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
  .file-btn {
    height: 39.5px;
    font-size: 17px;
    font-weight: 200;
    background: #dfdfdf50;
    color: rgba(0, 0, 0, 0.699);
  }
}
</style>