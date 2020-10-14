// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
Vue.prototype.baseUrl = 'http://localhost:8080/'
import App from './App'
import axios from 'axios';

window.axios = require('axios');


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
