import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index'
import activity from './components/activity'
import agriculture from './components/agriculture'
import characteristic from './components/characteristic'
import children from './components/children'
import skill from './components/skill'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/skill',
      name:'skill',
      component:skill
    },
    {
      path:'/activity',
      name:'activity',
      component:activity
    },
    {
      path:'/agriculture',
      name:'agriculture',
      component:agriculture
    },
    {
      path:'/characteristic',
      name:'characteristic',
      component:characteristic
    },
    {
      path:'/children',
      name:'children',
      component:children
    },
  ]
})
