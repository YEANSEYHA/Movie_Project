<template>
  
 <div class="flexbox-item flexbox-item-2">
            <table class="table">
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Action</th>
                </thead>
                
                <tbody v-for="data in datas" :key="data">
                    <tr>
                        <td data-label="ID">1</td>
                        <td data-label="Title">{{datas.title}}</td>
                        <td data-label="Genre">{{datas.genre}}</td>
                        <td data-label="Rating">4 <i class="fas fa-star"></i></td>
                        <td data-label="Action">
                            <i class="fas fa-edit"></i>
                            &nbsp;&nbsp;&nbsp;
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>
                </tbody>
                
            </table>
            



        </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'Listmovie',
    data(){
        return{
            datas:[],
            movie:'',
        }
    },
    async mounted(){
        var data2 = document.cookie.split("=");
        console.log(data2[1].split(";")[0])
       var response= await axios.get("http://localhost:3000/api/movies/",{
           headers:{
               authorization:"Bearer "+data2[1].split(";")[0]
           }
       }
       )

       this.datas = response.data
    }
}
</script>

<style>
@import '../assets/css/admin_style.css';


</style>