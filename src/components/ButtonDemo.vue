<template>
  <div>Button示例</div>
  <hr/>
  <div>示例一</div>
  <div>
  <Button @click="onClick">你好</Button>
  <Button theme="button">Button</Button>
  <Button theme="text">ButtonText</Button>
  <Button theme="link">ButtonLink</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  name:'Button Demo',
  components:{Button},
  setup(){
    const onClick = ()=>{
      console.log('你好')
    }
    return {onClick}
  }

}
</script>

<style lang="scss" scoped>

</style>