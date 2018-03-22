import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})