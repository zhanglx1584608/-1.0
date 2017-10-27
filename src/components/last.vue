<template>
  <div class="last_list">
    <ul>
      <li v-for="item in paih">
        <img :src="item.pic" alt=""/>
        <ul>
          <li v-for="title in item.list">{{title}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name:'last',
  data(){
    return{
       paih:[
              {pic: "./src/images/4.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/5.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/6.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/7.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/4.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/5.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/5.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/5.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/5.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/5.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]},
              {pic: "./src/images/6.jpg",list:["1 等我回家-薛之谦/王乐鑫","2 十年-陈奕迅","3 夏至未至-胡夏"]}
            ]
    }
  }
}
</script>
<style scoped>
/*排行榜*/
.last_list{
  float:left;
  width: 90%;
  padding-left:2.5em;
  margin: 3em auto 6.5em;
}
.last_list>ul>li{
  float: left;
  width: 100%;
  margin-bottom:2em;
}
.last_list>ul>li>img{
  float: left;
}
.last_list>ul>li>ul{
  float: left;
  width: 72%;
  background: #333333;
  padding:1.2em 0 1.2em 1.8em;
}
.last_list>ul>li>ul>li{
  float: left;
  width: 100%;
  line-height: 1.3em;
  font-size: 2em;
  color: #717171;
}
</style>