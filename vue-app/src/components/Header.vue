<template>
    <div class="header">
      <img src="../assets/cnodejs_light.svg" alt="">
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
}
img{
  max-width: 120px;
  margin-top: 10px;
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
    padding: 10px 13px;
  }
a:hover{
  color: #eee;
}
</style>
