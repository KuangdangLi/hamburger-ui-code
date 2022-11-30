<demo>
按钮尺寸
</demo>
<template>
  <div>
    <Button theme="button" size="big">Button</Button>
    <Button theme="button" size="normal">Button</Button>
    <Button theme="button" size="small">Button</Button>
  </div>
  <div class="middle">
    <Button theme="link" size="big">Button</Button>
    <Button theme="link" size="normal">Button</Button>
    <Button theme="link" size="small">Button</Button>
  </div>
  <div>
    <Button theme="text" size="big">Button</Button>
    <Button theme="text" size="normal">Button</Button>
    <Button theme="text" size="small">Button</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  name:'Button2Demo',
  components: {Button}
}
</script>

<style lang="scss" scoped>
  .middle{
    margin: 10px 0;
  }
</style>
