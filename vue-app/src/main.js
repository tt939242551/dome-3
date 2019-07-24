// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import rt from './router/index.js'
import axios from 'axios'

Vue.config.productionTip = false ;
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router: rt,
  components: { App },
  template: '<App/>'
})
Vue.filter('formatDate', function (str) {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差>的时间（单位 = 毫秒）
   if (time / 1000 < 60) {
    return '刚刚'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '个月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}
)
Vue.filter('tabFormatter',function (post) {
  if(post.good === true){
    return '精华'
  }else if(post.top === true){
    return '置顶'
  }else if(post.tab === 'ask'){
    return '问答'
  }else if(post.tab === 'share'){
    return '分享'
  }else{
    return '招聘'
  }
})
Vue.filter('tabMatter',function (tab) {
  if(tab === '精华' ){
    return '精华'
  }else if(tab === '置顶'){
    return '置顶'
  }else {
    return ''
  }
})
Vue.filter('matter',function (tab) {
  if(tab === '精华'||tab === '置顶'||tab === '分享' ){
    return '分享'
  }else if(tab === '问答'){
    return '问答'
  }else {
    return '招聘'
  }
})

