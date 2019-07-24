import router from 'vue-router'
import Vue from 'vue'
import PostList from '../components/PostList'
import Article from '../components/Article'

Vue.use(router) 

export default new router({
  routes:[{
  name:'root',
  path:'/',
  components: {main:PostList}
  },{
    name:'article',
    path:'/article',
    components: {main:Article}
  }]
  })
