import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  env: 'wedding-3a03a2'
})

const app = new Vue(App)
app.$mount()
console.log('1111')
