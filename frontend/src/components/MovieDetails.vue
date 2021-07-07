<template>
<div>
    <div class="movie-details-area" style="background:rgb(112, 104, 104)">
                <div class="container">
                    <div class="row align-items-center position-relative">
                        <div class="col-xl-3 col-lg-4">
                            <div class="movie-details-img">
                                <img src="img/poster/movie_details_img.jpg" alt="">
                                <img v-bind:src="imageUrl" alt="">
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-8">
                            <div class="movie-details-content">
                                <h5>Palace Cinema</h5>
                                <h2><span>{{ title }}</span></h2>
                                <div class="banner-meta">
                                    <ul>
                                        <li class="quality">
                                            <span>Pg 18</span>
                                            <span>hd</span>
                                        </li>
                                        <li class="category">
                                            <a href="#">{{genre}}</a>
                                            <!-- <a href="#">Drama</a> -->
                                        </li>
                                        <li class="release-time">
                                            <span><i class="far fa-calendar-alt"></i> {{year}}</span>
                                            <span><i class="far fa-clock"></i>{{duration}}</span>
                                        </li>
                                    </ul>
                                </div>
                                <p>{{synopsis}}</p>
                                <div class="movie-details-prime">
                                    <ul>
                                        <li class="share"><a href="#"><i class="fas fa-share-alt"></i> Share</a></li>
                                        <li class="streaming">
                                            <h6>Prime Video</h6>
                                            <span>Streaming Channels</span>
                                        </li>
                                        <li class="watch"><a href="#" class="btn popup-video"><i class="fas fa-play"></i> Watch Now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="movie-details-btn">
                            <a href="img/poster/movie_details_img.jpg" class="download-btn" download="">Download <img src="fonts/download.svg" alt=""></a>
                        </div>
                    </div>
                </div>

                
    </div>
    <center style="background:rgb(112, 104, 104)">
        <div style="position:relative; overflow:hidden; padding-bottom:56.25%; padding-top:10px;  height: 720px "> 
            <iframe v-bind:src="videoUrl" width="1080" height="720" frameborder="0" scrolling="auto" title="Real Madrid Vs Liverpool - 3 1. Match Highlights. Uefa Champions League Final 2018"  allowfullscreen></iframe>
        </div>
    </center>
      <div class="container-fluid my-5">
		<div class="row">
			
			<div class="col-12">

				

				<!-- Post Begins -->
				<section class="card mt-4">
					<div class="border p-2">
						<!-- post header -->
						<div class="row m-0">

							<!-- <div class="">
								<a class="text-decoration-none" href="#">
									<img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="...">
								</a>
							</div> -->
							<div class="flex-grow-1 pl-2">
								<a class="text-decoration-none" href="#">
									<h2 class="text-capitalize h5 mb-0" > Comment Box</h2>
								</a> 
								<!-- <p class="small text-secondary m-0 mt-1">1 day ago</p> -->
							</div>
							

						</div>
						<!-- post body -->
						<div class="" v-for="review in reviews" :key="review" >
							<p class="my-2" style="color: black;" >
								<a style="font-weight: bold;">Commenter:</a> {{review.comment}}
                
							</p>
						</div>
						
					</div>
				</section>
				<!-- Post Ends -->

                <!--- Post Form Begins -->
                <section class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make a comment
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form @submit.prevent="postComment" class="card-body">
                            
                            <textarea placeholder="Comment Here" name="comment" rows="4" cols="100" v-model="comment"></textarea>
                            <button class="signupbtn">Post</button>
                    </form>
                </section>
                <!--- Post Form Ends -->
			</div>
			
		</div>
	</div>
    <div class="container-fluid my-5">
		<div class="row">
			
			<div class="col-12">

                <!--- Post Form Begins -->
                <section class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Report Technical Problems
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form @submit.prevent="postReport" class="card-body">

                            <input type="text" id="movietitle" placeholder="Enter movie title or URL" name="movietitle" v-model="movietitle"><br><br>
                            <textarea placeholder="Report the technical problems" name="message" rows="4" cols="100" v-model="message"></textarea>
                            <button class="signupbtn">Post</button>
                    </form>
                </section>
                <!--- Post Form Ends -->
			</div>
			
		</div>
	</div>
    
</div>
</template>

