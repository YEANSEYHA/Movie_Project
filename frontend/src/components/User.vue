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
                            <button ><router-link :to="{ path: '/adminpage/update-account/'+data._id}"><i class="fas fa-edit m-2"></i></router-link></button>
                            <!-- &nbsp;&nbsp;&nbsp; -->
                            <button @click="deleteUser(data._id)"><i class="fas fa-trash m-2"></i></button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
</template>

<script>
import axios from 'axios';
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
export default {
    name: 'Users',
    methods: {
        async deleteUser(id) {
            await axios.delete("http://localhost:3000/api/users/"+ id,{
                headers:{
                    authorization: this.token
                }
            }).then(()=>{
                location.reload();
          })
        },
    },
    data(){
        return{
            datas:[],
            user:'',
            token:'',
        }
    },
    async mounted(){
        this.token = "Bearer "+getCookie('token');
        var response= await axios.get("http://localhost:3000/api/users/signup",{
           headers:{
               authorization: this.token
           }
       }
       )

       this.datas = response.data
    },
}
</script>

<style>
@import '../assets/css/admin_style.css';

</style>