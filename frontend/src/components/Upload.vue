<template>

        <div class="flexbox-item flexbox-item-2">
            <form @click.prevent="sendPost()">
                <label for="title">Title:</label>
                <br>
                <input type="text"  name="title" v-model="title">
                <br>

                <label for="Genre">Genre:</label>
                <br>
                <input type="text"  name="genre" v-model="genre">
                <br>

                <label for="imageUrl">Image URL:</label>
                <br>
                <input type="text"  name="imageUrl" v-model="imageUrl">
                <br>
            
                

                <button class="signupbtn">Upload Movie</button>

            </form>

        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'upload',
        data(){
            return{
            title: '',
            genre: '',
            imageUrl: '',
        }
    },

    methods:{
      async sendPost(){
        const postData ={title:this.title, genre:this.genre, imageUrl:this.imageUrl};
        await axios
          .post("http://localhost:3000/api/movies/", postData)
          .then(res =>{
            console.log(res.body);
          })
      }

    }
}
</script>

<style scoped>
@import '../assets/css/admin_style.css';

</style>