<template>
  <div class="layout">
    <Topnav class="nav" menu-visible />
    <div  class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol ref="list">
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
          <svg class="icon" ref="icon">
            <use xlink:href="#icon-coke"></use>
          </svg>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {inject, onMounted, onUpdated, ref, Ref} from 'vue';
import {router} from '../router';

export default {
  name:'Doc',
  components:{Topnav},
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const list = ref<HTMLOListElement>(null)
    const icon = ref<SVGAElement>(null)
    const count = ref(0)
    router.afterEach(()=>{count.value+=1})
    onMounted(()=>{
      if(list.value){
        let xxx = count.value
        const {top,height} = [...list.value.childNodes].map(item => item.firstChild).filter(a => a.classList.contains('router-link-active'))[0].getBoundingClientRect()
        icon.value.style.top = (top + height/2 - 8) + 'px'
      }
    })
    onUpdated(()=>{
      if(list.value){
        let xxx = count.value
        const {top,height} = [...list.value.childNodes].map(item => item.firstChild).filter(a => a.classList.contains('router-link-active'))[0].getBoundingClientRect()
        icon.value.style.top = (top + height/2 - 8) + 'px'
      }
    })
    return {menuVisible,list,icon}
  }
}
</script>

<style lang="scss" scoped>
$aside-index:1;
$yellow:#f9e490;
$white:#faf7ef;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: $white;
  }
}
aside {
  z-index: $aside-index;
  background: $yellow;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a{
        display: block;
        padding: 4px 20px;
        text-decoration: none;
        &.router-link-active {
          background-color: white;
        }
      }
    }
  }
  >svg{
    position: absolute;
    transition: all 250ms;
  }
}
main {
  overflow: auto;
}
</style>