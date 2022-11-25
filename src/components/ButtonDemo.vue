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
  <hr />
  <div>示例二</div>
  <div>
    <Button theme="button" size="small">Button</Button>
    <Button theme="text" size="small">ButtonText</Button>
    <Button theme="link" size="small">ButtonLink</Button>
  </div>
  <div>
    <Button theme="button" size="normal">Button</Button>
    <Button theme="text" size="normal">ButtonText</Button>
    <Button theme="link" size="normal">ButtonLink</Button>
  </div>
  <div>
    <Button theme="button" size="big">Button</Button>
    <Button theme="text" size="big">ButtonText</Button>
    <Button theme="link" size="big">ButtonLink</Button>
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