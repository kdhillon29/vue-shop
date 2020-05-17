import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import  jQuery from  "jquery";
import  'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.scss';

import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
 
// window.JQuery = jQuery;
//window.$  = jQuery;
Vue.prototype.$user = {name:'kanwar',email:''}
Vue.use(PerfectScrollbar)

// Vue.mixin({
//   computed: {
//     $color: {
//       get: function () { return this.$user},
//       set: function (newColor) { this.$user = newColor; }
//     }
//   }
// })
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
