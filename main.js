// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'
// 将axios定义在原型上
Vue.prototype.$http = axios

// 引入els
import Ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Ele)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
