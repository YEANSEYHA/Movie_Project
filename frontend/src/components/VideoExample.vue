/* eslint-disable */
<template>
  <div>
		<video-player :options="videoOptions"/>
	</div>
</template>
/* eslint-disable */
<script>
/* eslint-disable */
import VideoPlayer from "./VideoPlayer.vue";
// eslint-disable-next-line

export default {
	name: "VideoExample",
	components: {
		VideoPlayer
	},
	data() {
		return {
			videoOptions: {
				autoplay: true,
				controls: true,
				sources: [
					{
						src: "http://192.168.1.6:8080/hls/test.m3u8",
							/* "../assets/test2.mp4", */
                            
						  type: 'application/x-mpegURL'
					}
				]
			}
		};
	}
};
</script>