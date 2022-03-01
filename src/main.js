import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VModal from 'vue-js-modal'
import VueConfirmDialog from 'vue-confirm-dialog'
 
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
