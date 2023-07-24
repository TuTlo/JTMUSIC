<template>
  <div id="app">
    <pageheader></pageheader>
    <router-view></router-view>
    <page></page>
    <player />
    <pagefooter></pagefooter>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Music from './components/Music.vue'
import Song from './components/Song.vue'
import Other from './components/Other.vue'
import Footer from './components/Footer.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components:{
    "pageheader":Header,
    'player':Player,
    'home':Home,
    'music':Music,
    'song':Song,
    'other':Other,
    'pagefooter':Footer,
  },
  data() {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
