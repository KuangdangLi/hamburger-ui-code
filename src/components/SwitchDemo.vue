<template>
  <Switch :checked='checked' @update:checked="checked = $event"/>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue"
import {ref} from 'vue';
export default {
  name:'Switch Demo',
  setup(){
    const checked = ref(false)
    return {checked}
  },
  components:{Switch}
}
</script>

<style lang="scss" scoped>

</style>