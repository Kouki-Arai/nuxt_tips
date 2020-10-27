<template>
  <form-page title="ポーリング" title-english="polling">
    <template slot="form">
      <comment>
        TODO: @ts-ignore消す
        dataに突っ込んで、beforeDestroyでclearすればページごとの制御ができる
      </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import BaseCode from "~/components/BaseCode.vue";
export default Vue.extend({
  components: {
    BaseCode
  },
  data(){
    return {
      isPoling: <Number>0,
    }
  },

  mounted() {
    this.doPolling();
  },

  beforeDestroy() {
    // @ts-ignore
    clearInterval(this.isPoling);
  },

  methods: {
    doPolling() {
      // TODO: ts-ignoreなくす
      // @ts-ignore
      this.isPoling = setInterval(()=> {
        this.open();
      }, 1000);
    },
    open() {
      this.$notify.success({
        title: 'Info',
        message: 'polling test',
        showClose: false
      });
    }
  }
})
</script>
