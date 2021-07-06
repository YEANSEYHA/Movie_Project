<template>

        <div class="flexbox-item flexbox-item-2">
            <form class="container" @click.prevent="sendPost()">
                
                <input type="text" placeholder="Title" name="title" v-model="title">
               
                <input type="text" placeholder="Genre" name="genre" v-model="genre">
                
                <input type="text" placeholder="Release Year" name="year" v-model="year">
               
                <input type="text" placeholder="Movie Duration" name="duration" v-model="duration">
                
                <input type="text" placeholder="Synopsis" name="synopsis" v-model="synopsis">
               
                <input type="text" placeholder="Image URL" name="imageUrl" v-model="imageUrl">
                
                <input type="text" placeholder="Video URL" name="videoUrl" v-model="videoUrl">
                
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

.container {
  padding: 16px;
  width: 500px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: aquamarine;
}
.container bottom {
  padding: 5px;
}

input[type=text]{
  border-radius: 5px;
  width: 100%;
  height: 25px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:hover {
  background-color: #ddd;
  outline: none;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

}

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
</style>