import Vue from 'vue'
import { ImageComparator } from '@buckless/image-comparator/dist/imagecomparator'
import App from './App'

Vue.config.productionTip = false

Vue.use(ImageComparator)

const app = new Vue({
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  app.$mount('#app')
})
