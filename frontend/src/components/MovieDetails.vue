<template>
    
    <div class="movie-details-area" style="background:rgb(112, 104, 104)">
                <div class="container">
                    <div class="row align-items-center position-relative">
                        <div class="col-xl-3 col-lg-4">
                            <div class="movie-details-img">
                                <img src="img/poster/movie_details_img.jpg" alt="">
                                <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video"><img src="./movie_details_img.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-8">
                            <div class="movie-details-content">
                                <h5>New Episodes</h5>
                                <h2>The Easy <span>Reach</span></h2>
                                <div class="banner-meta">
                                    <ul>
                                        <li class="quality">
                                            <span>Pg 18</span>
                                            <span>hd</span>
                                        </li>
                                        <li class="category">
                                            <a href="#">Romance,</a>
                                            <a href="#">Drama</a>
                                        </li>
                                        <li class="release-time">
                                            <span><i class="far fa-calendar-alt"></i> 2021</span>
                                            <span><i class="far fa-clock"></i> 128 min</span>
                                        </li>
                                    </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many
                                    variations of passages of lorem
                                    Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                                <div class="movie-details-prime">
                                    <ul>
                                        <li class="share"><a href="#"><i class="fas fa-share-alt"></i> Share</a></li>
                                        <li class="streaming">
                                            <h6>Prime Video</h6>
                                            <span>Streaming Channels</span>
                                        </li>
                                        <li class="watch"><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="btn popup-video"><i class="fas fa-play"></i> Watch Now</a></li>
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
    <div style="position:relative; overflow:hidden; padding-bottom:56.25%"> <iframe src="https://cdn.jwplayer.com/players/uKFJ8Lzi-kjO9FMuV.html" width="100%" height="100%" frameborder="0" scrolling="auto" title="Real Madrid Vs Liverpool - 3 1. Match Highlights. Uefa Champions League Final 2018" style="position:absolute;" allowfullscreen></iframe> </div>

</template>

<script>
export default {
    name: 'MovieDetails',
    components: 'Videoplay'
}
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

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