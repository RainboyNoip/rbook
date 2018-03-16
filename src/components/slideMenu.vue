<template>
  <div class="vertical-nav" ref="slideMenu" :style="{display:isLogin?'':'none'}">
    <ul class="menu-showhide">
      <li>
        <span class="title">MENU</span>
        <span class="category">目录</span>
      </li>
    </ul>
    <div class="vertical-body">
      <div class="filterform">
        <input v-model="search_data" class="filterinput" type="text" placeholder="按enter搜索" @keyup.enter="search"></input>
      </div>
      <div class="vertical-nav-content" v-html="list">
      </div>
    </div>
  </div>
</template>


<script>
import icon from '../components/Icon.vue'
import util from '../utils.js'
import get from '../service/index.js'
import { bus } from './bus.js'
//var slideMenu = require("../slideMenu.js")
import slideMenu from '../slideMenu.js'
export default {
  name: 'slideMenu',
  data () {
    return {
      search_data:''
    }
  },
  props:{
    list:String
  },
  components:{
    icon
  },
  mounted(){
    //事件注册
   // this.$on("init",this.init)
    bus.$on("init",this.init)
    bus.$on("slideLeft",this.slideLeft)
  },
  methods:{
    init(){
      this.$nextTick(function(){
        slideMenu.init(this.$refs.slideMenu);
      })
    },
    slideLeft(){
      slideMenu.slideLeft()
    },
    search(){
      console.log(this.search_data)
      slideMenu.find(this.search_data)
    },
  },
  computed:{
    isLogin(){
      return this.$store.getters.isLogin
    }
  }

}
</script>

<style>

//scoll bar
::-webkit-scrollbar-track-piece{width:3px;background-color:#4e4e5a ;  }
::-webkit-scrollbar{width:3px;height:6px ; }
::-webkit-scrollbar-thumb{height:50px;background:#3fb560;   cursor:pointer;}
::-webkit-scrollbar-thumb:hover{background:#3fb560 ; cursor:pointer}

.vertical-nav {
  display:block;
  position:relative;
  height:100%;
  width:200px;
  color:#fff;
  background:#ddd;
  overflow-x:hidden;
  overflow-y:scroll;
}

.vertical-nav a {
  text-decoration:none;
}

.vertical-nav ul{
  padding:0px;
  background:#222;
  margin:0px;
}


.menu-showhide {
  display:none;
  height:50px;
  cursor:pointer;
}

.menu-showhide li {
  display:list-item;
}

.menu-showhide span.title {
  float:left;
}

.menu-showhide span.category{
  float:right;
}

.vertical-nav li{
  list-style:none;
  width:100%;
  //border:1px solid #fff;
}

.nav-about {
}

.vertical-nav-content {
  font-size:13px;
}

.vertical-nav-content a {
  display:block;
  width:100%;
  color:#f0f0f0;
  cursor:pointer;
  padding: 8px 22px;
	-o-transition: color .2s linear,background .2s linear;
	-moz-transition: color .2s linear,background .2s linear;
	-webkit-transition: color .2s linear,background .2s linear;
	transition: color .2s linear,background .2s linear
}

.vertical-nav-content a.highlight {
  background:#fff !important;
  color:#000 !important;
}


.vertical-nav-content >ul>li.active>a,.vertical-nav-content >ul>li:hover>a {
	color: #fff;
	background: #DA4453;
}

.vertical-nav-content>ul>li>a{
  padding-left:20px;
  background:#ED5565;
  border-bottom:1px solid #DA4453;

}
.vertical-nav-content>ul>li>ul>li>a{
  padding-left:35px;
  background:#383838;
}

.vertical-nav-content>ul>li>ul>li>ul>li>a{
  padding-left:50px;
  background:#555;
}
.vertical-nav-content>ul>li>ul>li>ul>li>ul>li>a{
  padding-left:65px;
  background:#9a9a9a;
}

.vertical-nav-content>ul>li>ul>li>ul>li>ul>li>ul>li>a{
  padding-left:80px;
  background:#b3b3b3;
}



.vertical-nav-content>ul>li ul {
  //padding-left:10px;
}

.vertical-nav-content>ul>li li {
}

.vertical-nav-content .submenu-indicator {
    float: right;
    //margin-top:-27px;
    right: 5px;
    position: absolute;
    line-height: 19px;
    font-size: 20px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: crosshair;
    -o-transition: transform .3s linear;
    -moz-transition: transform .3s linear;
    -webkit-transition: transform .3s linear;
    -ms-transition: transform .3s linear
}
.vertical-nav-content .submenu-indicator-minus .submenu-indicator {
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.filterform {
  background:#DA4453;;
  padding:10px 0;
}

.filterform .filterinput {
    background-color: rgba(249, 244, 244, 0);
    border-radius: 15px;
    width: 90%;
    height: 30px;
    border: thin solid #FFF;
    text-indent: 0.5em;
    font-weight: bold;
    color: #FFF;
    margin:0 auto;
    display:block;
    background:no-repeat 0 0 scroll ＃EEEEEE;
    outline:medium;
}


@media screen and (max-width: 768px) {
  .vertical-nav {
    width:100%;
  }
  .menu-showhide {
    display:block;
  }
  .vertical-body{
    display:none;
  }
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#C6CBD3;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:#C6CBD3;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:#C6CBD3;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:#C6CBD3;
}


</style>
