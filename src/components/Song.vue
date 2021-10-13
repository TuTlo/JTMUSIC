<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<!-- Album -->
					<div class="col-md-3">
						<img alt="Bootstrap Image Preview" src="../assets/AlbumIcon/theJourney.png" class="rounded" />
					</div>
					<div class="col-md-3">
						<h3>The Journey</h3>
						<p class="text-center">
							The journey
						</p>
					</div>
					<div class="col-md-6">
						<ol class="tracklist">
							<li class="tracklistitem">
								<div class="trackbutton">
									<div class="track-index">
										<div class="track-index-num"></div>
									</div>
									<div class="track-name">这一场旅途</div>
									<div class="track-duration"></div>
								</div>
							</li>
						</ol>
					</div>
					<!-- end here-->
					<!-- Album -->
					<div class="col-md-3">
						<img alt="Bootstrap Image Preview" src="../assets/AlbumIcon/onWind.jpg" class="rounded" />
					</div>
					<div class="col-md-3">
						<h3>顺风</h3>
						<p class="text-center">
							顺风
						</p>
					</div>
					<div class="col-md-6">
						<ol class="tracklist">
							<li class="tracklistitem">
								<div class="trackbutton">
									<div class="track-index">
										<div class="track-index-num"></div>
									</div>
									<div class="track-name">顺风</div>
									<div class="track-duration"></div>
								</div>
							</li>
						</ol>
					</div>
					<!-- end here-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'song',
}
</script>

<style>
#page{
	margin: 0;
	padding: 0;
	background: lightgreen;
	height: 600px;
	width: 100%;
}
div{
	margin:auto;
}
.rounded{
	height: 200px;
	width:200px;
}
.container-fluid{
	position: relative;
	padding:10px;
}
.row{
	padding:10px;
}
.col-md-3{
	padding:10px;
}
</style>