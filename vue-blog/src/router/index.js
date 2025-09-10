import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Sports from '../components/Sports.vue'
import TvShows from '../components/TvShows.vue'
import Hobbies from '../components/Hobbies.vue'

const routes = [
  { path: '/blog/', component: Home },
  { path: '/blog/sports', component: Sports },
  { path: '/blog/tvshows', component: TvShows },
  { path: '/blog/hobbies', component: Hobbies }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router