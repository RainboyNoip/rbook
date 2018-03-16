<template>
  <div class="slide-toolbar hvr-sink">
    <div class="sub-slide-toolbar hvr-bubble-bottom">
      <span title="切换菜单"> <icon name="fa fa-bars"></icon> </span>
      <span title="到首页" @click="goHome"> <icon name="fa fa-home" ></icon> </span>
      <!--<span title="上一篇"> <icon name="fa fa-step-backward"></icon> </span>-->
      <!--<span title="下一篇"> <icon name="fa fa-step-forward"></icon> </span>-->
      <span title="到底部" @click="goDown"> <icon name="fa fa-arrow-down"></icon> </span>
    </div>
    <span title="到顶部" class="show-bar hvr-fade" @click="goTop"> <icon name="fa fa-arrow-up"></icon> </span>
  </div>
</template>

<script>
import icon from './Icon.vue'
import {bus } from './bus.js'
export default {
  data(){
    return {
    }
  },
  components:{
    icon
  },
  methods:{
    goTop(){
      bus.$emit("goTop")
    },
    goDown(){
      bus.$emit("goDown")
    },
    goHome(){
      this.$router.push("/")
    }
  }
}
</script>

<style>
.slide-toolbar {
  width:40px;
  bottom:50px;
  right:20px;
  position:fixed;
  z-index:999;
  text-align:center;
}

.slide-toolbar span {
  display:inline-block;
  margin-top:5px;
  color:#fff;
  padding:5px;
  cursor:pointer;
  border-radius:3px;
}

.sub-slide-toolbar {
  display:none;
  transition:all 2s;
  width:auto;
  height:auto;
  padding:3px 0;
  background:#2098D1;
  border-radius:5px;
  -webkit-animation-name: fadeIn; /*动画名称*/
  -webkit-animation-duration: 1s; /*动画持续时间*/
  -webkit-animation-iteration-count: 1; /*动画次数*/
  -webkit-animation-delay: 0s; /*延迟时间*/
}
.sub-slide-toolbar>span {
  display:block;
  margin:3px 0px;
}

.sub-slide-toolbar span:hover {
  box-sizing: border-box;
  background:#24292e;
}


.slide-toolbar .show-bar {
  background:rgba(32,152,209,0.49);
}

.sub-slide-toolbar>span{
  font-size:19px;
  opacity:1;
}

.slide-toolbar:hover div.sub-slide-toolbar{
  display:block;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}

.hvr-sink .show-bar {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-sink:hover .show-bar, .hvr-sink:focus .show-bar, .hvr-sink:active .show-bar {
  -webkit-transform: translateY(8px);
  transform: translateY(8px);
}


.hvr-bubble-bottom {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
}

.hvr-bubble-bottom:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  border-style: solid;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  left: calc(50% - 10px);
  bottom: -10px;
  border-width: 10px 10px 0 10px;
  border-color: #2098D1 transparent transparent transparent;
  -webkit-animation-name: fadeIn; /*动画名称*/
  -webkit-animation-duration: 1s; /*动画持续时间*/
  -webkit-animation-iteration-count: 1; /*动画次数*/
  -webkit-animation-delay: 0s; /*延迟时间*/
}

.hvr-fade {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {
  background-color: #2098D1;
  color: white;
}

</style>
