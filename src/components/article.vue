<template>
  <div class="content" :style="{display:isLogin?'':'none'}" ref="content">
    <loading></loading>
    <div>
      <div class="markdown-body" v-html="_content" ref="markdown_body">
      </div>
      <br>
      <br>
      <br>
      <comment> </comment>
    </div>
    <toolbar></toolbar>
  </div>
</template>

<script>
import icon from '../components/Icon.vue'
import toolbar from './toolbar.vue'
import loading from './loding.vue'
import imagePath from '../imagePath.js'
import slideMenu from '../slideMenu.js'
import comment from '../components/comment.vue'


import {bus } from './bus.js'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components:{
    icon,
    toolbar,
    loading,
    comment
  },
  mounted(){
    bus.$on("goTop",this.goTop)
    bus.$on("goDown",this.goDown)
  },
  computed:{
    _content(){
      let _content = this.markdown_render(this.$store.getters.content)
      let _path = this.$route.path
      let lp = 0

      if(_path !== '/'){
        lp = _path.lastIndexOf('/')
        _path = _path.slice(0,lp+1)
      }
      let _res = imagePath(_content,_path)
      return _res
    },
    isLogin(){
      return this.$store.getters.isLogin
    }
  },
  methods:{
    sendSlideLeft(){
      bus.$emit("slideLeft")
    },
    goTop(){
      slideMenu.goTop( this.$refs.content)
    },
    goDown(){
      slideMenu.goDown( this.$refs["markdown_body"])
    },
  }
}
</script>

<style>
.content {
  overflow-x:hidden;
  position:relative;
  overflow-y:scroll;
  flex:1;
  padding:0;
}

.content .markdown-body {
  max-width:1000px;
  margin:0 auto;
}
</style>
