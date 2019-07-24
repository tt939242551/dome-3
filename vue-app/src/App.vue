<template>
  <div id="app">
     <Header />
     <div class="main">
       <router-view name="main"></router-view>
     </div>
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
 min-height: 100vh;
 background-color: #e1e1e1;
 font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,;
}
.main {
width: 80%;
margin: 16px auto;
}
</style>
