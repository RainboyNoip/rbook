<template>
  <i :class="_name" aria-hidden="true"></i>
</template>

<script>
export default {
  name: 'Icon',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    _name(){
      return 'fa '+this.name
    }
  },
  props:{
    name:String,
    default(){
      return 'fa-home'
    }
  }
}
</script>
