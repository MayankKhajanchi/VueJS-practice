<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name : {{ name }}</p>
        <p>{{ switchName() }}</p>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				src: ''
			}
		},
		props: ['name'],
		methods:{
			switchName(){
				return this.name.split("").reverse().join("");
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
