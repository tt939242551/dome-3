<template>
  <div id="app">
     <Header />
  </div>
</template>

<script>
import qs from 'qs'
import Header from './components/Header'

export default {
  name: 'App',
  data :function(){
    return{
    }
  },
  components:{
    Header
  },
  methods:{ 
    
    
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
