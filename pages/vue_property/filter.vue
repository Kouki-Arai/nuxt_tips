<template>
  <form-page title="computed">
    <template slot="form">
      <base-heading tag-level="h3">グローバル</base-heading>
        <comment>
          {{ number | comma }}
        </comment>
      <base-heading tag-level="h3">ローカル</base-heading>
        <comment>
          {{ order_pattern | parseOrderPattern }}
        </comment>
      <base-heading tag-level="h3">その他</base-heading>
        <comment>
          連結することもできて、左から順に実行される。
          引数も受け取ることができる。
          {{ message | filterA('arg1') }}
        </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import FormPage from "~/components/FormPage.vue";
import BaseHeading from "~/components/BaseHeading.vue";
import BaseButton from "~/components/BaseButton.vue";
import BaseCode from "~/components/BaseCode.vue";
import Comment from "~/components/Comment.vue";
export default Vue.extend({
  name: "filter",
  components: {
    FormPage,
    BaseHeading,
    BaseButton,
    BaseCode,
    Comment
  },
  data(){
    return {
      number: <number>10000.1234,
      order_pattern: <string>"consulting",
      message: <string>"hello"
    }
  },
  filters: {
    parseOrderPattern(val: string) {
      if (val == "consulting") {
        return "コンサル";
      } else if (val == "payment_agency") {
        return "支払代行";
      } else if (val == "sale_of_goods") {
        return "物販";
      }
    },

    filterA(val: string, arg1: string) {
      console.log(val);
      console.log(arg1);
    }
  },
})
</script>
<style lang="scss" scoped>
</style>
