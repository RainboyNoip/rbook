import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'

Vue.use(Router)

import App from  '../App.vue'

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if( to.path === '/'){

  store.dispatch('getArticle', { _path:"/book/README" })
    next()
    return;
  }

  console.log('分发:',to.path)
  store.dispatch('getArticle', {
    _path:to.path
  })
  next()
})

export default router
