<template>
  <div id="app">
    <h1><router-link to="/helloworld">HELLO WORLD</router-link></h1>
    <router-view></router-view>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'App',
  data :function(){
    return{
    }
  },
  methods:{ 
    
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
