<template></template>
<script lang="ts">
import Vue, { PropType } from 'vue'
interface Base {
  string: number,
  num: number
}
export default Vue.extend({
  name: "prop-type",
  props: {
    str: String as PropType<string | undefined>,
    num: Number as PropType<number | null>,
    arr: Array as PropType<string[]>,
    obj: Object as PropType<Base>,
  },
  created() {
    console.log("------propType------");

    var toString = Object.prototype.toString;
    console.log("str", toString.call(this.str));
    console.log("num", toString.call(this.num));
    console.log("arr", toString.call(this.arr));
    console.log("obj", toString.call(this.obj));

  }
})
</script>
