/* eslint-disable */
import { createWebHistory, createRouter} from 'vue-router'
import Movies from "../components/Movies"
import MovieDetails from "../components/MovieDetails"
import Uploadmovie from "../components/Uploadmovie"
import Login from "../components/Login"
import Signup from "../components/Signup" 

const routes = [
    {
        path: "/",
        name: "index",
        component: Movies
    },
    {
        path: "/moviedetails",
        name: "moviedetails",
        component: MovieDetails
    },
    {
        path: "/upload",
        name: "uploadmovie",
        component: Uploadmovie
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router