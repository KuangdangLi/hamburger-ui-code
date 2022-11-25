<template>
  <button @click="toggle" :class="{selected:x}"><span></span></button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
 name:'Switch',
  setup(){
   const x = ref(false)
   const toggle = ()=>{
     x.value = !x.value
   }
    return {toggle,x}
  }
}
</script>

<style lang="scss" scoped>
$h:22px;
$h2:$h - 4px;
button{
  width: $h*2;
  height: $h;
  background-color: grey;
  border-radius: $h/2;
  border: none;
  position: relative;
  >span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:red;
    border-radius: $h2/2;

  }
  &.selected{
    >span{
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>