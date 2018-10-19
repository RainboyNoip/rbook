<template>
  <div id="app">
    <login></login>
    <slide-menu :list="list" ref="slide"></slide-menu>
    <myarticle></myarticle>
  </div>
</template>

<script>
import slideMenu from './components/slideMenu.vue'
import myarticle from './components/article.vue'
import login from './components/login.vue'
import { bus } from './components/bus.js'
import get from './service/index.js'
import util from './utils.js'
export default {
  name: 'app',
  data () {
    return {
      list:''
    }
  },
  mounted(){
    let self = this
    get("/book/SUMMARY.md").then(function(data){
      self.list = self.markdown_render(data)
     //self.$refs.slide.$emit("init")
      bus.$emit("init")
    })
  },
  components:{
    slideMenu,
    myarticle,
    login
  }
}
</script>

<style>
html,body {
  padding:0px;
  margin:0px;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
  display:block;
  height:100%;
  display:flex;
}
</style>
