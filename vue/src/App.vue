<template>
	<div class="container"> 
    <app-header></app-header>
		<app-body></app-body>
		<app-footer></app-footer>
	</div>
</template>

<script>
  import Vue from 'vue';
	import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Home from './components/Server/Home.vue';
  import Body from './components/Server/Body.vue';

  export default{
    components: {
      'app-header' : Header,
      'app-footer' : Footer,
      'app-body' : Body
    }
  }
	Vue.component('app-header', Header);
</script>