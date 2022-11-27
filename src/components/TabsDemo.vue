<template>
  <Tabs>
    <Tab>内容一</Tab>
    <Tab>内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
export default {
  name:'Tbas Demo',
  components: {Tab, Tabs},
}
</script>

<style lang="scss" scoped>

</style>