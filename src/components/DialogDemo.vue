<template>
  <div>示例一</div>
  <Button @click="toggle">Dialog</Button>
  <Dialog :visible="visible"></Dialog>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import {ref} from 'vue';
export default {
  name:'Dialog Demo',
  components: {Dialog, Button},
  setup(){
    const visible = ref(false)
    const toggle = ()=>{
      visible.value = !visible.value
    }
    return {visible,toggle}
  }
}
</script>

<style lang="scss" scoped>

</style>