<template>
  <div class="m-btm--20 input_wrap">
    <label v-show="label">{{title}}</label>
    <input v-model="value" :type="show || !password ? 'text': 'password'" :placeholder="placeholderText" class="base-input">
    <label>
      <input v-show="password" v-model="show" type="checkbox" ><span v-show="password">パスワードを表示する</span>
    </label>
  </div>
</template>
<script lang="ts">
import Vue, {PropType} from 'vue'
export default Vue.extend({
  name: "base-normal-input",
  props: {
    title: String as PropType<string>,
    label: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String as PropType<string>,
      default: ""
    },
    password: {
      type: Boolean,
      default: false
    },
    // isValid: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      value: <String>"",
      show: <Boolean>false,
      // isInputted: <Boolean>false
    };
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  },
  computed: {
    placeholderText(): string {
      return this.placeholder !== "" ? this.placeholder : this.title;
    }
  },
  methods: {
    // blur(){
    //   this.isInputted = true;
    //   this.$emit('blur')
    // }
  }
})
</script>
<style lang="scss" scoped>
.base-input {
  width: 100%;
  height: 35px;
}
// .input_wrap{
//     position: relative;
//     // padding-right:60px !important;
// }
// .error{
//   .el-input__inner{
//     background-color: #ffd9e1;
//   }
// }
// .check-icon {
//   right:10px;
//   position:absolute;
//   top:28px;
//   color: #4DAD4C;
// }
// .times-icon {
//   right:10px;
//   position:absolute;
//   top:28px;
//   color: #AD3270;
// }
</style>
