<template>
  <Tabs>
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
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