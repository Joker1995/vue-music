import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.stylus'

fastclick.attach(document.body)

vue.use(VueLazyload,{
  loading: require('common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
