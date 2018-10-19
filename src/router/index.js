import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import MachPage from '../pages/MachPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:'/much/:shortName',
      component:MachPage
    }
  ]
})
