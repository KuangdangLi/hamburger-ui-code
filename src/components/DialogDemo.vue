<template>
  <div>示例一</div>
  <Button>Dialog</Button>
  <Dialog></Dialog>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
export default {
  name:'Dialog Demo',
  components: {Dialog, Button}
}
</script>

<style lang="scss" scoped>

</style>