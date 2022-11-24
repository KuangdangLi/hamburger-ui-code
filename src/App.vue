<template>
  <RouterView />
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup(){
    let screenWidth = ()=>document.documentElement.clientWidth
    window.onresize = ()=>{
      menuVisible.value = screenWidth()< 500 ? false : true
    }
    const menuVisible = ref(screenWidth() < 500 ? false : true)
    provide('menuVisible',menuVisible)
  }
}
</script>
