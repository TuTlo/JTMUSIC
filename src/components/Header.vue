<template>
    <header class="header">
        <div class="header-container">
            <div class="header-logo">
                <p>logo here</p>
            </div>
            <div class="header-outer">
                <nav class="header-nav">
                    <ul class="header-list">
                        <li class="header-item">
                            <div class="header-content-nav">
                                <router-link :to="'/'" exact>HOME</router-link> 
                                <router-link :to="'/music'" exact>MUSIC</router-link>
                                <router-link :to="'/game'" exact>GAME</router-link>
                                <router-link :to="'/drama'" exact>DRAMA CD</router-link>
                                <router-link :to="'/pv'" exact>PV</router-link>
                                <router-link :to="'/song'" exact>SONG</router-link>
                                <router-link :to="'/other'" exact>OTHER</router-link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div class="header-inner">
                    <nav class="header-sns-nav">
                        <ul class="header-sns-icon">
                            <li class="header-sns-item">
                                <a href="" class="header-sns-nav_link" target="_blank">
                                    <img src="../assets/icon/QQmusic.svg" alt class="sp-hide" />
                                </a>
                            </li>
                            <li class="header-sns-item">
                                <a href="" class="header-sns-nav_link" target="_blank">
                                    <img src="../assets/icon/icon_netease.svg" alt class="sp-hide" />
                                </a>
                            </li>
                            <li class="header-sns-item">
                                <a href="" class="header-sns-nav_link" target="_blank">
                                    <img src="../assets/icon/icon_bilibili.svg" alt class="sp-hide" />
                                </a>
                            </li>
                            <li class="header-sns-item">
                                <a href="" class="header-sns-nav_link" target="_blank">
                                    <img src="../assets/icon/weibo.svg" alt class="sp-hide" />
                                </a>
                            </li> 
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'pageheader',
    methods: {
		jump(link) {// open in new window & open APP?
			window.location.href=link
		}
    }
}
</script>

<style scoped>
div{
    margin:0;
    padding:0;
    border:0;
    vertical-align:baseline;
    font:inherit;
    font-size: 100%;
}
ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
}

li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color:black;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
nav{
    padding: 30px 0;
    display:block;
}

span{
    display: inline-block;
    padding: 4px;
    text-align: right;
}
img{
    margin: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    max-width: 100%;
    vertical-align: bottom;
}
a img{
    border: none;
}

.header{
    top:0%;
    z-index: 1000;
    width: 100%;
    height:95%;
    background-size: cover;
    margin:20px;
}
.header-container{
    display:flex;
    padding:0 55px 0 30px;
    width: 100%;
    height:100%;
    align-items: center;
}
.header-outer{
    display:flex;
    margin-left: auto;
    -webkit-box-align: center;
    align-items: center;
}
.header-nav{
    display:block;
    margin:0%;
    border:0;
    font:inherit;
    font-size:100%;
}
.header-sns-nav{
    display:block;
    -webkit-box-align: center;
    align-items: center;
}
.header-sns-item{
    margin-left: 0;

}
.header-sns-icon{
    display:flex;
    -webkit-box-align: center;
    align-items: center;
}
.header-sns-nav_link{
    display:inline-block;
}
.sp-hide{
    width: 20px;
    height:20px;
    padding: 0;
}
.router-link-active{
    background: rgba(red, green, blue, alpha);
    color: #444;
}
</style>