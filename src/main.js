/**
 * Projeto: eleicoes2020
 * Arquivo: main.js
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 19/10/2020 1:57:48 pm
 * Last Modified:  13/11/2020 3:12:12 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
if(process.env.NODE_ENV == "production"){
  // Vue.prototype.baseUrl = 'https://cgn.inf.br/eleicoes/2020/'
  Vue.prototype.baseUrl = 'https://dev.cgn.inf.br/eleicoes/2020/'
}else {
  Vue.prototype.baseUrl = 'http://localhost:8080/'
}
import App from './App'
import axios from 'axios';

window.axios = require('axios');


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

const routes = [
  { path: '/:id', component: App }
]

const router = new VueRouter({
  routes 
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
