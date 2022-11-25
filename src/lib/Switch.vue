<template>
  <button><span></span></button>
</template>

<script lang="ts">
export default {
 name:'Switch'
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
    background:white;
    border-radius: $h2/2;
  }
}
</style>