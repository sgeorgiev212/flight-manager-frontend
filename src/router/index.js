import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/passenger/SignIn.vue'
import AddFlight from '../views/flight/AddFlight.vue'
import FlightView from '../views/flight/FlightView.vue'
import AllAirlinesView from '../views/airline/AllAirlinesView.vue'
import AddAirline from '../views/airline/AddAirline.vue'
import AllFlights from '../views/flight/AllFlights.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/flights/add',
    name: 'AddFlight',
    component: AddFlight
  },
  {
    path: '/flight',
    name: 'FlightView',
    component: FlightView
  },
  {
    path: '/airlines',
    name: 'AllAirlinesView',
    component: AllAirlinesView
  },
  {
    path: '/airlines/add',
    name: 'AddAirline',
    component: AddAirline
  },
  {
    path: '/flights/all',
    name: 'AllFlights',
    component: AllFlights
  },
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
