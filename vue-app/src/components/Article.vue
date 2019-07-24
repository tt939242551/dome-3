<template>
<div class="article">
  <div class="loading" v-if="isLoading">
    <img src="../assets/loading.gif" >
  </div>
  <div v-else>
    <div class="topic_header">
      <div class="topic_title"><span class="put_top" v-show="post.good||post.top">{{post | tabFormatter | tabMatter}}</span>{{post.title}}</div>
      <ul>
        <li>• 发布于 {{post.create_at | formatDate}}</li>
        <li>• 作者
        {{post.author.loginname}}
        </li>
        <li>• {{post.visit_count}} 次浏览</li>
        <li>• 来自 {{post | tabFormatter | matter}}</li>
      </ul>
      <div v-html="post.content" class="topic_content"></div>
    </div>
    <div id="reply">
      <div class="topbar">{{post.replies.length}} 回复</div>
      <div v-for="(reply,index) in post.replies" class="replySec">
        <div class="replyUp">
          <router-link :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }">
            <img :src="reply.author.avatar_url" alt="">
          </router-link>
          <router-link :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }">
            <span>{{reply.author.loginname}}</span>
          </router-link>
          <span>
          {{index+1}}楼 •{{reply.create_at | formatDate}}
          </span>
          <span v-if="reply.ups.length>0" class="good">
             👍 {{reply.ups.length}}
          </span>
          <span v-else></span>
        </div>
      <p v-html="reply.content"></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    console.log()
    export default {
        name: "Article",
       data(){
          return {
            isLoading:false,//是否正在加载
            post:{},//代表当前文章页的所有内容，所有属性
          }
       },
      methods:{
          getArticleData(){
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
              .then(res=>{
                if(res.data.success === true){
                  this.isLoading =false;
                  this.post = res.data.data;
                }
              })
              .catch(function (err) {
                console.log(err)
              })
          }
      },
      beforeMount(){
          this.isLoading =true;
          this.getArticleData();
      },
    }
</script>

<style >
  @import url('../assets/markdown-github.css');
  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 14px;
  }
   .put_top {
    background: #80bd01;
    border-radius: 3px;
    padding: 2px 4px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    margin-right: 8px;
    bottom: -11px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
  .good {
  float: right;
  padding-top: 10px;
  }
  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 22px;
    font-weight: bold;
    padding: 8px 0;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
    margin-bottom: 8px;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 10px;
    line-height: 2.5em;
  }

  .markdown-text img {
    width: 92% !important;
  }
  p {
    margin-left: 25px;
    margin-bottom: 12px;
    padding: 2px;
  }
</style>