<script>
import axios from 'axios'
export default {
//    props: ['id','genre','year','duration','synopsis','imageUrl','videoUrl','title','reviews'], 
    props:{
        id: String,
        /* genre: String,
        year: String,
        duration: String,
        synopsis: String,
        imageUrl: String,
        videoUrl: String, */
        /* title: String, */
    },
    name: 'MovieDetails',
  
    data (){
        return{
            
            genre:"",
            year:"",
            duration:"",
            synopsis:"",
            imageUrl:"",
            videoUrl:"",
            title:"",
            reviews:[]
        }
    },
    async mounted(){
        let {data} = await axios.get("http://localhost:3000/api/movies/"+this.id);
        
        this.reviews=data.reviews,
        this.title=data.title
        this.duration=data.duration
        this.synopsis=data.synopsis
        this.imageUrl=data.imageUrl
        this.videoUrl=data.videoUrl
        this.genre=data.genre

    },
    methods:{
        
        async postComment(){
            const postData = {comment: this.comment};
            await axios.post('http://localhost:3000/api/movies/'+this.id+'/reviews',postData)
            .then(res =>{
                alert("Comment success")
                console.log(res.body);
                console.log(this.reviews)
            })
        },
        async postReport(){
            const postData = {movietitle: this.movietitle, message: this.message}
            await axios.post('http://localhost:3000/api/movies/reports', postData)
            .then(res =>{
                alert("Report Successfully")
                console.log(res.body)
            })
        }
    },
       
}
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

/* comment area */

.card-body button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
  float: right;
}
.card-body button:hover {
  opacity:1;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}


/* end */

.movie-details-area {
    background-position: top center;
    background-size: cover;
    padding: 175px 0 120px;
}
.movie-details-img {
    position: relative;
}
.movie-details-img .popup-video {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
.movie-details-img img {
    border-radius: 5px;
}
.movie-details-content {
    margin-left: 23px;
}
.movie-details-content h5 {
    font-size: 26px;
    margin-bottom: 10px;
    color: #e4d804;
}
.movie-details-content h2 {
    font-size: 60px;
    margin-bottom: 20px;
}
.movie-details-content .banner-meta {
    margin-bottom: 15px;
}
.movie-details-content h2 > span,
.movie-details-prime ul li.share a:hover {
    color: #e4d804;
}
.movie-details-content p {
    margin-bottom: 0;
}
.movie-details-prime ul {
    display: flex;
    align-items: center;
    max-width: 475px;
    background: #242c38;
    border-radius: 4px;
    border: 1px solid #343434;
    padding: 0px 25px 25px;
    margin-top: 35px;
    flex-wrap: wrap;
}
.movie-details-prime ul li {
    margin-top: 25px;
}
.movie-details-prime ul li.share {
    padding-right: 25px;
    margin-right: 25px;
    position: relative;
    text-align: center;
}
.movie-details-prime ul li.share::before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 56px;
    background: #fff;
    opacity: .15;
}
.movie-details-prime ul li.share a {
    display: block;
    color: #bcbcbc;
    font-size: 12px;
    font-weight: 500;
}
.movie-details-prime ul li.share a i {
    display: block;
    margin-bottom: 7px;
    font-size: 16px;
    color: #fff;
}
.movie-details-prime ul li.streaming h6 {
    font-size: 16px;
    margin-bottom: 5px;
}
.movie-details-prime ul li.streaming span {
    display: block;
    color: #bcbcbc;
    font-size: 12px;
}
.movie-details-prime ul li.watch {
    margin-left: auto;
}
.movie-details-prime ul li.watch .btn {
    font-size: 10px;
    padding: 13px 26px;
    letter-spacing: 0;
    background: transparent;
}
.movie-details-prime ul li.watch .btn:hover {
    background: #e4d804;
}
.movie-details-btn .download-btn {
    background: #e4d804;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #14141d;
    letter-spacing: 5px;
    position: absolute;
    bottom: 65px;
    right: -50px;
    transform: rotate(90deg);
    padding: 43px 49px;
    border-radius: 6px;
}
.episode-bg {
    background-position: top center;
    background-size: cover;
    padding: 120px 0 115px;
}
.episode-top-wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 25px;
    position: relative;
    margin-bottom: 35px;
    flex-wrap: wrap;
}
.episode-watch-wrap::after,
.episode-top-wrap::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(0, 0, 0);
    box-shadow: 0px 1px 3px 0px rgb(102 102 102 / 46%);
}
.episode-top-wrap .section-title .title {
    font-size: 30px;
}
.total-views-count p {
    margin-bottom: 0;
    color: #e3dfdf;
}
.total-views-count p i {
    margin-left: 12px;
    color: #e4d804;
}
.episode-watch-wrap .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: transparent;
    background-clip: border-box;
    border: none;
    border-radius: 0;
    margin-bottom: 35px;
}
.episode-watch-wrap .card .card-header {
    padding: 0;
    margin-bottom: 0;
    background-color: transparent;
    border-bottom: none;
    margin: 0;
}
.episode-watch-wrap .card .card-header button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    color: #e0e0e0;
}
.episode-watch-wrap .card .card-header button .season {
    font-size: 16px;
    font-weight: 700;
    width: 50%;
    flex: 0 0 50%;
}
.episode-watch-wrap .card-body ul li a:hover,
.episode-watch-wrap .card-body ul li a i,
.episode-watch-wrap .card .card-header button .video-count {
    color: #e4d804;
}
.episode-watch-wrap .card .card-header button.collapsed .video-count {
    color: #9b9b9b;
}
.episode-watch-wrap .card .card-body {
    padding: 0 0;
}
.episode-watch-wrap .card-body ul {
    margin-top: 25px;
    background: #040406;
    padding: 30px 30px 40px;
}
.episode-watch-wrap .card-body ul li {
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #242426;
}
.episode-watch-wrap .card-body ul li:last-child {
    margin-bottom: 0;
}
.episode-watch-wrap .card-body ul li .duration {
    float: right;
    color: #e3dfdf;
}
.episode-watch-wrap .card-body ul li .duration i {
    color: #e4d804;
    margin-right: 7px;
}
.episode-watch-wrap .card-body ul li a {
    font-size: 16px;
    font-weight: 600;
    color: #c8c8c8;
}
.episode-watch-wrap .card-body ul li a i {
    font-size: 12px;
    margin-right: 15px;
}
.episode-watch-wrap .card:last-child {
    margin-bottom: 0;
}
.episode-watch-wrap {
    padding-bottom: 20px;
    position: relative;
}
.episode-img img {
    max-width: 100%;
}
.movie-episode-wrap {
    margin-right: 20px;
}
.movie-history-wrap .title {
    font-size: 24px;
    background: rgba(0, 0, 0, 0.349);
    border: 1px solid #29272f;
    padding: 25px 40px;
    position: relative;
    margin-bottom: 30px;
}
.movie-history-wrap .title span {
    color: #e4d804;
}
.movie-history-wrap p {
    margin-bottom: 0;
    padding: 0 35px;
}
.movie-history-wrap {
    margin-top: 75px;
}

