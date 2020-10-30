<template>
  <form-page title="computed">
    <template slot="form">
      <base-heading tag-level="h3">超基本</base-heading>
        <comment>
          {{ basic }}
        </comment>
      <base-heading tag-level="h3">dataを整形して何かをしたい時はcomputed</base-heading>
        <comment>
          {{ reversedMessage }}
        </comment>
      <base-heading tag-level="h3">getter/setter</base-heading>
        <comment>
          {{ fullName }}
          <base-button @click="fullName = 'Kouki Arai'">setter</base-button>
        </comment>
      <base-heading tag-level="h3">引数Ver</base-heading>
        <comment>
          <!-- TODO: filterで３桁区切りにする -->
          {{ calcTax(1000) | toLocaleString }}
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
  name: "computed",
  components: {
    FormPage,
    BaseHeading,
    BaseButton,
    BaseCode,
    Comment
  },
  data(){
    return {
      message: <string>'Hello',
      firstName: <string>'Foo',
      lastName: <string>'Bar',
      tax: <number>1.1
    }
  },
  computed: {
    basic(){
      return '超基本'
    },

    reversedMessage(): string {
      return this.message.split('').reverse().join('')
    },

    fullName: {
      // getter 関数
      get(): string {
        return `${this.firstName} ${this.lastName}`
      },
      // setter 関数
      set(newValue: string) {
        console.log(newValue);

        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },

    calcTax() {
      return function (val: number): number {
        // @ts-ignore
        return this.tax * val
      }
    },

    // TODO: アロー関数でもかけてすっきりするらしいけどエラー出る
    // calcTax: () => (val: number) => this.tax * val
  }
})
</script>
<style lang="scss" scoped>
</style>
