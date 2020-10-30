<template>
  <div class="comment">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
<style lang="scss" scoped>
.comment {
  background-color: #9fa0a0;
  border-radius: 5px;
  margin: 10px 0 20px;
}
</style>
