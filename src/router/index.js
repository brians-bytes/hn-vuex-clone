import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'to-stories',
      component: Landing,
      alias: '/top-stories',
    }
  ]
})
