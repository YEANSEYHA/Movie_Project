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
                <tbody>
                    <tr>
                        <td data-label="ID">1</td>
                        <td data-label="Title">SpiderMan</td>
                        <td data-label="Genre">Fighting</td>
                        <td data-label="Rating">4 <i class="fas fa-star"></i></td>
                        <td data-label="Action">
                            <i class="fas fa-edit"></i>
                            &nbsp;&nbsp;&nbsp;
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>

                    <tr>
                        <td data-label="ID">2</td>
                        <td data-label="Title">Avenger</td>
                        <td data-label="Genre">Fighting</td>
                        <td data-label="Rating">4 <i class="fas fa-star"></i></td>
                        <td data-label="Action">
                            <i class="fas fa-edit"></i>
                            &nbsp;&nbsp;&nbsp;
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>

                    <tr>
                        <td data-label="ID">2</td>
                        <td data-label="Title">Avenger</td>
                        <td data-label="Genre">Fighting</td>
                        <td data-label="Rating">4 <i class="fas fa-star"></i></td>
                        <td data-label="Action">
                            <i class="fas fa-edit"></i>
                            &nbsp;&nbsp;&nbsp;
                            <i class="fas fa-trash"></i>
                        </td>
                    </tr>

                    <tr>
                        <td data-label="ID">2</td>
                        <td data-label="Title">Avenger</td>
                        <td data-label="Genre">Fighting</td>
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
export default {
    name: 'Listmovie',
    data(){
        return{
            datas:[],
            user:'',
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