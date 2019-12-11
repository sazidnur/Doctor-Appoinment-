<template>
  <div class="create-admin py-3">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form>
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group mb-lg-4">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    placeholder="Admin name"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group mb-lg-4">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    placeholder="Admin e-mail"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group mb-lg-4">
                  <input
                    type="password"
                    class="form-control rounded-0 shadow-none"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group mb-lg-4">
                  <button type="submit" class="btn btn-block rounded-0 shadow-none">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "create-admin"
};
</script>
<style lang="scss" scoped>
.form-control {
  height: 50px;
  font-weight: 200;
  font-size: 18px;
  font-family: "Source Sans Pro", sans-serif;
}
.form-control:focus {
  border: 1px solid#2bae66;
}
.btn {
  height: 50px;
  color: #ffffff;
  box-shadow: none;
  background: #2bae66;
  font-weight: 200;
  font-size: 18px;
  font-family: "Source Sans Pro", sans-serif;
}
</style>