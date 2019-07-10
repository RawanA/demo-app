import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ScrollLoader from 'vue-scroll-loader'

Vue.use(ScrollLoader)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
