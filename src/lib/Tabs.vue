<template>
  <div class="reed-tabs">
    <div class="reed-tabs-nav" ref="container">
      <div class="reed-tabs-nav-item" v-for="(title,index) in  titles" :key="index"
           :class="{selected: title === selected}"
           :ref="el=>{if(title === selected) selectedNavItem = el}"
           @click="()=>select(title)">
        {{title}}
      </div>
      <div class="reed-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="reed-tabs-content">
      <component :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, ref, watchEffect} from 'vue';
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
    const selectedNavItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const defaults =  context.slots.default();
    defaults.forEach(item => {if(!(item.type.name === 'Tab')){throw new Error('Tabs只接受Tab')}} )
    const titles = defaults.map(item=>item.props.title)
    const current = computed(()=> defaults.filter(item=>item.props.title === props.selected)[0])
    const select= (title)=>{
      context.emit('update:selected',title)
    }
    onMounted(()=>watchEffect(()=>{
      const {width,left:left1} = selectedNavItem.value.getBoundingClientRect()
      const {left:left2} = container.value.getBoundingClientRect()
      const left = left1 - left2
      indicator.value.style.width = width + 'px'
      indicator.value.style.left = left + 'px'
    }))
    return {defaults,titles,select,current,indicator,container,selectedNavItem}
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
    &-indicator{
      position: absolute;
      height: 3px;
      width: 0;
      background-color: $blue;
      bottom: 0;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>