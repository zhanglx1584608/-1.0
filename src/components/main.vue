<template>
  <div class="tjy">
      <div class="lunbo">
        <mt-swipe :auto="3000">
          <mt-swipe-item><img src="../images/123.jpg"  width="100%" height="100%"/></mt-swipe-item>
          <mt-swipe-item><img src="../images/2.jpg"  width="100%" height="100%"/></mt-swipe-item>
          <mt-swipe-item><img src="../images/333.jpg"  width="100%" height="100%"/></mt-swipe-item>
          <mt-swipe-item><img src="../images/444.jpg"  width="100%" height="100%"/></mt-swipe-item>
        </mt-swipe>
      </div>
      <h1>热门歌单推荐</h1>
      <div class="tjy_list">
        <ul>
          <li v-for="item in shuju">
            <img :src="item.pic" alt=""/>
            <h3>{{item.title}}</h3>
            <p>{{item.fanyi}}</p>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default{
    name:'main',
    data(){
        return{
               shuju:
                  [
                        {pic: "./src/images/1_03.jpg", title: "我们不一样", fanyi: "后摇滚人声风采，通往心灵的独白通往心灵的独白1"},
                        {pic: "./src/images/1_03.jpg", title: "我们不一样", fanyi: "后摇滚人声风采，通往心灵的独白1"},
                        {pic: "./src/images/1_04_03.jpg", title: "童年记忆", fanyi: "后摇滚人声风采，通往心灵的独白2"},
                        {pic: "./src/images/1_04_03.jpg", title: "童年记忆", fanyi: "后摇滚人声风采，通往心灵的独白2"},
                        {pic: "./src/images/2_03.jpg", title: "爱是你我", fanyi: "后摇滚人声风采，通往心灵的独白3"},
                        {pic: "./src/images/2_03.jpg", title: "爱是你我", fanyi: "后摇滚人声风采，通往心灵的独白3"},
                        {pic: "./src/images/1_04_03.jpg", title: "童年记忆", fanyi: "后摇滚人声风采，通往心灵的独白2"},
                        {pic: "./src/images/2_03.jpg", title: "爱是你我", fanyi: "后摇滚人声风采，通往心灵的独白3"},
                        {pic: "./src/images/1_04_03.jpg", title: "童年记忆", fanyi: "后摇滚人声风采，通往心灵的独白2"},
                        {pic: "./src/images/2_03.jpg", title: "爱是你我", fanyi: "后摇滚人声风采，通往心灵的独白3"},
                        {pic: "./src/images/3.jpg", title: "冲动的惩罚", fanyi: "后摇滚人声风采，通往心灵的独白4"}
                  ]
        }

    }
}
</script>
<style scoped>
/*推荐页*/
.mint-swipe{
    width:100%;
    height:20em;
}
.mint-swipe-item{
background:#f60;
color:#fff;
font-size:5em;
}
.mint-swipe-indicator{
width:10px;
height:10px;
background:red;
}
.mint-swipe-indicators{
    width:10em;
}
.lunbo{
margin-top:1em;
width:100%;
height:20em;
}
.tjy>h1{
  width: 100%;
  height: 3em;
  font-size:2em;
  text-align: center;
  line-height: 3em;
  color: #ffcd32;
}
.tjy>.tjy_list{
float:left;
  width: 100%;
  margin-bottom:6.5em;
}
.tjy>.tjy_list>ul>li{
  float: left;
  width: 100%;
  padding:0 2.5em;
  margin-bottom: 2em;
  box-sizing:border-box;
}
.tjy>.tjy_list>ul>li>img{
  float: left;
  width: 10em;
  height: 10em;
  margin-right: 1.2em;
}
.tjy>.tjy_list>ul>li>h3{
  float: left;
  width: 74%;
  font-size: 2em;
  line-height: 2.1em;
  color: #fff;
}
.tjy>.tjy_list>ul>li>p{
  float: left;
  width: 74%;
  font-size: 1.8em;
  line-height: 1.6em;
  color: #656565;
}
</style>