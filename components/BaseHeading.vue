<template>
  <component :is="tagLevel" :class="titleClass" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script lang="ts">
  import Vue, {PropType} from 'vue';

  export type DataType = {}

  const TITLE_TAG_LIST = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  export default Vue.extend({
    name: "base-heading",
    props: {
      tagLevel: {
        type: String as PropType<string>,
        default: 'h2',
        validator(value) {
          return TITLE_TAG_LIST.includes(value);
        }
      },
    },

    computed: {
      titleClass() {
        const levelNumber = parseInt(this.tagLevel.replace('h', ''));
        return `heading-${levelNumber}`;
      }
    },

    methods: {
      handleClick(){
        this.$emit('click');
      }
    }
  })
</script>

<style scoped lang="scss">

</style>
