import Vue from 'vue'
import App from './App.vue'
import ZmUI from '../packages/index'
Vue.config.productionTip = false
Vue.use(ZmUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
