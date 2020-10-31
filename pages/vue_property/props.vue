<template>
  <form-page title="props">
    <template slot="form">
      <base-heading tag-level="h3">props標準の型定義</base-heading>
      <standard-props :height="height" :age="age" :str="str" :num="num" :arr="arr" :obj="obj"></standard-props>
      <comment>
        type:
        <base-code>String, Number, Boolean, Array,
Object, Date, Function, Symbol</base-code>
        <li>default: any
        プロパティのデフォルト値を指定します。プロパティが渡されない場合は、この値が代わりに使われます。オブジェクトまたは配列のデフォルト値は、ファクトリ関数で返す必要があります。</li>
        <li>required: Boolean
        プロパティが必須かどうかを指定します。</li>
        <li>validator: Function
        プロパティの値を唯一の引数として受け取る、カスタムのバリデーション関数</li>
      </comment>
      <base-heading tag-level="h3">propType型定義</base-heading>
      <!-- TODO: propTypeの使いどころがわからない -->
      <prop-type :str="str" :num="num" :arr="arr" :obj="obj"></prop-type>
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
import StandardProps from "~/components/test/StandardProps.vue";
import PropType from "~/components/test/PropType.vue";
export default Vue.extend({
  name: "props",
  components: {
    FormPage,
    BaseHeading,
    BaseButton,
    BaseCode,
    Comment,
    StandardProps,
    PropType
  },
  data(){
    return {
      height: <number>100,
      age: <number>20,
      str: <string>"string",
      num: <Number>0,
      // foo: "foo",
      arr: [1,2,3],
      obj: <Object>{
        string: "string",
        number: 10
      },
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
