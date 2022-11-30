<template>
    <div class="demo">
      <h2>{{component.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <component :is="component" />
      </div>
      <div class="demo-actions">
        <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
        <Button @click="showCode" v-else>查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="Prismjs.highlight(component.__sourceCode,Prismjs.languages.html,'html')"></pre>
      </div>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import "prismjs"
import "prismjs/themes/prism-solarizedlight.css"
import {ref} from 'vue';

const Prismjs = (window as any).Prism

export default {
  name:'Demo',
  props:{
    component:{
      type:Object
    }
  },
  setup(){
    const codeVisible = ref<boolean>(false)
    const showCode = ()=>{
      codeVisible.value = true
    }
    const hideCode = ()=>{
      codeVisible.value = false
    }
    return {Prismjs,codeVisible,showCode,hideCode}
  },
  components:{Button}
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>