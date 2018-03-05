import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Medias from '@/pages/Medias'
import Mentions from '@/pages/Mentions'

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
      path: '/medias',
      name: 'Médias',
      component: Medias
    },
    {
      path: '/mentions-legales',
      name: 'Mentions Légales',
      component: Mentions
    }
  ]
})
