<template>
<div class="autherinfo">
  <div class="authersummay">
    <div class="topbar">个人信息</div>
    <router-link :to="{
          name:'user_info',
          params:{
            name:userinfo.loginname
          }
          }">
      <img :src="userinfo.avatar_url" alt="头像">
    </router-link>
    <router-link :to="{
          name:'user_info',
          params:{
            name:userinfo.loginname
          }
          }">
      <span class="username">{{userinfo.loginname}}</span>
    </router-link>
    <div class="jifen">积分: {{userinfo.score}}</div>
  </div>
  <div class="recent_topics">
    <div class="topbar">作者其它话题</div>
    <ul>
      <li v-for="list in topcilimitby5">
        <router-link :to="{
        name:'article',
        params:{
          id:list.id,
          name:list.author.loginname
        }
        }">
          {{list.title}}
        </router-link>
      </li>
    </ul>
  </div>
  <div class="recent_replies">
    <div class="topbar">作者最近回复</div>
    <ul>
      <li v-for="list in replylimitby5">
        <router-link :to="{
        name:'article',
        params:{
          id:list.id,
          name:list.author.loginname
        }
        }">
          {{list.title}}
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "SlideBar",
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
        this.getData();//在页面加载之前获取数据
      },
      watch: {
        '$route' (to, from) {
        this.getData()
        }
      },
    }
</script>

<style scoped>
  .authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .autherinfo {
    width: 290px;
    float: right;
    margin-top: 0;
    margin-right: -6.25%;
    position: relative;
  }
  .jifen{
    font-size: 14px;
    padding: 0 10px 10px 10px;
  }
  .username{
    color: #778087;
    position: absolute;
    top: 60px
  }
  ul li{
    padding: 4px 10px;
  }
  ul {
    padding: 15px 0;
  }
  ul a {
    font-size: 14px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 12px 10px;
    background-color: #f6f6f6;
    font-size: 13px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0px;
  }
</style>
