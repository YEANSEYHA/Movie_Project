<template>
  
 <div class="flexbox-item flexbox-item-2">
            <table class="table">
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                </thead>
                
                <tbody v-for="data in datas" :key="data">
                    <tr>
                        <td data-label="ID">1</td>
                        <td data-label="Title">{{data.movietitle}}</td>
                        <td data-label="Genre">{{data.message}}</td>

                    </tr>
                </tbody>
                
            </table>

        </div>

</template>

<script>
import axios from 'axios'
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default {
    name: 'ReportMessage',
    data(){
        return{
            datas:[],
            token:'',
        }
    },
    //Mounted report message to Component
    async mounted(){
        this.token = "Bearer "+getCookie('token');
        var response= await axios.get("http://localhost:3000/api/movies/reports/",{
           headers:{
               authorization: this.token
           }
       }
       )
    this.datas = response.data
    console.log(this.datas)
    },
}
</script>

<style>
@import '../assets/css/admin_style.css';


</style>