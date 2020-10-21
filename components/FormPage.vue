<template>
  <div class="form-page">
    <form-title titleTag="h3" :title="title" :titleEnglish="titleEnglish"></form-title>
    <div class="main">
      <slot name="form"></slot>
    </div>
    <div class="send">
      <slot name="send"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FormTitle from "~/components/FormTitle.vue";

export default Vue.extend({
  name: "FormPage",
  components: {
    FormTitle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    titleEnglish: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
  .form-page {
    width: 544px;
    padding: 80px 0;
    margin: 0 auto;

    > .main {
      margin-top: 40px;
    }

    > .send {
      margin-top: 40px;
    }
  }
</style>
