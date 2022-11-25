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
  <hr />
  <div>示例三</div>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <hr />
  <div>示例四</div>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
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