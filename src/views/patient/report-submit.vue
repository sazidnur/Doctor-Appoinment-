<template>
  <div class="report">
    <div class="row mb-5">
      <div class="col-12">
        <form>
          <div class="row">
            <div class="col-12">
              <div class="form-group mb-3">
                <small class="text-muted">Select doctor</small>
                <multiselect
                  v-model="value"
                  :options="doctors"
                  placeholder="Doctor"
                  label="name"
                  track-by="name"
                ></multiselect>
              </div>
            </div>
          </div>

          <div class="row" v-for="(myfrom, i) in reportsArray" :key="i">
            <div class="col-12 col-lg-5">
              <div class="form-group mb-3">
                <small class="text-muted">Select test</small>
                <multiselect
                  v-model="value"
                  :options="doctors"
                  placeholder="Test"
                  label="name"
                  track-by="name"
                ></multiselect>
              </div>
            </div>
            <div class="col-12 col-lg-5 mt-lg-4 px-lg-2">
              <div class="form-group mb-3 file-group">
                <button type="button" class="btn btn-block file-btn shadow-none">
                  <i class="fas fa-upload mr-2"></i> Select Report File
                </button>
                <input type="file" />
              </div>
            </div>
            <div class="col-12 col-lg-2 mt-lg-4">
              <div class="form-group mb-3 file-group">
                <button
                  type="button"
                  class="btn btn-block file-btn remove-btn shadow-none"
                  v-on:click="removeForm(myfrom)"
                >
                  <i class="fas fa-minus mr-2"></i> Remove
                </button>
              </div>
            </div>
          </div>
          <!-- Increment Button -->
          <div class="row">
            <div class="col-12">
              <div class="form-group mb-3 file-group">
                <button
                  type="button"
                  class="btn btn-block file-btn shadow-none"
                  v-on:click="createNewReport"
                >
                  <i class="fas fa-plus mr-2"></i> Add More Report
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
export default {
  name: "report-submit",
  components: {
    Multiselect
  },
  data() {
    return {
      reportsArray: [],
      value: null,
      doctors: [
        { name: "Vue.js" },
        { name: "Rails" },
        { name: "Sinatra" },
        { name: "Laravel" },
        { name: "Phoenix" }
      ],
      a: 0
    };
  },
  mounted() {
    this.reportsArray.push(this.a);
  },
  methods: {
    createNewReport() {
      var b = this.a++;
      this.reportsArray.push(b);
    },
    removeForm(myfrom) {
      var c = this.reportsArray.indexOf(myfrom);
      this.reportsArray.splice(c, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.report {
  form {
    .form-group {
      font-family: "Source Sans Pro", sans-serif;
      small {
        font-size: 14px;
      }
    }
    .multiselect {
      font-family: "Source Sans Pro", sans-serif;
    }
    .file-group {
      width: 100%;
      position: relative;
      overflow: hidden;
      display: inline-block;
      .file-btn {
        font-size: 18px;
        font-weight: 200;
        cursor: pointer;
        height: 42px;
        border-radius: 5px;
        background: #dfdfdf50;
        font-family: "Source Sans Pro", sans-serif;
      }
      .remove-btn {
        color: #da0707;
        background: #dfdfdf50;
      }
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
</style>