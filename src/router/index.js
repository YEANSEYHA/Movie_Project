/* eslint-disable */
import { createWebHistory, createRouter } from "vue-router";
import Movies from "../components/Movies";
import MovieDetails from "../components/MovieDetails";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Adminpage from "../components/Adminpage";
import Upload from "../components/Upload";
import User from "../components/User";
import Listmovie from "../components/Listmovie";
import Header from "../components/Header";
import UpdateUser from "../components/UpdateUser";
import UserProfile from "../components/UserProfile";
import AdminUpdateUser from "../components/AdminUpdateUser";
import AdminUpdateMovie from "../components/AdminUpdateMovie";

import LiveStream from "../components/LiveStream.vue";
import ReportMessage from "../components/ReportMessage.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Header,
    redirect: {
      name: "movies",
    },
    children: [
      {
        path: "/livestream",
        name: "LiveStream",
        component: LiveStream,
      },
      {
        path: "profile",
        name: "profile",
        component: UserProfile,
      },
      {
        path: "movies",
        name: "movies",
        component: Movies,
      },
      {
        //Route param
        path: "movies/:id",
        name: "MovieDetails",
        component: MovieDetails,
        props: true,
      },

      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "signup",
        name: "signup",
        component: Signup,
      },
      {
        path: "update-profile",
        name: "update",
        component: UpdateUser,
      },
      {
        path: "adminpage",
        name: "adminpage",
        component: Adminpage,
        redirect: {
          name: "listmovie",
        },
        beforeEnter: (to, from, next) => {
          var data = document.cookie.split("=");

          var token = data[1].split(";")[0];
          var admin = data[2].split(";")[0];
          console.log(from);
          console.log(data, admin);
          if (
            to.name == "listmovie" ||
            to.name == "user" ||
            to.name == "uploadmovie" ||
            (to.name == "update" && token && admin == "true")
          ) {
            next();
          } else next({ name: "login" });
        },
        children: [
          {
            path: "movies",
            name: "listmovie",
            component: Listmovie,
          },
          {
            path: "user",
            name: "user",
            component: User,
          },
          {
            path: "upload",
            name: "uploadmovie",
            component: Upload,
          },
          {
            path: "update-account/:id",
            name: "AdminUpdateUser",
            component: AdminUpdateUser,
          },
          {
            path: "update-movie/:id",
            name: "AdminUpdateMovie",
            component: AdminUpdateMovie,
          },
          {
            path: "reports",
            name: "ReportMessage",
            component: ReportMessage,
          },
        ],
      },
    ],
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
/* eslint-disable */
