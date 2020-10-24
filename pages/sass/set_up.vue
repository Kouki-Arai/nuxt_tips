<template>
  <form-page title="初期設定" title-english="Set Up">
    <template slot="send">
      <comment>
        <ol>
          <li>yarn add sass-loader node-sass</li>
          <li>yarn add -D @nuxtjs/style-resources</li>
          <li>Add @nuxtjs/style-resources to buildModules section of nuxt.config.js</li>
          <p>export default {
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
          }</p>
        </ol>
      </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import FormPage from "~/components/FormPage.vue";
export default Vue.extend({
  name: "set-up",
  components: {
    FormPage
  },
  data(){
    return {

    }
  }
})
</script>
