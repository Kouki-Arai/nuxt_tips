<template>
  <form-page title="axios 初期設定" title-english="Set Up">
    <template slot="send">
      <comment>
        <ol>
          <li><base-code>$ yarn add @nuxtjs/axios</base-code></li>
          <li>create file at ~/plugins/axios.js</li>
          <base-code>
            > export default { modules: [ "@nuxtjs/axios" ], axios: { baseURL:
            'http://localhost:8080', }, publicRuntimeConfig: { axios: {
            browserBaseURL: process.env.BASE_URL } }, privateRuntimeConfig: {
            axios: { baseURL: process.env.BASE_URL } }, plugins: [
            '~/plugins/axios' ] }
          </base-code>
        </ol>
      </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from "vue";
import FormPage from "~/components/FormPage.vue";
import BaseCode from "~/components/BaseCode.vue";
export default Vue.extend({
  name: "SetUp",
  components: {
    FormPage,
    BaseCode,
  },
  data() {
    return {};
  },
});
</script>
