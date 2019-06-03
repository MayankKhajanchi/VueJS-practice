<template>
  <div id="app">
    Server status : {{message}} | <button @click='change'>Change</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {message: 'hello world'}
  },
  methods: {
  	change(){
  		this.message = 'Bye world'
  	}
  }
}
</script>
