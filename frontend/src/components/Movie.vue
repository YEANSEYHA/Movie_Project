<template>
	<div class="movie-item mb-50">
		<div class="movie-poster">
			<a href="http://localhost:8080/moviedetails"><img src="./movie_details_img.jpg" alt=""></a>
		</div>
		<div class="movie-content">
			<div class="top">
				<h5 class="title"><a href="http://localhost:8080/moviedetails">{{ movie.title }}</a></h5>
				<span class="date">2021 </span>
			</div>
			<div class="bottom">
				<ul>
					<li><span class="quality">hd</span></li>
					<li>
						<span class="duration"><i class="far fa-clock"></i> 128 min</span>
						<span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'Movie',
	props:{
		movie: Object
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
.movie-item:hover{
	box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
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