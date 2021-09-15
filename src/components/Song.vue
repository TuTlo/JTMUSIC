<template>
 <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-3">
					<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" class="rounded">
				</div>
				<div class="col-md-3">
					<p class="text-center">
						<strong>Album name</strong><small>album intro</small>
					</p>
				</div>
				<div class="col-md-6">
				</div>
			</div>
			<nav class="pagination-sm">
				<ul class="pagination">
					<li class="page-item">
						<a class="page-link" href="#">Previous</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">1</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">2</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">3</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">4</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">5</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">Next</a>
					</li>
				</ul>
			</nav>
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
</style>