<template>
  <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from '../components/Tabs1.demo.vue'
export default {
  name:'Tbas Demo',
  components: {Demo},
  setup(){
    return {Tabs1Demo}
  }
}
</script>
