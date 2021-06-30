<template>
    <div class="container" >
        <h1>Profile</h1>
        <ul>
            <li>Name: {{name}}</li>
            <li>Email: {{email}}</li>
        </ul>
        <div class="flex-edit">
            <router-link to="/update-profile">Edit</router-link>
        </div>
    </div>
</template>

<script>
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


export default {
    name: "profile",
    
        data(){
        return{
            name: "",
            email: ""
        }
    },
    async mounted () {
        this.name = getCookie('name')
        this.email = getCookie('email')
    }
   

}
    
</script>

<style scoped>
.container {
  padding: 16px;
  width: 500px;
  height: 26vh;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.flex-edit {

    float: right;
}

</style>