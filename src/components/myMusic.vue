<template>
  <div id="myMusic">
     <div>
        <transition-group name="fade">
               <div class="myMusic" v-show="istrue" @click.stop="musicUp" key="show">
                 <ul>
                   <li class="upto" ></li>
                   <li class="volume" @click.stop="musicStar"></li>
                   <li class="start" @click.stop="musicRotate"></li>
                   <li class="next" @click.stop="nextSing"></li>
                   <li class="stop" @click.stop="musicModle"></li>
                 </ul>
               </div>
               <div class="music_content" v-show="!istrue" key="hide">
                 <div class="downto" @click="musicDown"></div>
                 <div class="animate">
                     <p style="font-size:2em;">歌名</p>
                     <p>歌手名</p>
                     <div class="myStart" style="-webkit-animation-play-state:paused;">
                         <img src="../images/6_03.jpg" style="width:100%;height:100%;"/>
                     </div>
                 </div>
                 <div class="myMusic" style="height:15em; background:none;">
                     <ul>
                       <li class="stop" style="margin-left:7em;" @click.stop="musicModle"></li>
                       <li class="prev" @click.stop="prevSing"></li>
                       <li class="start" @click="musicRotate"></li>
                       <li class="next"  @click.stop="nextSing"></li>
                       <li class="volume" @click.stop="musicStar"></li>
                     </ul>
                 </div>
               </div>
               <div key="audio">
                   <audio :src="baseUrl+musicLibrary[this.i]" id="audio"></audio>
               </div>
        </transition-group>
     </div>
  </div>
</template>
<script>
export default{
  name:'myMusic',
  data(){
    return{
          i:0,
          istrue:true,
          isStart:true,
          isAudio:"",
          isStar:true,
          isMusicModle:true,
          baseUrl:"../../static/audio/",
          musicLibrary:["1.mp3","2.mp3","3.mp3","4.mp3","5.mp3"]
    }
  },
  methods:{
     musicUp(){
        this.istrue=false;
     },
     musicDown(){
        this.istrue=true;
     },
     musicRotate(){
            this.isAudio=document.getElementById("audio")
            if(this.isStart){
                this.isStart=!this.isStart;
                $(".animate>div").css("animation-play-state","running")
                this.isAudio.play();
                 $(".start").css("background","url(../../static/img/9_03.jpg) no-repeat center center")
            }else{
               this.isStart=!this.isStart;
               $(".animate>div").css("animation-play-state","paused")
               this.isAudio.pause();
               $(".start").css("background","url(../../static/img/stop.png) no-repeat center center")
            }
     },
     musicStar(){
        if(this.isStar){
                $(".volume").css("background","url(../../static/img/1111.png) no-repeat center center")
                this.isStar=!this.isStar;
        }else{
          $(".volume").css("background","url(../../static/img/11_03.jpg) no-repeat center center")
          this.isStar=!this.isStar;
        }
     },
     prevSing(){
       if(this.i>0){
            this.i-=1;
            this.isStart=true;
            $(".start").css("background","url(../../static/img/stop.png) no-repeat center center")
       }
     },
     nextSing(){
        if(this.i<this.musicLibrary.length){
           this.i+=1;
           this.isStart=true;
           $(".start").css("background","url(../../static/img/stop.png) no-repeat center center")
        }
     },
     musicModle(){
        if(this.isMusicModle){
               $(".stop").css("background","url(../../static/img/7_03.png) no-repeat center center")
               this.isMusicModle=!this.isMusicModle;
        }else{
             $(".stop").css("background","url(../../static/img/7_03.jpg) no-repeat center center")
             this.isMusicModle=!this.isMusicModle;
        }
     }
  }
}
</script>
<style scoped>

/*播放器*/
.myMusic{
  width: 100%;
  height: 6.5em;
  background: #86878e;
  position: fixed;
  bottom: 0;
  left: 0;
}
.myMusic>ul>li{
  float: left;
}
.myMusic>ul>li.upto{
   background: url(../images/777_03.png) no-repeat center center;
    width: 3.1em;
     height: 3.1em;
     border-radius:50%;
     margin-top:1.7em;
     margin-left:3em;
     margin-right:6em;
 }
.myMusic>ul>li.stop{
  background: url(../images/7_03.jpg) no-repeat center center;
   width: 3.1em;
    height: 3.1em;
    border-radius:50%;
    margin-top:1.7em;
    margin-left:5em;
    margin-right:2em;
}
.myMusic>ul>li.volume{
  background: url(../images/11_03.jpg) no-repeat center center;
   width: 3.3em;
   height: 3.3em;
   border-radius:50%;
   margin-top:1.6em;
   margin-left:2em;
   margin-right:2em;
}
.myMusic>ul>li.start{
  background: url(../images/stop.png) no-repeat center center;
  width:4em;
  height: 4em;
  border-radius:50%;
  margin-top:1.2em;
  margin-left:3em;
  margin-right:3em;
}
.myMusic>ul>li.next{
  background: url(../images/10_04.jpg) no-repeat center center;
  border-radius:50%;
  width: 3.1em;
  height: 3.1em;
  margin-top:1.7em;
  margin-left:2em;
  margin-right:2em;
}
.myMusic>ul>li.prev{
  background: url(../images/8_03.jpg) no-repeat center center;
  width: 3.1em;
  height: 3.1em;
  border-radius:50%;
  margin-top:1.7em;
  margin-left:2em;
  margin-right:2em;
  }
.music_content{
  width: 100%;
  height:87.2em;
  background:url(../images/1_03.jpg) no-repeat;
  background-size:100% 100%;
  opacity:1;
  position: fixed;
  bottom: 0;
  right: 0;
}
.downto{
    width:5em;
    height:5em;
    background:url(../images/666_03.png) no-repeat center center
}
/*动画1*/
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter, .fade-leave-to {
  height:0;
  opacity:0;
}
/*动画2*/
.animate{
    width:100%;
    height:50em;
}
.animate>p{
    width:100%;
    height:2em;
    font-size:1.5em;
    color:#fff;
    text-align:center;
    line-height:2em;
}
.animate>div{
    width:40em;
    height:40em;
    border-radius:100%;
    margin:2em auto;
    overflow: hidden;
    animation:zhuan 5s linear infinite;
    animation-play-state:paused;
    -webkit-animation-play-state:paused;
}
@keyframes zhuan{
			0%{transform:rotatez(0deg);}
			50%{transform:rotatez(180deg);}
			100%{transform:rotatez(360deg);}
}









</style>