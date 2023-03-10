import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/passenger/SignIn.vue'
import AddFlight from '../views/flight/AddFlight.vue'
import FlightView from '../views/flight/FlightView.vue'
import AllAirlinesView from '../views/airline/AllAirlinesView.vue'
import AddAirline from '../views/airline/AddAirline.vue'
import AllFlights from '../views/flight/AllFlights.vue'
import AdminView from '../views/admin/AdminView.vue'
import AllTravelAgencies from '../views/travel agency/AllTravelAgencies.vue'
import AddAgency from '../views/travel agency/AddAgency.vue'
import EditAgency from '../views/travel agency/EditAgency.vue'
import EditAirline from '../views/airline/EditAirline.vue'
import AirlineDetails from '../views/airline/AirlineDetails.vue'
import AgencyDetails from '../views/travel agency/AgencyDetails.vue'
import FlightDetails from '../views/flight/FlightDetails.vue'
import EditFlight from '../views/flight/EditFlight.vue'
import SignUp from '../views/passenger/SignUp.vue'
import PassengerBookings from '../views/passenger/PassengerBookings.vue'
import AirlineBookings from '../views/airline/AirlineBookings.vue'
import PassengerTickets from '../views/passenger/PassengerTickets.vue'
import AllFlightsForAirline from '../views/airline/AllFlightsForAirline'
import PassengerProfile from '../views/passenger/PassengerProfile'
import EditProfile from '../views/passenger/EditProfile.vue'
import AirlineProfile from '../views/airline/AirlineProfile.vue'
import EditAirlineProfile from '../views/airline/EditAirlineProfile.vue'
import ForgotPasswordView from '../views/passenger/ForgotPasswordView.vue'
import ResetPasswordView from '../views/passenger/ResetPasswordView.vue'
import AllAirports from '../views/airport/AllAirports.vue'
import AddAirport from '../views/airport/AddAirport'
import EditAirport from '../views/airport/EditAirport.vue'
import TravelAgencyProfile from '../views/travel agency/TravelAgencyProfile.vue'
import EditAgencyProfile from '../views/travel agency/EditAgencyProfile.vue'
import AgencyBookings from '../views/travel agency/AgencyBookings.vue'

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
    path: '/signIn',
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
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/travelAgencies/all',
    name: 'AllTravelAgencies',
    component: AllTravelAgencies
  },
  {
    path: '/travelAgencies/add',
    name: 'AddAgency',
    component: AddAgency
  },
  {
    path: '/travelAgencies/edit/:id',
    name: 'EditAgency',
    component: EditAgency
  },
  {
    path: '/airlines/edit/:id',
    name: 'EditAirline',
    component: EditAirline
  },
  {
    path: '/airlines/:id',
    name: 'AirlineDetails',
    component: AirlineDetails
  },
  {
    path: '/agencies/:id',
    name: 'AgencyDetails',
    component: AgencyDetails
  },
  {
    path: '/flights/:id',
    name: 'FlightDetails',
    component: FlightDetails
  },
  {
    path: '/flights/edit/:id',
    name: 'EditFlight',
    component: EditFlight
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/passenger/bookings',
    name: 'PassengerBookings',
    component: PassengerBookings
  },
  {
    path: '/airline/bookings',
    name: 'AirlineBookings',
    component: AirlineBookings
  },
  {
    path: '/passenger/tickets',
    name: 'PassengerTickets',
    component: PassengerTickets
  },
  {
    path: '/airline/flights',
    name: 'AllFlightsForAirline',
    component: AllFlightsForAirline
  },
  {
    path: '/user/profile',
    name: 'PassengerProfile',
    component: PassengerProfile
  },
  {
    path: '/user/profile/edit',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/airline/profile',
    name: 'AirlineProfile',
    component: AirlineProfile
  },
  {
    path: '/airline/profile/edit',
    name: 'EditAirlineProfile',
    component: EditAirlineProfile
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPasswordView',
    component: ForgotPasswordView
  },
  {
    path: '/resetPassword',
    name: 'ResetPasswordView',
    component: ResetPasswordView
  },
  {
    path: '/airports/all',
    name: 'AllAirports',
    component: AllAirports
  },
  {
    path: '/airports/add',
    name: 'AddAirport',
    component: AddAirport
  },
  {
    path: '/airports/edit/:id',
    name: 'EditAirport',
    component: EditAirport
  },
  {
    path: '/agency/profile',
    name: 'TravelAgencyProfile',
    component: TravelAgencyProfile
  },
  {
    path: '/agency/profile/edit',
    name: 'EditAgencyProfile',
    component: EditAgencyProfile
  },
  {
    path: '/agency/bookings',
    name: 'AgencyBookings',
    component: AgencyBookings
  },
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
