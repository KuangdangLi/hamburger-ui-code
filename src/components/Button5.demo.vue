<demo>
按钮加载状态
</demo>
<template>
  <div>
    <Button loading>Loading</Button>
    <Button @click="toggle" :loading="isLoading">clickMe</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import {ref} from 'vue';
export default {
  name:'Button5Demo',
  setup(){
    const isLoading = ref(false)
    const toggle = ()=>{
      isLoading.value = !isLoading.value
    }
    return {isLoading,toggle}
  },
  components: {Button}
}
</script>