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

                <label for="year">Release Year:</label>
                <br>
                <input type="text"  name="year" v-model="year">
                <br>

                <label for="duration">Movie Duration :</label>
                <br>
                <input type="text"  name="duration" v-model="duration">
                <br>

                <label for="synopsis">Synopsis</label>
                <br>
                <input type="text"  name="synopsis" v-model="synopsis">
                <br>

                <label for="imageUrl">Image URL:</label>
                <br>
                <input type="text"  name="imageUrl" v-model="imageUrl">
                <br>

                <label for="videoUrl">Video URL:</label>
                <br>
                <input type="text"  name="videoUrl" v-model="videoUrl">
                <br>
            
                

                <button type="submit" class="signupbtn">Upload Movie</button>

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
            year: '',
            duration: '',
            synopsis: '',
            imageUrl: '',
            videoUrl: '',
        }
    },

    methods:{
      async sendPost(){
        const postData ={title:this.title, genre:this.genre, year:this.year, duration:this.duration, synopsis:this.synopsis, imageUrl:this.imageUrl, videoUrl:this.videoUrl};
        await axios
          .post("http://localhost:3000/api/movies", postData)
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