<template>
<div class="UserInfo">
  <!--在数据未返回的时候，显示这个正在加载的gif-->
  <div class="loading" v-if="isLoading">
    <img src="../assets/loading.gif" >
  </div>
  <div class="userInfomation" v-else>
    <div>
      <p>
      <router-link :to="{
          name:'root'
          }">
        <span id="topbar1">主页 /</span>
      </router-link>   
      </p>
    </div>
      
    <section>
      <img :src="userinfo.avatar_url" alt="头像">
      <span class="username">{{userinfo.loginname}}</span>
      <div> {{userinfo.score}} 积分</div>
      <p class="create">
        注册时间 {{userinfo.create_at | formatDate}}
      </p>
    </section>
    <div class="topics">
      <p>最近创建的话题</p>
      <ul>
        <li v-for="item in topcilimitby5">
          <router-link :to="{
          name:'user_info',
          params:{
            name:item.author.loginname
          }
          }">
            <img :src="item.author.avatar_url" alt="">
          </router-link>
          <router-link :to="{
           name:'article',
           params:{
             id : item.id,
             name : item.author.loginname 
           }
          }">
            <span>{{item.title}}</span>
          </router-link>
    
          <span class="last_reply">
             {{item.last_reply_at | formatDate}}
          </span>
        </li>
        <li>
          <span>查看更多»</span>
        </li>
      </ul>
    </div>
    <div class="replies">
      <p>最近参与的话题</p>
      <ul>
        <li v-for="item in replylimitby5">
          <router-link :to="{
          name:'user_info',
          params:{
            name:item.author.loginname
          }
          }">
            <img :src="item.author.avatar_url" alt="">
          </router-link>
          <router-link :to="{
           name:'article',
           params:{
             id : item.id,
             name : item.author.loginname 
           }
          }">
            <span>{{item.title}}</span>
          </router-link>
          <span class="last_reply">
             {{item.last_reply_at | formatDate}}
          </span>
        </li>
        <li>
          <span>查看更多»</span>
        </li>
      </ul>
    </div>
    
  </div>
</div>
</template>

<script>
    export default {
        name: "UserInfo",
      data(){
          return {
            isLoading:false,
            userinfo:{}
          }
      },
      methods:{
          getData(){
              this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                .then(res=>{
                  this.isLoading = false; //加载成功，去除动画
                  this.userinfo = res.data.data;
                })
                .catch(function (err) {
                  //处理返回失败后的问题
                  console.log(err)
                })
          }
      },
      computed:{
        topcilimitby5(){
          if(this.userinfo.recent_topics){
            return this.userinfo.recent_topics.slice(0,5);
          }
        },
        replylimitby5(){
          if(this.userinfo.recent_replies){
            return this.userinfo.recent_replies.slice(0,5);
          }
        }
      },
      beforeMount(){
        this.isLoading = true;//加载成功之前显示加载动画
        this.getData();//在页面加载之前获取数据
      }
    }
</script>

<style scoped>
  section{
   position: relative;
  }
  .username{
    position: absolute;
    top: 24px;
    left: 65px;
    color: #778087;
  }
  #topbar1 {
   color: #80bd01;
   font-size: 15px;
  }
  .create{
   color: #778087;
   margin: 15px 0; 
  }
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  section img {
    width: 46px;
    margin-bottom: 8px;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 14px;
    margin: 0;
  }
 
  ul li img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
    margin-left: -10px;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li {
    padding: 8px 10px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    border-top: 1px solid #f0f0f0;
  }


  li > span {
    line-height: 26px;
  }
  li a {
    margin-left: 10px;
    color: #08c
  }
  li a:hover{
    text-decoration: underline;
    color: #005580
  }
  .last_reply {
    text-align: right;
    min-width: 50px;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }
</style>
