<template>
  <div>
    <component v-for="item in  defaults" :is="item"></component>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
export default {
  name:'Tabs',
  components: {Tab},
  setup(props,context){
    const defaults =  context.slots.default();
    console.log(...defaults);
    console.log(defaults[0].type === Tab);
    return {defaults}
  }
}
</script>

<style lang="scss" scoped>

</style>