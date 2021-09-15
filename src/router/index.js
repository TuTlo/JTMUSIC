import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Music from '@/components/Music.vue'
import Game from '@/components/Game.vue'
import Drama from '@/components/Drama.vue'
import Pv from '@/components/Pv.vue'
import Song from '@/components/Song.vue'
import Other from '@/components/Other.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {name:'home',path:'/',component:Home},
    {name:'music',path:'/music',component:Music},
    {name:'game',path:'/game',component:Game},
    {name:'drama',path:'/drama',component:Drama},
    {name:'pv',path:'/pv',component:Pv},
    {name:'song',path:'/song',component:Song},
    {name:'other',path:'/other',component:Other}
  ]
})

export default router;