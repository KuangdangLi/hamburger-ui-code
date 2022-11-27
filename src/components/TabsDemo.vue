<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';
export default {
  name:'Tbas Demo',
  components: {Tab, Tabs},
  setup(){
    const selected = ref('导航一')
    return {selected}
  }
}
</script>

<style lang="scss" scoped>

</style>