<template>
  <div class="reed-tabs">
    <div class="reed-tabs-nav" >
      <div class="reed-tabs-nav-item" v-for="(title,index) in  titles" :key="index"
           :class="{selected: title === selected}"
           @click="()=>select(title)">
        {{title}}
      </div>
    </div>
    <div class="reed-tabs-content">
      <component v-for="item in  defaults" :is="item"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
export default {
  name:'Tabs',
  components: {Tab},
  props:{
    selected:{
      type:String,
      default:'导航一'
    }
  },
  setup(props,context){
    const defaults =  context.slots.default();
    defaults.forEach(item => {if(!(item.type === Tab)){throw new Error('Tabs只接受Tab')}} )
    const titles = defaults.map(item=>item.props.title)
    const select= (title)=>{
      context.emit('update:selected',title)
    }
    return {defaults,titles,select}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.reed-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected{
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>