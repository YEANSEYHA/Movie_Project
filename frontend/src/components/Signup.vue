<template>
<form @submit.prevent="registerAccount" style="border:0px solid #ccc">
  <div class="container">
      <h1>Sign Up</h1>
      
      <p>Please fill in this form to create an account.</p>
      <input type="text" placeholder="Name" name="name" v-model="name" required> 
      <input type="text" placeholder="Email" name="email" v-model="email"  required>     
      <input type="password" placeholder="Password" name="psw" v-model="password" required> 
      <input type="password" placeholder="Comfirm Password" name="psw-repeat" required>
   
      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
</template>

<script>
import axios from 'axios';


export default {
    name: 'formPost',
    data(){
      return{
        name: '',
        email: '',
        password: ''
      }
    },
    methods:{
      async registerAccount(){
        const postData ={name: this.name, email:this.email, password:this.password};
        await axios
          .post("http://localhost:3000/api/users/signup", postData)
          .then(res =>{
            console.log(res.body);
            window.location.pathname="/login";
          }).catch(error => {
            console.log('Show error notification!',error)
            }
          )
      }

    }
}

</script>
















<style scoped>

body {
  font-family: Arial, Helvetica, sans-serif;
  
  }
* {
  box-sizing: border-box;
 
  }
  h1{
    font-family: 'Poppins', sans-serif;
  }

/* Full-width input fields */
input[type=text], input[type=password] {
  border-radius: 10px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:hover, input[type=password]:hover {
  background-color: #ddd;
  outline: none;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}



/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

/* Extra styles for the cancel button */
.cancelbtn {
  
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  border-radius: 25px;
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
  width: 500px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>
