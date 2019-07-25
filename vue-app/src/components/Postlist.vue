<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <div v-else>
      <ul>
        <li>
          <div class="toobar">
            <a href="#">全部</a>
            <a href="#">精华</a>
            <a href="#">分享</a>
            <a href="#">问答</a>
            <a href="#">招聘</a>
            <a href="#">客户端测试</a>  
          </div>
        </li>
        <li v-for="post in posts">
          <router-link :to="{
          name:'user_info',
          params:{
            name:post.author.loginname
          }
          }">
            <img :src="post.author.avatar_url" alt="">
          </router-link>
          <span class="counts">
            <span class="reply_count">{{post.reply_count}}</span>
            <span class="visit_count">/{{post.visit_count}}</span>
          </span>
          <span :class="[{
          'put_good': (post.good  === true),
          'put_top':(post.top  === true),
          'topiclist-tab':(post.good  !== true && post.top  != true),
           }]">
             {{post | tabFormatter}}
          </span>
          <router-link :to="{
           name:'article',
           params:{
             id : post.id,
             name : post.author.loginname 
           }
          }">
            <span>{{post.title}}</span>
          </router-link>
    
          <span class="last_reply">
             {{post.last_reply_at | formatDate}}
          </span>
        </li>
      </ul>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'postlist',
  data () {
    return {
    isLoading : false,
    posts:[],  
  }
  },
  computed :{
  },
  methods:{
    getList:function(){
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page:1,
          limit:40
        }
      })
      .then((res)=>{
        this.isLoading = false;
        this.posts=res.data.data
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  beforeMount:function () {
    this.isLoading = true;
    this.getList()
  }

}
</script>

<style scoped>
 .PostList{
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 10px;
  }
  .counts{
    display: inline-block;
    width: 75px;
    text-align: center;
  }
  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }
  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }
 .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }
  
  .reply_count {
    color: #9e78c0;
    font-size: 14px;
    margin-left: 8px;
  }
  .visit_count {
    font-size: 10px;
    color: #b4b4b4;
    margin-right: 8px;
  }
  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 2px 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding:  2px 2px 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }
   .toobar {
    height: 40px;
    background-color: #f6f6f6;
    padding-left: 10px;
  }

  .toobar a {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar a:hover {
    color: #005580;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

</style>
