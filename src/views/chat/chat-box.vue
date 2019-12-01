<template>
  <div class="chat">
    <div class="chat-nav p-3 border-bottom text-right">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/patient">Profile</router-link>
        </li>
        <li class="list-inline-item">
          <button type="button" class="btn btn-sm btn-light shadow-none">New message</button>
        </li>
        <li class="list-inline-item">
          <button type="button" class="btn btn-sm btn-light shadow-none">Logout</button>
        </li>
      </ul>
    </div>

    <div class="sender-profile border-right d-none d-lg-block">
      <img src="../../assets/patients/sazid.jpg" class="rounded-circle mb-3" />
      <h5 class="text-capitalize">sazid nur ratul</h5>
    </div>

    <div class="card chat-card rounded-0">
      <div class="card-body">
        <h1>hello 1</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello last</h1>
      </div>
    </div>

    <div class="reply-box py-1">
      <form>
        <div class="d-flex">
          <div class="w-100">
            <input type="text" class="form-control shadow-none border-0" placeholder="Message ..." />
          </div>
          <div class="flex-shrink-1 pr-1">
            <button type="submit" class="btn btn-primary shadow-none px-4">Send</button>
          </div>
        </div>
      </form>
    </div>

    <div class="reciver-profile border-left d-none d-lg-block">
      <img src="../../assets/patients/mamun.jpg" class="rounded-circle mb-3" />
      <h5 class="text-capitalize">abdullah al mamun</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "chat-box",
  data() {
    return {
      doctorId: this.$route.params.doctorid
    };
  }
};
</script>
<style lang="scss" scoped>
.chat {
  .chat-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    background: #ffffff;
    a {
      font-size: 14px;
    }
    .btn {
      font-size: 14px;
    }
  }
}

@media (max-width: 992px) {
  .chat {
    .chat-card {
      position: fixed;
      top: 64px;
      bottom: 50px;
      width: 100%;
      background: none;
      overflow-y: scroll;
    }

    .reply-box {
      position: fixed;
      bottom: 0px;
      height: 50px;
      width: 100%;
      background: none;
    }
  }
}
@media (min-width: 992px) {
  .chat {
    .sender-profile {
      position: fixed;
      left: 0;
      width: 300px;
      height: 100vh;
      background: #ffffff;
      padding-top: 80px;
      text-align: center;
      z-index: 6;
      img {
        width: 100px;
        height: 100px;
      }
    }

    .chat-card {
      position: fixed;
      top: 64px;
      bottom: 50px;
      width: 100%;
      padding-left: 300px;
      padding-right: 300px;
      background: none;
      overflow-y: scroll;
    }

    .reply-box {
      position: fixed;
      bottom: 0px;
      height: 50px;
      width: 100%;
      padding-left: 300px;
      padding-right: 300px;
      background: none;
    }

    .reciver-profile {
      position: fixed;
      right: 0;
      width: 300px;
      height: 100vh;
      background: #ffffff;
      padding-top: 80px;
      text-align: center;
      z-index: 6;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>