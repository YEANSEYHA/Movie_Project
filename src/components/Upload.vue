/* eslint-disable */
<template>
  <div class="flexbox-item flexbox-item-2">
    <form class="container" @click.prevent="sendPost()">
      <input
        type="text"
        placeholder="Title"
        name="title"
        id="title"
        v-model="title"
        required
      />

      <input
        type="text"
        placeholder="Genre"
        name="genre"
        id="genre"
        v-model="genre"
        required
      />

      <input
        type="text"
        placeholder="Release Year"
        name="year"
        id="year"
        v-model="year"
        required
      />

      <input
        type="text"
        placeholder="Movie Duration"
        name="duration"
        id="duration"
        v-model="duration"
        required
      />

      <input
        type="text"
        placeholder="Synopsis"
        name="synopsis"
        id="synopsis"
        v-model="synopsis"
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        name="imageUrl"
        id="imageUrl"
        v-model="imageUrl"
        required
      />

      <input
        type="text"
        placeholder="Video URL"
        name="videoUrl"
        id="videoUrl"
        v-model="videoUrl"
        required
      />

      <input
        type="text"
        placeholder="Download URL"
        name="downloadUrl"
        id="downloadUrl"
        v-model="downloadUrl"
        required
      />
      <br />
      <br />

      <button type="submit" class="signupbtn">Upload Movie</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "upload",
  data() {
    return {
      title: "",
      genre: "",
      year: "",
      duration: "",
      synopsis: "",
      imageUrl: "",
      videoUrl: "",
      downloadUrl: "",
    };
  },

  methods: {
    async sendPost() {
      const postData = {
        title: this.title,
        genre: this.genre,
        year: this.year,
        duration: this.duration,
        synopsis: this.synopsis,
        imageUrl: this.imageUrl,
        videoUrl: this.videoUrl,
        downloadUrl: this.downloadUrl,
      };
      await axios
        .post("http://localhost:3000/api/movies", postData)
        .then((res) => {
          alert("Upload Success");
          console.log(res.body);
        });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/admin_style.css";

.container {
  padding: 16px;
  width: 500px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  background-color: aquamarine;
}
.container bottom {
  padding: 5px;
}

input[type="text"] {
  border-radius: 5px;
  width: 100%;
  height: 25px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:hover {
  background-color: #ddd;
  outline: none;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
/* eslint-disable */
