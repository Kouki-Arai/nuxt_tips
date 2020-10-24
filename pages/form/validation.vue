<template>
  <form-page title="バリデーション" title-english="Validation">
    <template slot="form">
      <base-heading tag-level="h3">入力中にイベント発火</base-heading>
      <base-input label title="メールアドレス" v-model="formData.email"></base-input>
      {{checkEmail}}
      <base-input label title="パスワード" v-model="formData.password" password></base-input>
      {{checkPassword}}
      <base-heading tag-level="h3">ボタン押してイベント発火</base-heading>
      <base-input label title="メールアドレス" v-model="button.email"></base-input>
      <!-- {{checkEmail}} -->
      <base-input label title="パスワード" v-model="button.password" password></base-input>
      <!-- {{checkPassword}} -->
    </template>
    <template slot="send">
      <form-button-send :loading="loading" title="ボタン" @click="send"></form-button-send>
      <!-- <form-button-other-action @click="handleForgetPassword" class="forget" title="パスワードを忘れた場合"></form-button-other-action> -->
      <comment>
        <ul>
          <li>TODO: エラー時の色付け、blurイベントver</li>
        </ul>
      </comment>
    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import FormPage from "~/components/FormPage.vue";
import BaseInput from "~/components/BaseInput.vue";
import {validEmail} from "~/utils/validation"
import {validPassword} from "~/utils/validation"
export default Vue.extend({
  name: "validation",
  components: {
    FormPage,
    BaseInput
  },
  data(){
    return {
      loading: <Boolean>false,
      formData: <object> {
        email: <string> '',
        password: <string>''
      },
      button: <object> {
        email: <string> '',
        password: <string>''
      },
      buttonCheck: {
        email: <Boolean> false,
        password: <Boolean>false
      }
    }
  },

  computed: {
    checkEmail(){
      // @ts-ignore
      return validEmail(this.formData.email)
    },
    checkPassword(){
      // @ts-ignore
      return validPassword(this.formData.password)
    },
  },

  methods: {
    send(){
      console.log("click");
      // @ts-ignore
      var check: Boolean = validEmail(this.button.email) && validPassword(this.button.password) ? true : false;
      console.log("validation", check);
    }
  }
})
</script>
