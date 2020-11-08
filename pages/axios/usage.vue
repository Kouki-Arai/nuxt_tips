<template>
  <form-page title="axios 使い方" title-english="Usage">
    <template slot="send">
      <comment>
        asyncDataとfetchはthisにアクセスできない。ので、dataに保存したい場合はcreatedを使う。
        getして単に表示するだけならasyncDataを使うのがいいかも。
        asyncDataとfetchの違いは、前者はコンポーネントにデータをセットするために、後者はvuexのstoreにデータを格納するために使う。
        https://qiita.com/Tsuyoshi84/items/2e47b7f5e7fb8c0c3c66
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
    return {
      async: "",
    };
  },

  // async asyncData({ $axios }) {
  //   // getなどのメソッドの前に$つけるとレスポンスのdataの中身が取得できる
  //   const ip = await $axios.$get("http://icanhazip.com");
  //   console.log("async", ip);
  //   // this.async = ip

  //   return { ip };
  // },

  // async fetch({ $axios }) {
  //   // getなどのメソッドの前に$つけるとレスポンスのdataの中身が取得できる
  //   const ip = await $axios.$get("http://icanhazip.com");
  //   console.log("fetch", ip);
  //   this.async = ip;

  //   return { ip };
  // },

  // created() {
  //   this.fetchSomething();
  // },

  // methods: {
  //   async fetchSomething() {
  //     const ip = await this.$axios.$get("http://icanhazip.com");
  //     console.log("created", ip);

  //     this.ip = ip;
  //   },
  // },
});
</script>
