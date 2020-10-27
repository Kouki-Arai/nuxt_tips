<template>
  <form-page title="SVGファイルの表示">
    <template slot="form">
      <base-code>$ yarn add --dev vue-svg-loader</base-code>
      nuxt.config.js に以下を追加
      <base-code>build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/i;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['vue-svg-loader']
      });
    },
  }</base-code>
      <svg-element name="loading"></svg-element>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import SvgElement from '~/components/SvgElement.vue'
import BaseCode from "~/components/BaseCode.vue";
export default Vue.extend({
  components: {
    SvgElement,
    BaseCode
  }
})
</script>
