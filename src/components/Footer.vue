<template>
    <div id="footer">
        <p>contact email</p>
        <div id="otherLink">
        	<span class="el-icon-ttwangyiyunyinle" @click="jump('https://music.163.com/#/artist?id=32711945')"></span>
	        <span class="el-icon-ttweibo" @click="jump('https://weibo.com/u/6221482101')"></span>
	        <span class="el-icon-tticon_bilibili" @click="jump('https://space.bilibili.com/20343687')"></span>
	        <span class="el-icon-ttpinpaibiaoshi_QQyinle" @click="jump('https://c.y.qq.com/base/fcgi-bin/u?__=3JrTYXl')"></span>
        </div>
    </div>

</template>

<script>
export default{
    name:"footer",
    methods: {
		jump(link) {// open in new window & open APP?
			window.location.href=link
		}
	}
}
</script>

<style>

</style>