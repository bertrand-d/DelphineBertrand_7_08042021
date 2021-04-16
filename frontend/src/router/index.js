import Vue from 'vue' 
import Router from 'vue-router' 
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Profile from '../views/Profile.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
  ]
})