/* 2. Header */
.custom-container {
	max-width: 1420px;
}

/* 6. Banner */
.banner-bg {
    padding: 295px 0 273px;
    background-position: center;
    background-size: cover;
}
.banner-content .sub-title {
	font-size: 26px;
	margin-bottom: 10px;
}
.banner-content .title {
    font-size: 60px;
    line-height: 1.2;
    margin-bottom: 29px;
}
.banner-meta {
    margin-bottom: 35px;
}
.banner-meta ul {
    display: flex;
    flex-wrap: wrap;
}
.banner-meta ul li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
	margin-right: 18px;
}
.banner-meta ul li:last-child {
	margin-right: 0;
}
.banner-meta ul li.quality > span {
    font-size: 11px;
    text-transform: uppercase;
    color: #21232b;
    background: #fff;
    font-weight: 700;
    padding: 7px 11px;
    line-height: 1;
}
.banner-meta ul li.quality > span:last-child {
    background: transparent;
    color: #fff;
    margin-left: 9px;
    border: 2px solid #fff;
    padding: 5px 10px;
}
.banner-meta ul li.category > a {
    font-size: 14px;
    font-weight: 500;
    color: #e3dfdf;
}
.banner-meta ul li.category > a + a {
    margin-left: 5px;
}
.banner-meta ul li.release-time > span {
    font-size: 14px;
    font-weight: 500;
    color: #e3dfdf;
}
.banner-meta ul li.release-time > span + span {
	margin-left: 15px;
}
.banner-meta ul li.release-time > span > i {
	font-size: 12px;
	margin-right: 5px;
}
.slider-bg {
    background-position: top center;
    background-size: cover;
    padding: 135px 0 120px;
}
.slider-img > img {
    display: inline-block;
    border-radius: 8px;
    box-shadow: 0px 1px 13px 0px rgba(25, 25, 25, 0.004);
    max-width: 100%;
    margin-right: -15px;
}

/* Extra large devices (large desktops, 1800px and up) */
@media (max-width: 1500px) {
    .custom-container {
        max-width: 1330px;
    }
    .banner-bg {
        padding: 260px 0 200px;
        background-position: right center;
    }
}

@media (max-width: 1199.98px) {
    .custom-container {
        max-width: 960px;
    }
}

/* Large devices (desktops, 992px and up) */
@media (max-width: 991.98px) {
    .custom-container {
        max-width: 720px;
    }
}

/* Small devices (landscape phones, 576px and up) */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .custom-container {
        max-width: 540px;
    }
}


</style>