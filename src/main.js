import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index.js'


//import "katex/dist/katex.min.css"
import "rmarked/css/github-markdown.css"
import 'gitalk/dist/gitalk.css'
import "highlight.js/styles/tomorrow-night-blue.css"



var markdown = require("rmarked")({clipbordCopy:true,image:true})
Vue.prototype.markdown_render = markdown

/* 删除loading.gif */
document.getElementById("loading").setAttribute("style","display:none")


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
