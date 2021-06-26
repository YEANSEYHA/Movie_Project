<template>


    <div class="flexbox-container">
        <div class="flexbox-item flexbox-item-1">
            <router-link to="/adminpage/movies">
             <button style="width:100%; height:50px;">Movies</button>

            </router-link>
            <br>
            <router-link to="/adminpage/user">
            <button style="width:100%; height:50px;">Users</button>
            </router-link>
            <router-link to="/adminpage/upload">
            <button style="width:100%; height:50px;">Upload Movie</button>
            </router-link>
            
        </div>
        <router-view></router-view>       
    </div>

  
</template>

<script>
export default {
    name: 'adminpage',
 
}
</script>

<style>
@import '../assets/css/admin_style.css'


</style>