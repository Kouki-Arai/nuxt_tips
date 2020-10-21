<template>
  <div class="heading heading-sub" :class="{center: center}">
    <base-heading :tagLevel="titleTag">{{title}}</base-heading>
    <p class="title__english">{{ titleEnglish }}</p>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import BaseHeading from "~/components/BaseHeading.vue";

export type DataType = {}

const TITLE_TAG_LIST = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default Vue.extend({
  name: "FormTitle",
  components: {
    BaseHeading
  },
  props: {
    titleTag: {
      type: String as PropType<string>,
      default: 'h2',
      validator(value) {
        return TITLE_TAG_LIST.includes(value);
      }
    },
    title: {
      type: String as PropType<string>,
      default: ''
    },
    titleEnglish: {
      type: String as PropType<string>,
      default: ''
    },
    center: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {},
  computed: {}
})
</script>

<style scoped lang="scss">
  .heading {
    &.center {
      text-align: center;
    }
  }
</style>
