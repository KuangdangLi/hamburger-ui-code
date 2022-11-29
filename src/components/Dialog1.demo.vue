<demo>
基本用法
</demo>
<template>
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
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from "../lib/Dialog.vue"
import {ref} from 'vue';
export default {
  name:'Dialog1Demo',
  components:{Button,Dialog},
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
    return {visible,toggle,ok,cancel}
  }
}
</script>