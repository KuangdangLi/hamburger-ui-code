<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hamburger"></use>
      </svg>
    </router-link>
    <ul class="menu" v-if="!menuVisible">
      <li>
      <router-link to="/doc/intro">文档</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleMenu" v-if="menuVisible">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Topnav',
  props:{
    menuVisible:{
      type:Boolean,
      default:false
    }
  },
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
};
</script>

<style lang="scss" scoped>
$color: #007974;
$yellow:#f9e490;
.topnav {
  user-select: none;
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background-color: $yellow;
;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    >svg{
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>