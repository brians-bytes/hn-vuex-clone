import Vue from 'vue';
import Router from 'vue-router';

import Landing from '@/components/Landing';
import StoryItem from '@/components/StoryItem';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top-stories',
      component: Landing,
      alias: '/top-stories',
    },
    {
      path: '/new-stories',
      name: 'new-stories',
      component: Landing,
    },
    {
      path: '/story/:id',
      name: 'story-item',
      component: StoryItem,
    }
  ]
})
