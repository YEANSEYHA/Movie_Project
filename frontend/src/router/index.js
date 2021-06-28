/* eslint-disable */
import { createWebHistory, createRouter} from 'vue-router'
import Movies from "../components/Movies"
import MovieDetails from "../components/MovieDetails"
import Login from "../components/Login"
import Signup from "../components/Signup"
import Adminpage from "../components/Adminpage"
import Upload from "../components/Upload"
import User from "../components/User"
import Listmovie from '../components/Listmovie'
import Header from '../components/Header'
import UpdateUser from '../components/UpdateUser'


const routes = [
    {
        path: "/",
        name: "index",
        component:Header,
        redirect:{
            name:"movies"
        },
        children:[
            {
                path:"movies",
                name:"movies",
                component:Movies,
            },
            {
                path: "moviedetails",
                name: "moviedetails",
                component: MovieDetails
            },
           
            {
                path: "login",
                name: "login",
                component: Login
            },
            {
                path: "signup",
                name: "signup",
                component: Signup
            },
            {
                path: "adminpage",
                name: "adminpage",
                component: Adminpage,
                redirect:{
                    name:'listmovie'
                },
                beforeEnter:(to,from,next)=>{
                    var data= document.cookie.split("=")
                    
                    var token=data[1].split(";")[0]
                    var admin = data[2].split(";")[0]
                    console.log(from)
                    console.log(data,admin)
                    if(to.name=="listmovie"||to.name=="user"||to.name=="uploadmovie" || to.name=="update" &&token&&admin=="true"){ 
                        next()
                    }else next({name:"login"})
                },
                children:[
                    {
                        path:'movies',
                        name:'listmovie',
                        component:Listmovie
                    },
                    {
                        path: "user",
                        name: "user",
                        component: User
                    },
                    {
                        path: "upload",
                        name: "uploadmovie",
                        component: Upload
                    },
                    {
                        path: "update",
                        name: "update",
                        component: UpdateUser
                    }
                ]
                
             
            },
        ]
    },

]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router