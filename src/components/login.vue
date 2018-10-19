<template>
  <div class="login" :style="note" :class="{'login-hide':isLogin}">
    <video ref="video" preload="preload" :style="{display:videoShow?'':'none'}">
      <source  :src="default_video" type="video/mp4" >
    </video>
    <div class="video-close" >
      <i class="fa fa-backward"></i>
      <i :class="{fa:true,'fa-pause':videoShow,'fa-play':!videoShow}" @click="videoHide"></i>
      <i class="fa fa-forward" @click="videoNext"></i>
    </div>
    <canvas></canvas>
    <div class="login-content">
      <div class="wrap center"> <!-- Just to center ver and hor -->
        <div class="wrap-label">
          <p class="iconicfill-pen-alt2"></p>
        </div>
        <input v-model="secret" type="password" id="name" @keyup.enter="verify">
      </div>
    </div>
  </div>
</template>

<script>
var str_de  = require("../utils/str_de.js")
import __back__ from '../canvas.js'
var config  =require("../../config.js")
export default {
  data(){
    return {
      secret:'',
      loginHide:false,
      note: {
            backgroundImage: "url('/book/login.jpg')",
            backgroundRepeat: "no-repeat",
      },
      default_video:config.videoList[0].src,
      videoShow:false,
      videoIdx:0
    }
  },
  mounted(){
    let self  =this
    //animate()
    __back__()
    //self.videoNext() //默认不播放

    this.__verify()
    //播放事件 监听
    let vi = this.$refs.video
    vi.addEventListener("ended", function(){
      self.videoNext()
    })
  },
  methods:{
    __login(){
        let dataTime = Date.now()
        localStorage.setItem("time",dataTime)
        let sss = str_de(config.secret)
        localStorage.setItem("secret",sss)
    },
    __verify(){
      if(config.secret.length == 0 || config.secret.length == null) {
          this.realvideoPasue()
          this.$store.state.isLogin = true;
          console.log("yes")
      }
      else if(localStorage.getItem("time") && localStorage.getItem("secret")){
        let sss = localStorage.getItem("secret")
        let time = localStorage.getItem("time")
        if( sss === str_de(config.secret) && (Date.now()- time <( config.saveDays * 24 *60 *60*1000))){
          this.realvideoPasue()
          this.$store.state.isLogin = true;
          console.log("yes")
        }
      }
    },
    verify(){
    
      if((str_de(this.secret)) === config.secret){
        //成功
        this.__login();
        this.realvideoPasue()
        this.$store.state.isLogin = true;
        console.log("yes")
      }
    },
    realvideoPasue(){
      let vi = this.$refs.video
      vi.pause()
    },
    videoPasue(){
      //$(this.$refs.video).pasue()
      let vi = this.$refs.video
      if(vi.paused){
        this.videoShow = true;
        vi.playbackRate = config.videoList[this.videoIdx].rate;
        vi.play()
      }
      else{
        this.videoShow = false;
        vi.pause()
      }
    },
    videoHide(){
      this.videoPasue()
    },
    videoNext(){
      let vi = this.$refs.video
      //if(vi.paused) return;
      let len = config.videoList.length-1
      if( this.videoIdx+1 >len)
        this.videoIdx = 0;
      else
        this.videoIdx++;
      $(vi).children("source").attr("src",config.videoList[this.videoIdx].src)
      vi.load()
      vi.play()
      vi.playbackRate = config.videoList[this.videoIdx].rate;
    }
  },
  computed:{
    isLogin(){
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style>

.login {
  height:100%;
  width:100%;
  position:fixed;
  //background:rgba(0,0,0,0.5);
  z-index:9999;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}

.login-hide {
  display:none;
}

.video-close {
  position:fixed;
  z-index:99;
  height:30px;
  width:30px;
  color:#7a7a7a;
  text-align:center;
  cursor:pointer;
  right:20px;
  top:20px;
}


.video-close>i{
  display:none;
}

.video-close:hover>i{
  display:block;
}

.video-close>i:hover {
  color:#fafafa;
}

.login-content {
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
/* iconicfill */
[class*="iconicfill-"]:before {
  font-family: 'IconicFill', sans-serif;
}

.wrap{width:300px;}

.wrap input{
  display:block;
    width: 300px;
    padding: 15px 0 15px 12px;
    font-family: "Arvo";
    font-weight: 400;
    color: #377D6A;
    background: rgba(0,0,0,0.000001);
    border: none;
    outline: none;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    text-indent: 60px;
    transition: all .3s ease-in-out;
    position: relative;
    font-size: 13px;

}

.wrap input:hover {
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px  1px rgba(255,255,255,0.2);
}
.wrap input:focus{
    text-indent: 12px;
    box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2);
}

label{
    display: block;
    position: static;
    margin: 0;
    padding: 0;
    color:#fff;
    font-family: 'Arvo';
    font-size: 16px;
}

.wrap-label{
  width: 300px;
  height: 34px;
  position: relative;
  padding: 0;
  margin: 0;
  bottom: -15px;
  overflow: hidden;}

.iconicfill-pen-alt2{
    position: absolute;
    left: 10px;
    color: #fff;
    font-size:19px;
    opacity: 1;
    top: 0;
    transform:translateX(-100px);
}

/* ==== Pen animation ==== */
.move-pen{animation: move-pen 1s ease-in infinite alternate;}
@keyframes move-pen{
    from{transform:translateX(-4px) rotate(6deg);}
    to{transform:translateX(4px) rotate(-3deg);}
}
canvas {

  height:100%;
  width:100%;
 // background:#eee;
}
video{
  position: fixed;
  //right: 0px;
  //bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  width: 100%;
  background:#000;
  object-fit:fill;
  /*加滤镜*/
  /*-webkit-filter: grayscale(100%);*/
  /*filter:grayscale(100%);*/
}
source{
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}


</style>
