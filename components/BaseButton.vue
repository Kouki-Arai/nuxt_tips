<template>
  <button class="base-button" :class="{disable:disable, fill:fill, 'text-button':textButton, full:full}"
          @click="handleClick">
    <!-- <icon-element v-if="!!icon && (iconStyle === 'left' || iconStyle === 'only')" class="icon left" :name="iconImageSrc"
                  alt="icon"></icon-element> -->
    <span v-if="iconStyle!=='only'" class="text button-text">
      <slot></slot>
      <!-- <icon-element v-if="loading" :name="iconImageSrc" class="icon loading"></icon-element> -->
    </span>
    <!-- <icon-element v-if="!!icon && iconStyle === 'right'" class="icon right" :name="iconImageSrc"
                  alt="icon"></icon-element> -->
  </button>
</template>

<script lang="ts">
  import Vue, {PropType} from 'vue'
  // import IconElement from "~/components/IconElement.vue";

  export type DataType = {}

  const ICON_LIST = ['', 'add', 'star', 'menu'];
  const ICON_STYLE_LIST = ['', 'left', 'right', 'only'];

  export default Vue.extend({
    name: "BaseButton",
    components: {
      // IconElement
    },
    props: {
      icon: {
        type: String as PropType<string>,
        default: '',
        validator(value) {
          return ICON_LIST.includes(value)
        }
      },
      iconStyle: {
        type: String as PropType<string>,
        default: 'left',
        validator(value) {
          return ICON_STYLE_LIST.includes(value)
        }
      },
      disable: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      fill: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      full: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      textButton: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      loading: {
        type: Boolean as PropType<boolean>,
        default: false
      }
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      handleClick(): any {
        //@ts-ignore
        if (this.disable) return false;
        //@ts-ignore
        return this.$emit('click');
      }
    },
    computed: {
      iconImageSrc() {
        if (this.loading) {
          return 'loading'
        }
        switch (this.icon) {
          case 'add':
            return 'outline-add-24px';
          case 'star':
            return 'outline-star-24px';
          case 'menu':
            return 'nav-button'
        }
      }
    }
  })
</script>

<style scoped lang="scss">
  .base-button {
    height: 40px;
    padding: 8px 16px;

    background-color: $ui-02;

    border: 1px solid $brand-01;
    box-sizing: border-box;
    border-radius: 4px;

    color: $brand-01;
    fill: $brand-01;

    cursor: pointer;

    display: flex;
    justify-content: center;

    .icon {
      width: 24px;
      height: 24px;
    }

    &.full {
      width: 100%;
    }

    > * {
      margin: auto 0;
    }

    > .button-text {
      width: auto;
    }

    > .icon {
      width: 16px;
      height: 16px;

      fill: $brand-01;

      &.left {
        margin-right: 4px;
      }

      &.right {
        margin-left: 4px;
      }
    }

    &.fill {
      background-color: $brand-01;

      fill: $text-inverse;

      > .icon {
        fill: white;
      }

      > .text {
        color: $text-inverse;

        > .loading /deep/ svg {
          fill: white;
        }
      }
    }

    &.text-button {
      background-color: inherit;
      border-color: transparent;

      > .text {
        color: $text-03;

        > .loading {
          fill: $text-03;
        }
      }
    }

    &.disable {
      cursor: not-allowed;
      background-color: $ui-04 !important;
      border-color: $ui-04 !important;

      > .text {
        color: white !important;
      }
    }
  }
</style>
