<template>

        <div class="flexbox-item" >
            <form class="container" @submit.prevent="updateMovie">
                <p><a style="text-decoration-line: underline"> <b>Noted: </b> </a> Just input what you want to change!</p>
                
                <br>
                <label >Title</label><br>
                <input type="text" placeholder="New Movietitle" name="title" v-model="title">
                <br>
                <label >Genre</label><br>
                <br>
                <input type="text" placeholder="New genre" name="genre" v-model="genre">
                <br>
                <label >Release Year</label><br>
                <input type="text" placeholder="New Release Date" name="year" v-model="year">
                <br>
                <label >Duration</label><br>
                <input type="text" placeholder="Duration" name="duration" v-model="duration">
                <br>
                <label >Synopsis</label><br>
                <input type="text" placeholder="Synopsis" name="synopsis" v-model="synopsis">
                <br>

                <br>
                <label >Image URL</label><br>
                <input type="text" placeholder="Update image url" name="imageUrl" v-model="imageUrl">
                <br>

                <label >Video URL</label><br>
                <input type="text" placeholder="Update video url" name="videoUrl" v-model="videoUrl">
                <br>

                <label >Download Url</label><br>
                <input type="text" placeholder="Download Url" name="downloadUrl" v-model="downloadUrl">
                <br>



                <br>
                <button class="signupbtn">Update</button>

            </form>

        </div>
</template>

<script>

import axios from 'axios'
export default{
    name: 'AdminUpdateMovie',
    props: ['datas'],
        data(){
            return{
            // route: this.$route._id,
            id: '',
            title: '',
            genre: '',
            year: '',
            duration: '',
            synopsis: '',
            videoUrl: '',
            imageUrl: '',
            downloadUrl:''

            }
    },

    methods:{
        async getMovieById(id) {
               await axios.get('http://localhost:3000/api/movies/'+ id)
               .then(res=> {
                   this.id = res.data._id
                   this.title= res.data.title
                   this.genre = res.data.genre
                   this.year = res.data.year
                   this.duration = res.data.duration
                   this.videoUrl = res.data.videoUrl
                   this.imageUrl = res.data.imageUrl
                   this.isAdmin = res.data.isAdmin
                   this.synopsis = res.data.synopsis
                   this.downloadUrl = res.data.downloadUrl
                
               })
        },

        async updateMovie(){
            const postData ={title: this.title, genre:this.genre,isAdmin:this.isAdmin, imageUrl:this.imageUrl, year:this.year, duration:this.duration, videoUrl:this.videoUrl , synopsis:this.synopsis, downloadUrl: this.downloadUrl};
            const headers = { authorization: this.token }
            console.log(postData);

            await axios
            .put("http://localhost:3000/api/movies/"+this.id, postData, {headers: headers})
            .then(res =>{
                alert("success")
                console.log(res.body);
            })
        }
    },

    async mounted(){
        this.getMovieById(this.$route.params.id)
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