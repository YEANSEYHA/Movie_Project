import { createWebHistory, createRouter} from 'vue-router'
import Movies from "../components/Movies"
import MovieDetails from "../components/MovieDetails"
import Uploadmovie from "../components/Uploadmovie"
import Login from "../components/Login"

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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router