/* eslint-disable */
<template>
  <body>
    <center>
      <video-player :options="videoOptions" />
    </center>
  </body>
</template>
/* eslint-disable */
<script>
/* eslint-disable */
import VideoPlayer from "./VideoPlayer.vue";
// eslint-disable-next-line

export default {
  name: "LiveStream",
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        width: 1080,

        autoplay: true,
        controls: true,
        sources: [
          {
            // This url point to localhost by using Nginx as the server
            src: "http://192.168.1.6:8080/hls/test.m3u8",
            /* "../assets/test2.mp4", */

            type: "application/x-mpegURL",
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
body {
  padding-top: 25px;
  background-color: rgb(112, 104, 104);
}
</style>
/* eslint-disable */
