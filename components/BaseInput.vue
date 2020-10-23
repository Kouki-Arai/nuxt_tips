<template>
  <div class="m-btm--20">
    <label v-show="label">{{title}}</label>
    <el-input
      :placeholder="placeholderText"
      v-model="value"
      :show-password="password"
    ></el-input>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    label: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    password: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      value: <String>""
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
})
</script>
