<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<div class="col-md-3">
						<img alt="Bootstrap Image Preview" src="../assets/AlbumIcon/redanmacy.png" class="rounded" />
						<p>image here</p>
					</div>
					<div class="col-md-3">
						<h3>Redamancy</h3>
						<p class="text-center">
							For the sake of Love
						</p>
					</div>
					<div class="col-md-6">
						<p>player here</p>
					</div>
					<div class="col-md-3">
						<img alt="Bootstrap Image Preview" src="../assets/AlbumIcon/bestCover.jpg" class="rounded" />
						<p>image here</p>
					</div>
					<div class="col-md-3">
						<h3>Best Of The First Three</h3>
						<p class="text-center">
							Best colletion of my first three year composition journey. 10 pieces, mostly in orchestra, including one Tango, composed from 2017.10-2020.10
						</p>
					</div>
					<div class="col-md-6">
						<p>player here</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'music',
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