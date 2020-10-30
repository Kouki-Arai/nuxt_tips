<template>
  <form-page title="v-bind">
    <template slot="form">
      <base-heading tag-level="h3">属性を束縛</base-heading>
        <comment>
          ex)
          <base-code>v-bind:src="imageSrc"</base-code>
          省略↓
          <base-code>:src="imageSrc"</base-code>
        </comment>
      <base-heading tag-level="h3">動的スタイル</base-heading>
        <comment>
          <p :style="{ color: activeColor, 'font-size': `${activeFontSize}px` }">インラインVer</p>
          <p :style="styleObj">{{styleObj.name}}</p>
          <p :style="[styleObj, styleObj2]">{{styleObj2.name}}</p>
        </comment>
      <base-heading tag-level="h3">動的クラス</base-heading>
      <comment>
        <p :class="{ disabled: dynamicClass }">インラインVer</p>
        <p :class="{ disabled: classObj }">{{classObj.name}}</p>
      </comment>
      <!-- <base-heading tag-level="h3">まとめ</base-heading>
      <comment>
        <p></p>
      </comment> -->
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import FormPage from "~/components/FormPage.vue";
import BaseHeading from "~/components/BaseHeading.vue";
import BaseCode from "~/components/BaseCode.vue";
import Comment from "~/components/Comment.vue";
export default Vue.extend({
  name: "validation",
  components: {
    FormPage,
    BaseHeading,
    BaseCode,
    Comment
  },
  data(){
    return {
      activeColor: 'green',
      activeFontSize: 20,
      styleObj: {
        name: "オブジェクトVer",
        color: '#f00',
        fontWeight: 'bold',
      },
      styleObj2: {
        name: "複数オブジェクトVer",
        textDecoration: 'underline',
      },
      dynamicClass: true,
      classObj: {
        name: "オブジェクトVer",
        active: true
      }
    }
  }
})
</script>
<style lang="scss" scoped>
  .disabled {
    color: red;
  }
</style>
