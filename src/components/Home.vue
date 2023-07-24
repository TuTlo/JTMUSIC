<template>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="carousel slide" id="carousel-607576">
				<ol class="carousel-indicators">
					<li data-slide-to="0" data-target="#carousel-607576">
					</li>
					<li data-slide-to="1" data-target="#carousel-607576" class="active">
					</li>
					<li data-slide-to="2" data-target="#carousel-607576">
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item">
						<img class="d-block w-100" alt="Carousel Bootstrap First" src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg">
						<div class="carousel-caption">
							<h4>
								Just Tutti Productions 用Logo
							</h4>
							
							<p>
								Just Tutti Productions(JT Productions) 介绍： 就是音乐工作室
							</p>
						</div>
					</div>
					<div class="carousel-item active">
						<img class="d-block w-100" alt="Carousel Bootstrap Second" src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg">
						<div class="carousel-caption">
							<h4>
								Recent work?
							</h4>
							<p>
								最近作品？？？？
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg">
						<div class="carousel-caption">
							<h4>
								最新活动？
							</h4>
							<p>
								最新活动？
							</p>
						</div>
					</div>
				</div> <a class="carousel-control-prev" href="#carousel-607576" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-607576" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p class="text-center lead">
						DAWN QI, Composer, Music Producer.
					</p>
					<p class="text-center lead">
						xxx (ID) was born in Guangzhou, China. Graduated from Master of Science, Economics and Master of Sicence, Computer Science, with a Bachelor 
						Minor in Music. Started learning the piano at her 4, she achieved a second price at HongKong International Invitation Competition. 
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<address>
						<strong>Dawn</strong>
						<p>
						<a href="mailto:#">jtproduction@foxmail.com</a>
						</p>
					</address>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min'

export default {
    name: 'home',
}
</script>

<style>
#page{
	margin: 0;
	padding: 0;
	background: pink;
	height: 600px;
	width: 100%;
}
.carousel slide{
	display:flex;
	margin:10px;
	padding:10px;
}
.col-md-12{
	padding:10px;
	margin:auto;
}
</style>