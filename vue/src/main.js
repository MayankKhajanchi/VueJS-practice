import Vue from 'vue';
import App from './App.vue';
import Footer from './components/Shared/Footer.vue';
import Body from './components/Server/Body.vue';

Vue.component('app-footer', Footer);
Vue.component('app-body', Body);

new Vue({
  el: '#app',
  render: h => h(App)
})
