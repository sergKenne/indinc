import Vue from 'vue'
import VueRouter from 'vue-router'
import PostsView from '../views/PostsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts',
    name: 'home',
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
