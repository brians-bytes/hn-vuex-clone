
import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';
import VueResource from 'vue-resource';
import VueTimeago from 'vue-timeago'

import App from './App';
import router from './router';
import { db } from './firebase';

Vue.use(VueFire);
Vue.use(VueResource);
Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
