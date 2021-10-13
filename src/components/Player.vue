<template>
    <div class="wholeplayer">
        <div>
            <audio ref="audio"
            @pause="onPause"
            @play="onPlay"
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadmetadata"
            src='http://devtest.qiniudn.com/secret base~.mp3' controls="controls"></audio>
        </div>
        <div class="playerButton">
            <el-button type="text" @click="startPlayOrPause">{{audio.playing | transPlayPause}}</el-button>

            <el-tag type="info">{{ audio.currentTime | formatSecond}}</el-tag>

            <el-tag type="info"> {{ audio.maxTime | formatSecond}}</el-tag>

            <el-slider v-model="sliderTime" : format-tooltip="formatProcessToolTip" @change="changeCurrentTime" class="slider"></el-slider>

        </div>
    </div>
</template>

<script>

// 整数转换为时：分：秒
function realFormatSecond(second) {
    var secondType = typeof second

    if (secondType === 'number' || secondType === 'string') {
        second = parseInt(second)

        var hours = Math.floor(second / 3600 )
        second = second - hours * 3600
        var minute = Math.floor(second / 60 )
        second = second - minute * 60

        return hours + ':' + ('0' + minute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
        return '0:00:00'
    }
}

export default {
    data() {
        return {
            audio:{
                //音频是否处于播放状态属性
                playing: false
            }
        }
    },
    methods: {
        // 控制音频播放暂停
        startPlayOrPause(){
            return this.audio.playing ? this.pause(): this.play()
        },
        // 播放
        play() {
            this.$refs.audio.play()
        },
        //暂停
        pause() {
            this.$ref.audio.pause()
        },
        // 当前音频播放
        onPlay() {
            this.audio.playing = true 
        },
        onPause() {
            this.audio.playing = false 
        },
        //播放时间
        onTimeupdate(res){
            console.log('timeupdate')
            console.log(res)
            this.audio.currentTime = res.target.currentTime
            this.sliderTime = parseInt (this.audio.currentTime / this.audio.maxTime * 100)
        },
        onLoadmetadata(res) {
            console.log('loadedmetadata')
            console.log(res)
            this.audio.maxTime = parseInt(res.target.duration)
        },
        changeCurrentTime(index) {
            this.$refs.audio.currentTime = parseInt (index / 100 * this.audio.maxTime)
        }
    },
    filters: {
        transPlayPause(value) {
            return value ? 'pause' : 'play'
        },
        //
        formatSecond(second = 0) {
            return realFormatSecond(second)
        },
        formatProcessToolTip(index = 0 ) {
            index = parseInt ( this.audio.maxTime / 100 * index)
            return '' + realFormatSecond(index)
        }
    }
}
</script>

<style>

</style>
