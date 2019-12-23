<template>
  <div class="chat">
    <div class="chat-nav p-3 border-bottom text-right">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/patient">Profile</router-link>
        </li>
        <li class="list-inline-item">
          <button type="button" class="btn btn-sm btn-light shadow-none">Logout</button>
        </li>
      </ul>
    </div>

    <div class="sender-profile border-right d-none d-lg-block mb-lg-3" v-if="patient">
      <img src="../../assets/static/patient.png" class="rounded-circle mb-3" />
      <h5 class="text-capitalize mb-0">{{patient.fullname}}</h5>
      <p>{{patient.phone}}</p>
      <div class="text-left px-lg-3">
        <p class="text-muted mb-0 border-bottom">Info</p>
        <div class="information py-3">
          <p class="mb-0">BP: {{patientinfo.bloodPressure}}</p>
          <p class="mb-0">Weight: {{patientinfo.weight}}</p>
          <p class="mb-0">Pregnancy week: {{patientinfo.pregnancyWeek}}</p>
        </div>
      </div>
      <div class="text-left px-lg-3">
        <p class="text-muted mb-0 border-bottom">Reports</p>
        <div class="documents">
          <div class="reports" v-for="(report, i) in patientreports" :key="i">
            <img :src="report.file" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <div class="card chat-card rounded-0" v-chat-scroll>
      <div class="card-body">
        <div class="todo mb-2" v-for="(message, i) in messages" :key="i">
          <div v-if="message.sender_type == user_type">
            <div class="right-message">
              <p class="mb-0">{{message.content}}</p>
            </div>
          </div>
          <div v-if="message.sender_type != user_type">
            <div class="left-message">
              <p class="mb-0">{{message.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="reply-box py-1">
      <form @submit.prevent="sendMessage">
        <div class="d-flex">
          <div class="w-100">
            <input
              type="text"
              class="form-control shadow-none border-0"
              placeholder="Message ..."
              v-model="chat.content"
            />
          </div>
          <div class="flex-shrink-1 pr-1">
            <button type="submit" class="btn btn-primary shadow-none px-4">Send</button>
          </div>
        </div>
      </form>
    </div>

    <div class="reciver-profile border-left d-none d-lg-block" v-if="doctor">
      <img src="../../assets/static/woman-doctor.jpg" class="rounded-circle mb-3" />
      <h5 class="text-capitalize mb-0">{{doctor.fullname}}</h5>
      <p>{{doctor.phone}}</p>
      <div class="border mb-2"></div>
      <div class="text-left">
        <p class="text-muted px-3">Patient symptom</p>
        <div class="border mb-1"></div>
        <p v-if="patientinfo" class="px-3">{{patientinfo.symptoms}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "chat-box",
  data() {
    return {
      doctorId: this.$route.params.doctorid,
      patientId: this.$route.params.patientid,
      patient: "",
      patientinfo: "",
      patientreports: [],
      doctor: "",
      user_type: "",
      chat: {
        patientid: this.$route.params.patientid,
        doctorid: this.$route.params.doctorid,
        sender_type: localStorage.getItem("type"),
        content: ""
      },
      messages: [],
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },

  methods: {
    sendMessage() {
      this.$axios
        .post(`${this.$consult_api}send-message`, this.chat, this.header)
        .then(res => {
          if (res.data.message == "success") {
            this.chat.content = "";
            this.$axios
              .get(
                `${this.$consult_api}get-message/` +
                  this.doctorId +
                  "/" +
                  this.patientId,
                this.header
              )
              .then(res => {
                this.messages = res.data.history;
              });
          }
        });
    },
    pollData() {
      setInterval(() => {
        this.$axios
          .get(
            `${this.$consult_api}get-message/` +
              this.doctorId +
              "/" +
              this.patientId,
            this.header
          )
          .then(res => {
            this.messages = res.data.history;
          });
      }, 500);
    }
  },
  mounted() {
    this.user_type = localStorage.getItem("type");
    this.$axios
      .get(`${this.$patient_api}logged-patient/` + this.patientId, this.header)
      .then(res => {
        this.patient = res.data.patient;
      });
    this.$axios
      .get(`${this.$doctor_api}logged-doctor/` + this.doctorId, this.header)
      .then(res => {
        this.doctor = res.data.doctor;
      });
    this.$axios
      .get(`${this.$consult_api}patient-info/` + this.patientId, this.header)
      .then(res => {
        this.patientinfo = res.data.info[0];
        this.patientreports = res.data.info;
        console.log(this.patientinfo)
      });
    this.$axios
      .get(
        `${this.$consult_api}get-message/` +
          this.doctorId +
          "/" +
          this.patientId,
        this.header
      )
      .then(res => {
        this.messages = res.data.history;
      });
  },
  created() {
    this.pollData();
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
  .documents {
    width: 100%;
    .reports {
      img {
        width: 100%;
        margin-bottom: 5px;
        min-height: 150px;
      }
    }
  }
  .todo {
    width: 100%;
    .right-message {
      height: auto;
      padding: 5px 10px;
      border-radius: 3px;
      color: #ffffff;
      text-align: right;
      p {
        max-width: 45%;
        background: #007bff;
        padding: 6px 20px;
        border-radius: 25px;
        display: inline-block;
        margin-left: auto;
        text-align: left;
      }
    }
    .left-message {
      height: auto;
      padding: 5px 10px;
      border-radius: 3px;
      p {
        max-width: 45%;
        background: #dfdfdf;
        padding: 6px 20px;
        border-radius: 25px;
        display: inline-block;
        margin-left: auto;
      }
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
      .documents {
        width: 100%;
        height: 200px;
        overflow-y: scroll;
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
      overflow-y: auto;
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

@media (min-width: 1440px) {
  .chat {
    .sender-profile {
      .documents {
        width: 100%;
        height: 520px;
        overflow-y: scroll;
      }
    }
  }
}
</style>