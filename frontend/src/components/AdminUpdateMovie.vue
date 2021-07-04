<template>

        <div class="flexbox-item" >
            <form class="container" @submit.prevent="updateMovie">
                <p><a style="text-decoration-line: underline"> <b>Noted: </b> </a> Just input what you want to change!</p>
                <label for="name">New movie title</label>
                <br>
                <input type="text" placeholder="New Movietitle" name="title" v-model="title">
                <br>
                <label for="Genre">New genre</label>
                <br>
                <input type="text" placeholder="New genre" name="genre" v-model="genre">
                <br>
                <br>
                <button class="signupbtn"   >Update</button>

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

            }
    },

    methods:{
        async getMovieById(id) {
               await axios.get('http://localhost:3000/api/movies/'+ id)
               .then(res=> {
                   this.id = res.data._id
                   this.title= res.data.title
                   this.genre = res.data.genre
                   this.isAdmin = res.data.isAdmin
                
               })
        },

        async updateMovie(){
            const postData ={title: this.title, genre:this.genre,isAdmin:this.isAdmin};
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