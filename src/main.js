import Vue from 'vue'
import { ImageComparator } from '@buckless/image-comparator'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

Vue.use(ImageComparator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
