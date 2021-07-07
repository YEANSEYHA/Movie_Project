<template>
    <div class="header-box">
        <nav class="navbar">
            <div class="brand-title" >
                <router-link to="/">Palace Cinema</router-link>
            </div>

            <router-link to="/" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </router-link>
            <div class="navbar-links" >
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link v-if="isAdmin==true" to="/adminpage"> Dashboard</router-link></li>
                <li><router-link to="/livestream">LiveStream</router-link></li>
                <li><router-link v-if="name==''||name==undefined" to="/signup" >Sign up</router-link></li>
                <li v-if="name==''||name==undefined" ><router-link to="/login">Log in</router-link></li>
                <li v-else><router-link to="/profile" >{{name}}</router-link></li>
                
                <li >
                    <slot v-if="name==''||name==undefined"></slot>

                    <router-link v-else @click="logout" to="/">logout</router-link>
                    </li>
                    
                
            </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '../router';
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
export default{
    
    name: 'Header',
    props:['datas'],
    data(){
        return{
            route:this.$route.name,
            name:"",
            isAdmin:false,
        }
    },
    computed:{
        // name(){
        //    return document.cookie.split("=")[3];
        // }
    },
    async mounted(){
        this.name=getCookie('name')
        this.isAdmin=getCookie('isAdmin')
    },
    methods:{
        deleteCookie(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
        logout(){
           this.deleteCookie("name");
           this.deleteCookie("isAdmin");
           this.deleteCookie("token");
           this.deleteCookie("id");
           this.deleteCookie("email");
           this.name=""
           this.isAdmin = false;
            router.push({name:"index"});
            console.log(this.deleteCookie("token"))
        }
    },
   watch(){
           console.log(this.route);
        this.route = this.$route.name;
   }
    
}

</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}

.navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
}

.brand-title {
    font-size: 1.5rem;
    margin: .5rem;
}

.brand-title router-link {
    color: red;
}

.brand-title :hover {
    text-decoration: none;
    
    height: 20px;
    border-radius: 5px;
    color: red;  
}

.navbar-links {
    height: 100%;
}

.navbar-links .search-container {
    float: right;
}
.navbar-links input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }

.navbar-links .search-container button{
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.navbar-links .search-container button:hover{
    background: #ccc;
}
  

.navbar-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    list-style: none;
}



.navbar-links li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 1rem;
}

.navbar-links li:hover {
    background-color: #555;
    border-radius: 5px;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.toggle-button {
    position: absolute;
    top: .75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 800px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .toggle-button {
        display: flex;
    }

    .navbar-links {
        display: none;
        width: 100%;
    }

    .navbar-links ul {
        width: 100%;
        flex-direction: column;
    }

    .navbar-links ul li {
        text-align: center;
    }

    .navbar-links ul li a {
        padding: .5rem 1rem;
    }

    .navbar-links.active {
        display: flex;
    }
}














/* Background Styles Only */

@import url('https://fonts.googleapis.com/css?family=Raleway');

* {
    font-family: Raleway;
}

html {
    background-color: #DFDFDF;
}

.side-links {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.side-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 10px;
  color: white;
  width: 180px;
  padding: 10px 0;
  border-radius: 10px;
}

.side-link-youtube {
  background-color: red;
}

.side-link-twitter {
  background-color: #1DA1F2;
}

.side-link-github {
  background-color: #6e5494;
}

.side-link-text {
  margin-left: 10px;
  font-size: 18px;
}

.side-link-icon {
  color: white;
  font-size: 30px;
}

</style>
