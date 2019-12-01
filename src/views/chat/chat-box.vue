<template>
  <div class="chat">
    <!-- <div class="card border-0">
      <div class="d-flex p-3 doctor-box">
        <div>
          <img src="../../assets/static/doctor.png" class="rounded-circle" />
        </div>
        <div class="pl-4 pt-2">
          <h6 class="text-capitalize mb-0">dr. abdullah al mamun</h6>
          <small>
            <span class="text-muted">06:38AM 01 DEC, 20</span>
            <span class="text-success ml-2">Online</span>
          </small>
          <p
            class="my-2"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo repellendus esse temporibus odit voluptatem cumque pariatur veniam libero exercitationem!</p>
        </div>
      </div>

      <div class="d-flex p-3 patient-box">
        <div class="text-right pr-4 pt-2">
          <h6 class="text-capitalize mb-0">sazid</h6>
          <small>
            <span class="text-muted">06:38AM 01 DEC, 20</span>
          </small>
          <p
            class="my-2"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo repellendus esse temporibus odit voluptatem cumque pariatur veniam libero exercitationem!</p>
        </div>
        <div>
          <img src="../../assets/static/doctor.png" class="rounded-circle" />
        </div>
      </div>
    </div>-->

    <!-- Reply Box -->
    <!-- <div class="reply-box p-3 border"></div> -->

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

    <div class="sender-profile border-right">
      <img src="../../assets/patients/sazid.jpg" class="rounded-circle mb-3" />
      <h5 class="text-capitalize">sazid nur ratul</h5>
    </div>

    <!-- <div class="messageing-box">

      <div class="d-flex p-3 doctor-box">
        <div>
          <img src="../../assets/static/doctor.png" class="rounded-circle" />
        </div>
        <div class="pl-4 pt-2">
          <h6 class="text-capitalize mb-0">dr. abdullah al mamun</h6>
          <small>
            <span class="text-muted">06:38AM 01 DEC, 20</span>
            <span class="text-success ml-2">Online</span>
          </small>
          <p
            class="my-2"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo repellendus esse temporibus odit voluptatem cumque pariatur veniam libero exercitationem!</p>
        </div>
      </div>

      <div class="d-flex p-3 patient-box">
        <div class="text-right pr-4 pt-2">
          <h6 class="text-capitalize mb-0">sazid</h6>
          <small>
            <span class="text-muted">06:38AM 01 DEC, 20</span>
          </small>
          <p
            class="my-2"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo repellendus esse temporibus odit voluptatem cumque pariatur veniam libero exercitationem!</p>
        </div>
        <div>
          <img src="../../assets/static/doctor.png" class="rounded-circle" />
        </div>
      </div>
    </div>-->

    <!-- <div class="reply-box py-2">
      <form>
        <textarea class="form-control shadow-none" rows="1" placeholder="Write message"></textarea>
      </form>
    </div>-->

    <div class="card chat-card">
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
      <!-- <div class="card-footer"></div> -->
    </div>

    <div class="reciver-profile border-left">
      <img src="../../assets/patients/sazid.jpg" class="rounded-circle mb-3" />
      <h5 class="text-capitalize">sazid nur ratul</h5>
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

  // .reply-box {
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  // }
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
    // .messageing-box {
    //   position: fixed;
    //   right: 0;
    //   width: 100%;
    //   height: 100vh;
    //   padding-top: 80px;
    //   padding-left: 260px;
    //   padding-right: 10px;
    //   background: #ffffff;
    //   overflow-y: scroll;
    //   position: relative;
    //   // margin-bottom: 50px;
    //   .doctor-box {
    //     margin-bottom: 10px;
    //     background: #dfdfdf50;
    //     border-radius: 3px;
    //     width: 60%;
    //   }
    //   img {
    //     width: 50px;
    //     height: 50px;
    //   }
    //   small {
    //     font-size: 12px;
    //   }
    //   h6{
    //     font-size: 18px;
    //     font-weight: 600;
    //     color: #555;
    //   }
    //   p {
    //     font-size: 16px;
    //     margin-bottom: 0;
    //   }
    //   .patient-box {
    //     width: 60%;
    //     float: right;
    //     margin-bottom: 10px;
    //   }
    // }
    // .reply-box {
    //   position: absolute;
    //   right: 0;
    //   width: 100%;
    //   bottom: 0;
    //   z-index: 5;
    //   height: 67px;
    //   padding-left: 260px;
    //   padding-right: 10px;
    //   background: #ffffff;
    // }

    .chat-card {
      position: fixed;
      top: 64px;
      bottom: 80px;
      width: 100%;
      padding-left: 300px;
      padding-right: 300px;
      background: none;
      overflow-y: scroll;
      // height: 100vh;
      // .card-body {
      //   height: 50vh;
      //   overflow-y: scroll;
      //   padding-bottom: 80px;
      //   background: grey;
      // }
      // .card-footer {
      //   position: fixed;
      //   bottom: 0;
      //   height: 60px;
      //   width: 100%;
      //   background: black;
      // }
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