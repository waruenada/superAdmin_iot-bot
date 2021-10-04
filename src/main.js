import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import VueSimpleAlert from "vue-simple-alert"; 

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2); 
Vue.use(VueSimpleAlert);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
