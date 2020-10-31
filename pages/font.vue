<template>
  <form-page title="v-bind">
    <template slot="form">
      <base-heading tag-level="h3">フォント変更</base-heading>
        <comment>
          <p class="custom-font">特定のフォント変更</p>
          <p>グローバルにフォントの変更もできる</p>
          <base-code>* {
  font-family: 'customFont';
}</base-code>
        </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import FormPage from "~/components/FormPage.vue";
import BaseHeading from "~/components/BaseHeading.vue";
import BaseCode from "~/components/BaseCode.vue";
import Comment from "~/components/Comment.vue";
export default Vue.extend({
  name: "validation",
  components: {
    FormPage,
    BaseHeading,
    BaseCode,
    Comment
  },
  data(){
    return {

    }
  }
})
</script>
<style lang="scss" scoped>
.custom-font{
  font-family: 'customFont';
}
</style>
