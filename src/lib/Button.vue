<template>
  <button class="hamburger-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="hamburger-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name:"Button",
  props:{
    theme:{
    type:String,
    default:'button'
    },
    size:{
    type:String,
    default:'normal'
    },
    level:{
      type:String,
      default:'normal'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
},
setup(props){
  const {theme,size,level} = props
  const classes =computed(()=>{
    return {
      [`hamburger-theme-${theme}`]: theme,
      [`hamburger-size-${size}`]: size,
      [`hamburger-level-${level}`]: level,
    }
  })
  return {classes}
}
}
</script>

<style lang="scss" >
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.hamburger-button {
  position: relative;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &.hamburger-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.hamburger-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.hamburger-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.hamburger-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.hamburger-theme-button {
    &.hamburger-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.hamburger-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.hamburger-theme-link {
    &.hamburger-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.hamburger-theme-text {
    &.hamburger-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.hamburger-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.hamburger-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.hamburger-theme-link, &.hamburger-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  >span.hamburger-loadingIndicator{
    position: absolute;
    left: 2px;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: hamburger-spin 750ms infinite linear;
  }
  @keyframes hamburger-spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
}
</style>