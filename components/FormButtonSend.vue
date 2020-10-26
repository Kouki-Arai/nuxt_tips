<template>
  <div class="form-button-send">
    <base-button :disable="disable" :loading="loading" fill full @click="handleClick">{{ title }}</base-button>
  </div>
</template>

<script lang="ts">
  import Vue, {PropType} from 'vue'
  import BaseButton from "~/components/BaseButton.vue";

  export default Vue.extend({
    name: "FormButtonSend",
    components: {
      BaseButton
    },
    props: {
      title: {
        type: String as PropType<string>,
      },
      loading: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      disable: {
        type: Boolean as PropType<boolean>,
        default: false
      },
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  })
</script>

<style scoped lang="scss">
  .form-button-send {

    > /deep/ .el-button--primary {
      width: 100%;
      background: #0061DF;
      border-color: #0061DF;
      border-radius: 4px;

      &:hover {
        opacity: 0.9;
      }
    }

    .pp-link {
      width: 100%;
      margin-top: 12px;
      text-align: center;

      > .link {
        text-decoration: underline;
      }
    }
  }
</style>
