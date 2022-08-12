/* eslint-disable */
<template>
  <div class="flexbox-item">
    <form class="container" @submit.prevent="updateUser">
      <p>
        <a style="text-decoration-line: underline"> <b>Noted: </b> </a> Just
        input what you want to change!
      </p>

      <input
        type="text"
        placeholder="New Username"
        name="name"
        v-model="name"
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="New Email"
        name="email"
        v-model="email"
      />
      <br />
      <br />
      <button>Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminUpdateuser",
  prop: ["datas"],
  data() {
    return {
      // route: this.$route._id,
      id: "",
      name: "",
      email: "",
    };
  },
  methods: {
    async getUserById(id) {
      await axios.get("http://localhost:3000/api/users/" + id).then((res) => {
        this.id = res.data._id;
        this.name = res.data.name;
        this.email = res.data.email;
        this.isAdmin = res.data.isAdmin;
      });
    },
    async updateUser() {
      const postData = {
        name: this.name,
        email: this.email,
        isAdmin: this.isAdmin,
      };
      const headers = { authorization: this.token };
      console.log(postData);

      await axios
        .put("http://localhost:3000/api/users/account/" + this.id, postData, {
          headers: headers,
        })
        .then((res) => {
          alert("success");
          console.log(res.body);
        });
    },
  },
  async mounted() {
    this.getUserById(this.$route.params.id);
  },
};
</script>

<style scoped>
@import "../assets/css/admin_style.css";

.container {
  padding: 16px;
  width: 500px;

  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
  background-color: aquamarine;
}
input[type="email"],
input[type="text"] {
  width: 100%;
  height: 33px;
  padding: 20px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  background: #f1f1f1;
}
input[type="email"]:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

input[type="text"]:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

p a {
  text-decoration-line: underline;
}
</style>
/* eslint-disable */
