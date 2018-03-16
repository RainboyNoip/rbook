import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index.js'

import "rmarked/css/github-markdown.css"
import "katex/dist/katex.min.css"
import "highlight.js/styles/tomorrow-night-blue.css"


var markdown = require("rmarked")({clipbordCopy:true})
Vue.prototype.markdown_render = markdown

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
