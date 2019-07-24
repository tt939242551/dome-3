<template>
    <div class="header">
      <img src="../assets/cnodejs_light.svg" alt="">
      <span><input type="text" class="search"></span>
      <div class="link">
        <a href="#">首页</a>
        <a href="#">新手入门</a>
        <a href="#">API</a>
        <a href="#">关于</a>
        <a href="#">注册</a>
        <a href="#">登录</a>
      </div>    
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.header{
  background-color:#444 ;
  height: 50px;
  padding: 0 5.3%;
  position: relative;
}
img{
  max-width: 120px;
  margin-top: 10px;
  margin-left: -6px;
}
.link{
  float: right;
  margin: 5px 0;

} 
a {
    display: inline-block;
    color: #ccc;
    font-size: 13px;
    text-shadow: nonr;
    line-height: 20px;
    padding: 10px 12.5px;
  }
a:hover{
  color: #eee;
}
.search{
    background: url(../assets/7-Search.png) 6px 6px no-repeat #888;
    padding: 4px 5px 3px 23px;
    background-size: 14px 14px;
    color: #666;
    transition: all .5s;
    border-radius: 15px;
    font-size: 14px;
    width: 236px;
    line-height: 20px;
    position: absolute;
    top: 13px;
    left: 210px;
    border: 1px;
}
input:focus,input:hover{
  background-color: #eee;
  outline:none;
}
</style>
