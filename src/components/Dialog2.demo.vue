<demo>
一键打开
</demo>
<template>
  <Button @click="showDialog">一句代码打开Dialog</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import {openDialog} from '../lib';
import {h} from 'vue';
export default {
  name:'Dialog2Demo',
  components:{Button},
  setup(){
    const showDialog = ()=>{
      openDialog({visible:true,closeOnClickOverClay:false,
        cancel:()=>{console.log('取消了');},ok:()=>{console.log('成功了');return true},
        title: ()=>h('strong',{},'标题'),
        content: ()=>h('div',{},'汉堡薯条可乐')
      })
    }
    return {showDialog}
  }
}
</script>