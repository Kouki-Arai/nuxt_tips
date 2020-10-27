<template>
  <form-page title="入力文字数制限" title-english="Limit Character">
    <template slot="form">
      <base-input ref="baseInput" label title="5文字まで" v-model="sample"></base-input>
      <label for="">コンポーネントじゃない</label>
      <input type="text" class="input_inner" v-model="sample2" placeholder="5文字まで">
    </template>
    <template slot="send">
      <comment>
        <ul>
          <li>inputをコンポーネントに分けているとref属性を使って指定しないといけないので注意</li>
        </ul>
      </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue, {PropType} from 'vue'
import FormPage from "~/components/FormPage.vue";
import BaseInput from "~/components/BaseInput.vue";
import Comment from "~/components/Comment.vue";
export default Vue.extend({
  name: "limit-character",
  components: {
    FormPage,
    BaseInput,
    Comment
  },
  data(){
    return {
      sample: <string>'',
      sample2: <string>''
    }
  },

  watch: {
    sample(val: string) {
      // @ts-ignore
      this.$refs.baseInput.value = this.charaLimit(val, 5);
    },
    sample2(val: string) {
      this.sample2 = this.charaLimit(val, 5);
    }
  },

  methods: {
    charaLimit(val: string, limit: Number) {
      return val.length > limit ? val.slice(0, -1) : val;
    }
  },
})
</script>
<style lang="scss" scoped>
.input_inner {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
</style>
