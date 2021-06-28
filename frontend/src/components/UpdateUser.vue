<template>

        <div class="flexbox-item flexbox-item-2">
            <form>
                <label for="name">Username:</label>
                <br>
                <input type="text"  name="name" v-model="name">
                <br>
                <label for="Genre">Email:</label>
                <br>
                <input type="email"  name="email" v-model="email">
                <br>
                <br>
                <button class="signupbtn"   >Update</button>

            </form>

        </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'update',
        data(){
            return{
            name: '',
            email: ''
        }
    },
    // methods:{
    //   async updateUser(){
    //     const postData ={naem: this.name, email:this.email};
    //     await axios
    //       .post("http://localhost:3000/api/movies/", postData)
    //       .then(res =>{
    //         console.log(res.body);
    //       })
    //   }

    // }
}
</script>

<style scoped>
@import '../assets/css/admin_style.css';

.flexbox{
    padding: 15px;
}


</style>