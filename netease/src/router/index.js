import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SjnGren from '../views/SjnGren.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/sjngren',
    name: 'sjngren',
    component: SjnGren
  },
]

const router = new VueRouter({
  routes
})

export default router
