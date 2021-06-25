<template>
    <div class="tv-series-area tv-series-bg" style="background:rgb(99, 98, 98)" >
        <div class="container">
            <div :key="movie.id" v-for="movie in movies" class="row justify-content-center">  
                <Movie :movie="movie"></Movie>
            </div>
        </div>
    </div>
</template>

<script>
import Movie from './Movie.vue';

export default {
    name: 'Movies',
    props:{
        movies: Array
    },
    components: {
        Movie,
    }
}
</script>




<style >
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";


/*-- Margin Bottom --*/


.mb-50 {
	margin-bottom: 50px;
}



/* Extra large devices (large desktops, 1800px and up) */
@media (max-width: 1500px) {
.custom-container {
    max-width: 1330px;
}

}


/* Extra large devices (large desktops, 1200px and up) */
@media (max-width: 1199.98px) {
.custom-container {
    max-width: 960px;
}

.services-bg-two .services-img-wrap .download-btn {
    display: none;
}
.movie-item-row .custom-col- {
    -ms-flex: 0 0 33.333%;
    flex: 0 0 33.333%;
    max-width: 33.333%;
}
.movie-item-row .movie-poster img {
    width: 100%;
}
.movie-item-row {
    justify-content: center;
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






/* 1. Theme default css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800&display=swap');
 body {
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	font-style: normal;
	font-size: 14px;
	color: #bcbcbc;
}
.img {
	max-width: 100%;
	transition: all 0.3s ease-out 0s;
}
.f-left {
	float: left
}
.f-right {
	float: right
}
.fix {
	overflow: hidden
}
a,
.button {
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-ms-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}
a:focus,
.btn:focus,
.button:focus {
	text-decoration: none;
	outline: none;
	box-shadow: none;
}

a:hover,
.portfolio-cat a:hover,
.footer -menu li a:hover {
	color: #2B96CC;
	text-decoration: none;
}
a,
button {
	color: #1696e7;
	outline: medium none;
}
button:focus,input:focus,input:focus,textarea,textarea:focus{outline: 0}
.uppercase {
	text-transform: uppercase;
}
.capitalize {
	text-transform: capitalize;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Poppins', sans-serif;
	color: #fff;
	margin-top: 0px;
	font-style: normal;
	font-weight: 700;
	text-transform: normal;
}
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
	color: inherit;
}
h1 {
	font-size: 40px;
	font-weight: 500;
}
h2 {
	font-size: 35px;
}
h3 {
	font-size: 28px;
}
h4 {
	font-size: 22px;
}
h5 {
	font-size: 18px;
}
h6 {
	font-size: 16px;
}
ul {
	margin: 0px;
	padding: 0px;
}
li {
	list-style: none
}
p {
	font-size: 14px;
	font-weight: 500;
	line-height: 26px;
	color: #bcbcbc;
	margin-bottom: 15px;
}
hr {
	border-bottom: 1px solid #eceff8;
	border-top: 0 none;
	margin: 30px 0;
	padding: 0;
}
label {
	color: #7e7e7e;
	cursor: pointer;
	font-size: 14px;
	font-weight: 400;
}



/* 7. Up-coming */

.movie-poster img {
    max-width: 100%;
    border-radius: 5px;
}
.movie-poster {
    margin-bottom: 23px;
    position: relative;
}
.movie-content .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}
.movie-content .top .title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0;
    flex-grow: 1;
}
.movie-content .top .date {
    font-size: 14px;
    font-weight: 500;
    margin-left: 50px;
}
.movie-content .bottom ul {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.movie-content .bottom ul li .quality {
    border: 2px solid #fff;
    padding: 5px 10px;
    line-height: 1;
    font-weight: 700;
	font-size: 11px;
    text-transform: uppercase;
}
.movie-content .bottom ul li {
	display: flex;
	align-items: center;
}
.movie-content .bottom ul li .rating {
	margin-left: 15px;
}
.movie-content .bottom ul li > span {
	color: #bcbcbc;
	font-size: 12px;
}
.movie-content .bottom ul li > span i {
	margin-right: 5px;
}
.movie-content {
    padding-right: 10px;
}

.movie-item-two {
    text-align: center;
    background: #1f1e24;
    padding: 15px 15px 25px;
}
.movie-item-two .movie-content {
    padding: 0;
}
.movie-item-two .movie-content > .rating {
    font-size: 10px;
    letter-spacing: -.5px;
    color: #e4d804;
    margin-bottom: 10px;
}
.movie-item-two .movie-content .title {
    font-size: 16px;
    font-weight: 600;
    color: #d5d5d5;
    margin-bottom: 12px;
}
.movie-item-two .movie-content .rel {
    display: block;
    font-size: 12px;
    color: #9d9b9b;
}
.movie-content-bottom ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    margin-top: 25px;
    position: relative;
}
.movie-content-bottom ul::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #000000;
}
.movie-content-bottom ul::after {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 100%;
    height: 1px;
    background: #27272f;
}
.movie-content-bottom ul li.tag {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-right: 30px;
}
.movie-content-bottom ul li.tag a {
    display: block;
    color: #4c5066;
    background: #02050a;
    font-size: 12px;
    font-weight: 700;
    padding: 7px 12px;
    line-height: 1;
    margin-right: 10px;
}
.movie-content-bottom ul li.tag a:last-child {
    margin-right: 0;
}
.movie-content-bottom ul li .like {
    font-size: 13px;
    color: #9d9b9b;
}
.movie-content-bottom ul li .like i {
    font-size: 12px;
    margin-right: 5px;
    color: #c77f01;
}
.movie-bg {
    background-position: top center;
    background-size: cover;
    padding: 120px 0 120px;
}

/* 15. Tv-series */
.tv-series-bg {
    background-position: center;
    background-size: cover;
    padding: 120px 0 70px;
}
.tr-movie-btn .btn {
    letter-spacing: 0;
    background: #e4d804;
    color: #1a1e21;
}
.tr-movie-btn .btn:hover {
    background: transparent;
    color: #fff;
}






</style>