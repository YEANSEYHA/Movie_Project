/* eslint-disable */
<template>
  <div class="flexbox-item flexbox-item-2">
    <table class="table">
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Genre</th>
        <th>Duration</th>
        <th>Release Date</th>
        <th>Views</th>
        <th>Action</th>
      </thead>

      <tbody v-for="data in datas" :key="data">
        <tr>
          <td data-label="ID">1</td>
          <td data-label="Title">{{ data.title }}</td>
          <td data-label="Genre">{{ data.genre }}</td>
          <td data-label="Duration">{{ data.duration }}</td>
          <td data-label="Release Date">{{ data.year }}</td>
          <td data-label="Rating">
            {{ data.nbView }} <i class="fas fa-eye"></i>
          </td>
          <td data-label="Action">
            <button>
              <router-link :to="{ path: '/adminpage/update-movie/' + data._id }"
                ><i class="fas fa-edit m-2"></i
              ></router-link>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button @click="deleteMovie(data._id)">
              <i class="fas fa-trash m-2"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return parts
      .pop()
      .split(";")
      .shift();
}
export default {
  name: "Listmovie",
  methods: {
    async deleteMovie(id) {
      await axios
        .delete("http://localhost:3000/api/movies/" + id, {
          headers: {
            authorization: this.token,
          },
        })
        .then(() => {
          location.reload();
        });
    },
  },
  data() {
    return {
      datas: [],
      movie: "",
      token: "",
    };
  },
  // Mounted user with DB
  async mounted() {
    this.token = "Bearer " + getCookie("token");
    var response = await axios.get("http://localhost:3000/api/movies", {
      headers: {
        authorization: this.token,
      },
    });

    this.datas = response.data;
    console.log(this.datas);
  },
};
</script>

<style>
@import "../assets/css/admin_style.css";
</style>
/* eslint-disable */
