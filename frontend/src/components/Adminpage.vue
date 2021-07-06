<template>


    <div class="flexbox-container">
        <div class="flexbox-item flexbox-item-1">
            <router-link to="/adminpage/movies">
                <button style=" width:100%; height:50px; border-radius: 5px; background-color: #04AA6D; color: #f1f1f1" >Movies</button>

            </router-link>
            <br>
            <router-link to="/adminpage/user">
                <button style="width:100%; height:50px; border-radius: 5px; background-color: #04AA6D; color: #f1f1f1">Users</button>
            </router-link>
            <router-link to="/adminpage/upload">
                <button style="width:100%; height:50px; border-radius: 5px; background-color: #04AA6D; color: #f1f1f1">Upload Movie</button>
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
@import '../assets/css/admin_style.css';

.flex-item-1 button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 15px;
}

.flex-item-1 router-link button :hover {
  opacity:1;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}



</style>