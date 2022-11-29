<template>
  <Switch v-model:value="bool" :disabled="disable" />
</template>

<script lang="ts">
import {ref} from 'vue';
import Switch from '../lib/Switch.vue';
export default {
  name:'Switch2Demo',
  components: {Switch},
  setup(){
    const bool = ref(false)
    const disable = ref(true)
    return {bool,disable}
  }
}
</script>