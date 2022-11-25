<template>
  <button @click="toggle" :class="{selected:checked}"><span></span></button>
</template>

<script lang="ts">

export default {
 name:'Switch',
  props:{
    checked:Boolean,
  },
  setup(props,context){
   const toggle = ()=>{
     context.emit('update:checked',!props.checked)
   }
    return {toggle}
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
    transition: left 250ms;
  }
  &.selected{
    >span{
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>