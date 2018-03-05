import Vue from 'vue'
import { ImageComparator } from '@buckless/image-comparator/dist/imagecomparator'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ImageComparator)

const app = new Vue({
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  app.$mount('#app')
})
