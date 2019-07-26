<template>
<div class="pagination">
  <button @click="firstbtn">首页</button>
  <button @click="prevbtn">上一页</button>
  <button v-if="jduge" class="pagebtn">.....</button>
  <button v-for="btn in pagebtns"
          @click="changeBtn(btn)"
  :class="[{
    'current' : (btn == currentPage)
    },'pagebtn']">
    {{btn}}
  </button>
  <button @click="nextbtn">下一页</button>
</div>
</template>

<script>

    export default {
      name: "Pagination",
      data: function(){
          return {
            pagebtns:this.yyy,
            currentPage:this.xxx,
            jduge :this.zzz,
          }
      },
      props:[
        "xxx","yyy","zzz"
      ],
      methods:{
        firstbtn:function(){
          this.currentPage = 1;
          this.pagebtns = [1,2,3,4,5,'.....'];
          this.jduge = false;
          this.$emit('handleList',this.currentPage,this.pagebtns,this.jduge); 
        },
        prevbtn:function(){
          if(this.currentPage !== 1){
           this.currentPage = this.xxx - 1;
           this.changeBtn(this.currentPage)
           }
        },
        nextbtn:function(){
          this.currentPage = this.xxx + 1;
          this.changeBtn(this.currentPage)
        },
        changeBtn(page){
            this.currentPage = page;
            if(page>4){
              this.jduge = true;
            }else{
              this.jduge = false;
            }
            if(page == this.pagebtns[4] ){
              this.pagebtns.shift();//移除第一个元素
              this.pagebtns.splice(4,0,this.pagebtns[3]+1);//添加最后一个
            }else if(page == this.pagebtns[0] && page !=1){
              //先在第一个位置加一个
              this.pagebtns.unshift(this.pagebtns[0]-1);
                //移除最后一个数字
              this.pagebtns.splice(5,1);
            }
            this.$emit('handleList',this.currentPage,this.pagebtns,this.jduge); 
        }
      }
    }
</script>

<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 6px 20px;
    border-radius: 5px;
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .current {
    color: white;
    background-color: #1f1b1b;

  }
</style>
