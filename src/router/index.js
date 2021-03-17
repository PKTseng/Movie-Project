import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const Favorite = () => import('@/views/Favorite')
const MovieInfo = () => import('@/components/MovieInfo')

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    name: 'Home',
    children: [
      {
        path: '/movieInfo',
        component: MovieInfo,
        name: 'MovieInfo',
      },
    ],
  },
  {
    path: '/movieInfo',
    component: MovieInfo,
    name: 'MovieInfo',
  },
  {
    path: '/favorite',
    component: Favorite,
    name: 'Favorite',
  },
]

const router = new VueRouter({
  routes,
  // mode: "history"
})

export default router
