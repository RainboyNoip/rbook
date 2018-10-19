<template>
  <div class="comment-content">
    <div id="comment" ref="comment">
    </div>
  </div>
</template>
<script>

import Gitalk from 'gitalk'
import md5 from 'md5'
var config = require('../../config.js')
import {bus } from './bus.js'
export default {
  data(){
    return {
    }
  },
  mounted(){
    bus.$on("commentRender",this.render)
    let _path_ = decodeURI(this.$route.path);
    if( _path_ == "/")
      _path_ = '/book/README'
    
    this.render(_path_)
  }
  ,
  methods:{
    render(path){
      this.$refs["comment"].innerHTML = ""
      let comment_config = config.commentConfig
      console.log("comment渲染的路径:",path)
      comment_config.id =  md5(path)
      console.log("comment组件内部,开始渲染:",comment_config.id)
      var gitalk = new Gitalk(comment_config)
      gitalk.render(this.$refs["comment"])
    }
  }
}
</script>
<style>
.comment-content {
  max-width:1000px;
  margin:0 auto;
}
</style>
