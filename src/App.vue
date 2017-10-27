<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-music></my-music>
  </div>
</template>
<script>
  import myHeader from "./components/header.vue"
  import myMusic from "./components/myMusic.vue"

  export default{
    name:'app',
    components:{
      myHeader:myHeader,
      myMusic:myMusic,
    }
  }

</script>

<style>
</style>
