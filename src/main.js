
import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';
import VueResource from 'vue-resource';

import App from './App';
import router from './router';
import { db } from './firebase';

Vue.use(VueFire);
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
