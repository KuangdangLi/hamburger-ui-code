<template>
<!--    <component v-for="title in  titles" :is="title"></component>-->
    <div v-for="(title,index) in  titles" :key="index">{{title}}</div>
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
    defaults.forEach(item => {if(!(item.type === Tab)){throw new Error('Tabs只接受Tab')}} )
    const titles = defaults.map(item=>item.props.title)
    console.log(titles);
    return {defaults,titles}
  }
}
</script>

<style lang="scss" scoped>

</style>