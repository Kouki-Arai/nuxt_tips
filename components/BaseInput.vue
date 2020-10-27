<template>
  <div class="m-btm--20 input_wrap">
    <label v-show="label">{{title}}</label>
    <el-input
      :placeholder="placeholderText"
      v-model="value"
      :show-password="password"
      :class="{error: !isValid}"
      @blur="blur"
    ></el-input>
      <i class='fa fa-check-circle fa-2x check-icon' aria-hidden='true' v-show="isValid && value && isInputted"></i>
      <i class='fas fa-exclamation-circle fa-2x times-icon' aria-hidden='true' v-show="!isValid && !!value"></i>
  </div>
</template>
<script lang="ts">
import Vue, {PropType} from 'vue'
export default Vue.extend({
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
    isValid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: <String>"",
      isInputted: <Boolean>false
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
    blur(){
      this.isInputted = true;
      this.$emit('blur')
    }
  }
})
</script>
<style lang="scss">
.input_wrap{
    position: relative;
    // padding-right:60px !important;
}
.error{
  .el-input__inner{
    background-color: #ffd9e1;
  }
}
.check-icon {
  right:10px;
  position:absolute;
  top:28px;
  color: #4DAD4C;
}
.times-icon {
  right:10px;
  position:absolute;
  top:28px;
  color: #AD3270;
}
</style>
