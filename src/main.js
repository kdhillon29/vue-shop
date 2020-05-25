import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import  jQuery from  "jquery";
import  'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.scss';
//import swal from 'sweetalert';

import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
 import VueFirestore from 'vue-firestore';
// window.JQuery = jQuery;
import Swal from 'sweetalert2';

import store from './store.js';



Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);
window.Swal = Swal;

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;
//Vue.use(Toast);
//Vue.prototype.$toast =Toast
Vue.prototype.$user = {name:'kanwar',email:''}
// Vue.use(Swal);
// Vue.use(Toast);
Vue.use(PerfectScrollbar);
Vue.use(VueFirestore);
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import Vue2Filters from 'vue2-filters'
 
Vue.use(Vue2Filters)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
