
import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';

import App from './App';
import router from './router';
import { db } from './firebase';

Vue.use(VueFire);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
