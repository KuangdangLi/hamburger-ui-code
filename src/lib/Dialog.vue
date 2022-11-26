<template>
  <div class="reed-dialog-overlay">
    <div class="reed-dialog-wrapper">
      <div class="reed-dialog">
        <header>
          <span>提示</span>
          <span>关闭</span>
        </header>
        <main>
          <div>一句话</div>
        </main>
        <footer>
          <Button>OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
  name:'Dialog',
  components: {Button},
}
</script>

<style lang="scss">

</style>