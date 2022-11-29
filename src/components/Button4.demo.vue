<demo>
按钮禁用状态
</demo>
<template>
  <div>
    <Button disabled>Button</Button>
    <Button theme="link" disabled>Button</Button>
    <Button theme="text" disabled>Button</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  name:'Button4Demo',
  components: {Button}
}
</script>