import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  vuetify: vuetify,
  store: store,
  router: router,

  render: h => h(App),

}).$mount('#app')