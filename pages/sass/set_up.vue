<template>
  <form-page title="初期設定" title-english="Set Up">
    <template slot="send">
      <comment>
        <ol>
          <li><base-code>$ yarn add sass-loader node-sass</base-code></li>
          <li><base-code>$ yarn add -D @nuxtjs/style-resources</base-code></li>
          <li>Add @nuxtjs/style-resources to buildModules section of nuxt.config.js</li>
<base-code>export default {
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    // your settings here
    sass: [],
    scss: [],
    less: [],
    stylus: []
  }
}</base-code>
        </ol>
      </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import FormPage from "~/components/FormPage.vue";
import BaseCode from "~/components/BaseCode.vue";
export default Vue.extend({
  name: "set-up",
  components: {
    FormPage,
    BaseCode
  },
  data(){
    return {

    }
  }
})
</script>
