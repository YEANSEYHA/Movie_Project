<template>

        <div class="flexbox-item" >
            <form class="container" @submit.prevent="updateUser">
                <p><a style="text-decoration-line: underline"> <b>Noted: </b> </a> Just input what you want to change!</p>
                <label for="name">New Username</label>
                <br>
                <input type="text" placeholder="New Username" name="name" v-model="name">
                <br>
                <label for="Genre">New email:</label>
                <br>
                <input type="email" placeholder="New Email" name="email" v-model="email">
                <br>
                <br>
                <button class="signupbtn"   >Update</button>

            </form>

        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AdminUpdateuser',
    prop: ['datas'],
        data(){
            return{
            // route: this.$route._id,
            id: '',
            name: '',
            email: '',
            
        }
    },
    methods:{
        async getUserById(id) {
               await axios.get('http://localhost:3000/api/users/',+ id)
               .then(res=> {
                   this.id= res._id
                   this.name = res.name
                   this.email = res.email
               })
        },
        async updateUser(){
            const postData ={_id: this.id, name: this.name, email:this.email};
            const headers = { authorization: this.token }
            console.log(postData);

            await axios
            .put("http://localhost:3000/api/users/account"+ postData, {headers: headers})
            .then(res =>{
                alert("success")
                console.log(res.body);
            })
        }

    },
    async mounted(){
        console.log(this.$route.params.id)
        this.getUserById()
    },
    
}
</script>

<style scoped>
@import '../assets/css/admin_style.css';

.container {
   padding: 16px;
   width: 500px;
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
   border-radius: 15px;
   background-color: aquamarine;
}
input[type=email], input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  box-sizing: border-box;
  border-radius: 15px;
  background: #f1f1f1;
}
input[type=email]:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

input[type=text]:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.signup button{
    border-radius: 5px;
    
}


p {
    color: black;
}
p a {
    text-decoration-line: underline;
}


</style>