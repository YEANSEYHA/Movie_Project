/* eslint-disable */
<template>
  <form class="back_img" @submit.prevent="loginAccount">
    <div class="container">
      <h1>Login</h1>
      <p>Pleae Login in to your account to watch your favorite movies</p>

      <input
        type="email"
        placeholder="Email"
        name="uname"
        v-model="email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        name="psw"
        required
      />
      <div class="btn-sub">
        <button type="submit" class="login-btn">Login</button>
        <button type="button" class="cancelbtn">Cancel</button>
      </div>
      <span class="psw">Forgot password</span>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginAccount() {
      var response = await axios.post("http://localhost:3000/api/users/login", {
        email: this.email,
        password: this.password,
      });
      if (response.data.token) {
        document.cookie = "token=" + response.data.token;
        document.cookie = "isAdmin=" + response.data.isAdmin;
        document.cookie = "id=" + response.data._id;
        document.cookie = "name=" + response.data.name;
        document.cookie = "email=" + response.data.email;

        if (response.data.isAdmin) {
          // router.push({name:"adminpage"});
          window.location.pathname = "/adminpage";
        } else if (!response.data.isAdmin) {
          // router.push({path:"/"});
          window.location.pathname = "/";
        }
      } else {
        alert("Invalid Account");
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
h1 {
  font-family: "Poppins", sans-serif;
  color: #f1f1f1;
}

form {
  border: 0px solid #ccc;
}

.back_img {
  padding-top: 100px;
  background-image: url("~@/assets/movies_background.jpg");
  height: 90vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  box-sizing: border-box;
  border-radius: 15px;
  background: #f1f1f1;
}
input[type="email"]:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

input[type="password"]:hover {
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
}

button:hover {
  opacity: 0.8;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.login-btn {
  padding: 10px 18px;
  color: #f1f1f1;
  background-color: #04aa6d;
  border-radius: 25px;
  float: left;
  width: 50%;
}

.cancelbtn {
  padding: 10px 18px;
  background-color: #f44336;
  border-radius: 25px;
  float: left;
  width: 50%;
}

.container {
  padding: 16px;
  width: 500px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn {
    width: 100%;
  }
}
</style>
/* eslint-disable */
