import Vue from 'vue';
import App from './App.vue';
// import Header from './Header.vue';
import Footer from './Footer.vue';
import Body from './Body.vue';

// Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-body', Body);

new Vue({
  el: '#app',
  render: h => h(App)
})
