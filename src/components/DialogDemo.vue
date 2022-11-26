<template>
  <div>示例一</div>
  <Button @click="toggle">Dialog</Button>
    <Dialog :visible="visible" v-model:visible="visible" :close-on-click-over-clay="false" :ok="ok" :cancel="cancel">
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <div>
          <strong>内容一</strong>
        </div>
        <div>
          <strong>内容二</strong>
        </div>
        <div>
          <strong>内容三</strong>
        </div>
      </template>
    </Dialog>
  <Button @click="showDialog">一句代码打开Dialog</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import {h, ref} from 'vue';
import {openDialog} from '../lib/onpnDialog';
export default {
  name:'Dialog Demo',
  components: {Dialog, Button},
  setup(){
    const visible = ref(false)
    const toggle = ()=>{
      visible.value = !visible.value
    }
    const ok =()=>{
      return false
    }
    const cancel=()=>{
      console.log('cancel')
    }
    const showDialog = ()=>{
      openDialog({visible:true,closeOnClickOverClay:false,
        cancel:()=>{console.log('取消了');},ok:()=>{console.log('成功了');return true},
      title: ()=>h('strong',{},'标题'),
        content: ()=>h('div',{},'一句话')
      })
    }
    return {visible,toggle,ok,cancel,showDialog}
  }
}
</script>

<style lang="scss" scoped>

</style>