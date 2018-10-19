import Vue from 'vue'
import Vuex from 'vuex'
import {bus} from '../components/bus.js'
var api = require('../service')

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    tags:[],
    authors:[],
    isGet:false,
    isLogin:false,
    content:'',
    is404:false,
    localStore:{
      'time':1510990787239,
      'secret':''
    }
  },
  actions:{
    //检查是否登录
    //得到文章
    getArticle({commit},{_path}) {
      commit('getArticle',_path)
    }
  },
  getters:{
    tags: state=>{
      return state.tags;
    },
    authors: state => {
      return state.authors
    },
    content: state => {
      return state.content
    },
    isLogin: state => {
      return state.isLogin
    }
  },
  mutations:{
    getArticle(state,_path){
      console.log("重新渲染 comment",_path)
      bus.$emit("commentRender",_path)
      console.log("vuex 模块get路径 :",_path)
      bus.$emit("loading",true)
      api(_path+".md").then(function(data){
        state.content = data
        //console.log(data)
        bus.$emit("loading",false)
      })
      .catch(function(err){
        console.log(err)
      })
    },
  }
})
