<template>
	<div class="container"> 
	    <app-header></app-header>
			<app-body></app-body>
			<app-footer></app-footer>
	</div>
</template>

<script>
import Vue from 'vue';
	import Header from './Header.vue';
	Vue.component('app-header', Header);
</script>