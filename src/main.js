import Vue from 'vue'
import App from './App'
import Part from './components/Part'
// import router from './router'

Vue.config.productionTip = false
Vue.component('b-part', Part)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
