<demo>
按钮等级
</demo>
<template>
  <div>
    <Button level="main">Button</Button>
    <Button>Button</Button>
    <Button level="danger">Button</Button>
  </div>
  <div>
    <Button theme="link" level="main">Button</Button>
    <Button theme="link">Button</Button>
    <Button theme="link" level="danger">Button</Button>
  </div>
  <div>
    <Button theme="text" level="main">Button</Button>
    <Button theme="text">Button</Button>
    <Button theme="text" level="danger">Button</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  name:'Button3Demo',
  components: {Button}
}
</script>