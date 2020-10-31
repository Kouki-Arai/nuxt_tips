<template>
  <div></div>
</template>
<script lang="ts">
// class Foo {}
import Vue from 'vue'
export default Vue.extend({
  name: "standard-props",
  props: {
    // 単なる型チェック
    height: Number,
    // 型チェックとその他のバリデーション
    age: {
      type: Number,
      default: 0,
      required: true,
      validator(value) {
        return value >= 0
      }
    },
    str: String,
    num: Number,
    arr: Array,
    obj: Object,
  },
  created() {
    console.log("------standard props------");
    var toString = Object.prototype.toString;
    console.log("str", toString.call(this.str));
    console.log("num", toString.call(this.num));
    console.log("arr", toString.call(this.arr));
    console.log("obj", toString.call(this.obj));

  }
})
</script>
