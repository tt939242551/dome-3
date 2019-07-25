import router from 'vue-router'
import Vue from 'vue'
import PostList from '../components/PostList'
import Article from '../components/Article'
import SlideBar from '../components/SlideBar'
import UserInfo from '../components/UserInfo'

Vue.use(router) 

export default new router({
  routes:[
  {
  name:'root',
  path:'/',
  components: {main:PostList}
  },
  {
    name:'article',
    path:'/article:id',
    components: {main:Article,
    slideUser:SlideBar}
  },
  {
    name:'user_info',
    path:'/userInfo',
    components: {main:UserInfo}
  },
  ]
  })
