<template>
  <div>
    <div class="banner">
      <span ></span>
    </div>
    <div class="header">
      <ul>
        <li><router-link to="/">推荐</router-link></li>
        <li><router-link to="/singer">歌手</router-link></li>
        <li><router-link to="/last">排行</router-link></li>
        <li><router-link to="/search">搜索</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name:'header'
}
</script>
<style scoped>
/*banner部分*/
.banner{
  width: 100%;
  height:6em;
  background:url(../images/1_03.png) no-repeat center center;
}
.banner>span{
  float: right;
  width: 80px;
  height: 4em;
  background: url(../images/2_03.png) no-repeat center center;
}
.header{
  width: 100%;
  height: 4em;
}
.header>ul>li{
  float: left;
  width: 25%;
  height: 3em;
  text-align: center;
  line-height: 3em;
  font-size: 1.5em;
  list-style: none;
}
.header>ul>li>a{
  text-decoration: none;
  color: #919191;
}
.header>ul>li>a.router-link-exact-active{
  color: #ffcd32;
  padding: 0 0 0.7em 0;
  border-bottom: 2px solid #ffcd32;
}

</style>