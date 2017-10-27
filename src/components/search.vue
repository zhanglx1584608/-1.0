<template>
  <div class="search">
    <input type="text" placeholder="搜索歌曲、歌手" v-model="content" @keyup.enter="add"/>
    <h3>热门搜索</h3>
    <ul class="search_hot">
      <li v-for="(item,ind) in hotSearch" @click="want_hot(ind)">{{item}}</li>
    </ul>
    <p>搜索历史 <span @click="delAll"></span></p>
    <ul class="search_list">
      <li v-for="(history,index) in hotHistory">{{history}}<span @click="del(index)"></span></li>
    </ul>
  </div>
</template>
<script>
import $ from 'jquery'
export default{
  name:'search',
  data(){
    return{
       hotSearch:["邓紫棋","鹿晗","周杰伦","刚好遇见你","消愁","布拉格广场","2002年第一场雪","吴亦凡"],
       hotHistory:[],
       content:''
    }
  },
  methods:{
    add(){
          var isyou= true;

          for(var i=0; i<this.hotHistory.length;i++){
            if(this.hotHistory[i]===this.content){
              isyou=false;
            }else{
              isyou=true;
            }
          }
          if(isyou){
            this.hotHistory.push(this.content);
          }
        },
        del(index){
          this.hotHistory.splice(index,1)

        },
        delAll(){

          this.hotHistory.splice(0)
        },
        want_hot(ind){
           var my_con=$(".search_hot>li").eq(ind).text();
           this.content=my_con
        }
  }

}
</script>
<style scoped>
/*搜索页*/
.search{
  width: 90%;
  margin: 3em auto 0;
}
.search>input{
  width: 88%;
  height: 3em;
  font-size: 1.8em;
  padding-left:3em ;
  border-radius: 0.8em;
  border: 0;
  color:#ccc;
  background: #333333 url(../images/111.jpg) no-repeat 1em center;
}
.search>h3{
  font-size: 2em;
  margin: 2em 0;
  color: #707070;
}
.search>.search_hot{
  width: 100%;
  margin: 0 auto;
}
.search>.search_hot>li{
float: left;
color: #707070;
font-size: 2em;
padding: 0.3em 1em;
border-radius: 0.5em;
background: #333333;
  margin: 0 1em 1em 0;
}
.search>p{
  float: left;
  width: 100%;
  margin: 1em 0;
  color: #909090;
  font-size: 2em;
}
.search>p>span{
  float: right;
  width: 1.5em;
  height: 1.2em;
  background: url(../images/10_03.jpg) no-repeat center center;
}
.search>.search_list{
  float: left;
  width: 100%;
  margin: 0 auto;
}
.search>.search_list>li{
  width: 100%;
  height: 2em;
  font-size: 2.1em;
  line-height: 2em;
  color: #919191;
}
.search>.search_list>li>span{
  float: right;
  width: 1.5em;
  height: 2em;
  background:url(../images/cha_03.jpg) no-repeat center center ;
}


</style>