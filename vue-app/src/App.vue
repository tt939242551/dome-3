<template>
  <div id="app">
     <Header />
     <div class="main">
       <Postlist/>
     </div>
  </div>
</template>

<script>
import qs from 'qs'
import Header from './components/Header'
import Postlist from './components/Postlist'

export default {
  name: 'App',
  data :function(){
    return{
    }
  },
  components:{
    Header,Postlist
  },
  methods:{ 
    
    
  }
}
</script>

<style scoped>
#app {
 background-color: #e1e1e1;
 font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,;
}
.main {
width: 80%;
margin: 16px auto;
}
</style>
