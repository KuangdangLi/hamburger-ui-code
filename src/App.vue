<template>
  <RouterView />
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup(){
    let screenWidth = ()=>document.documentElement.clientWidth
    window.onresize = ()=>{
      menuVisible.value = screenWidth()< 500 ? false : true
    }
    const menuVisible = ref(screenWidth() < 500 ? false : true)
    router.afterEach(()=>{
      if(screenWidth()<500){
        menuVisible.value = false
      }
    })
    provide('menuVisible',menuVisible)
  }
}
</script>
