<template>
        <div class="flexbox-item flexbox-item-2">
            <table class="table">
                <thead>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody v-for="data in datas" :key="data">
                    <tr>
                        <td data-label="Username">{{data.name}}</td>
                        <td data-label="Email">{{data.email}}</td>
                        <td data-label="Action">
                            <i class="fas fa-edit m-2"></i>
                            <!-- &nbsp;&nbsp;&nbsp; -->
                            <i class="fas fa-trash m-2"></i>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Users',
    data(){
        return{
            datas:[],
            user:'',
        }
    },
    async mounted(){
        var data2 = document.cookie.split("=");
        console.log(data2[1].split(";")[0])
       var response= await axios.get("http://localhost:3000/api/users/",{
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
@import '../assets/css/admin_style.css'

</style>