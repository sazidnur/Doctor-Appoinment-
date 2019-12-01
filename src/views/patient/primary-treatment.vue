<template>
  <div class="primary-treatment">
    <div class="row mb-4">
      <div class="col-12 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="text-muted mb-0">
              <i class="far fa-calendar-check text-info mr-2"></i>Next appoinment date: 05 Jan 20
            </h5>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="text-muted">
              <i class="fas fa-exclamation-circle text-warning mr-2"></i>Emergency meet with doctor
            </h5>
            <ol>
              <li>Reason one</li>
              <li>Reason one</li>
              <li>Reason one</li>
              <li>Reason one</li>
              <li>Reason one</li>
              <li>Reason one</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="(week, i) in weeks" :key="i">
        <div class="card">
          <div class="card-header text-center pb-0 border-0 pt-4">
            <h4 class="mb-0">Week {{week}}</h4>
          </div>
          <div class="card-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero molestias quis, natus earum maiores nobis cupiditate similique nesciunt perspiciatis facilis alias, magnam rem deserunt dicta quidem omnis doloribus harum nam odio recusandae est vel laborum? Possimus saepe, cum amet quod porro eum! Ullam ipsam sint, impedit sequi dicta modi.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "primary-treatment",
  data() {
    return {
      weeks: []
    };
  },
  mounted() {
    for (var i = 0; i < 42; i++) {
      this.weeks = i;
    }
  }
};
</script>
<style lang="scss" scoped>
.primary-treatment {
  .card {
    border-radius: 3px;
    background: #f0eded8a;
    border: 0;
    .card-header {
      background: none;
      h4 {
        font-family: "Source Sans Pro", sans-serif;
      }
    }
    .card-body {
      h5 {
        font-family: "Source Sans Pro", sans-serif;
      }
      ol {
        li {
          font-style: 17px;
          font-family: "Source Sans Pro", sans-serif;
        }
      }
      p {
        font-size: 16px;
        line-height: 1.7rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .primary-treatment {
    .col-lg-4 {
      margin-bottom: 20px;
    }
  }
}
@media (min-width: 768px) {
  .primary-treatment {
    .col-lg-4 {
      margin-bottom: 30px;
    }
  }
}
</style>