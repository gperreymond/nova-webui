/* eslint-disable no-new */

import Vue from 'vue'
import VueCookie from 'vue-cookie'
import VueFeathersClient from './plugins/vue-feathers-client'

import router from '@/router'
import is from 'is_js'

import 'normalize.css'
import '@/styles/main.css'

window.IS_MOBILE = is.mobile()
if (process.env.DEBUG === true) { window.localStorage.debug = 'snapbook:*' }

Vue.use(VueCookie)
Vue.use(VueFeathersClient, { url: process.env.WS_URL })
Vue.config.productionTip = false

new Vue({
  router
}).$mount('#root')
