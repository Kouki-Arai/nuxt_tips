<template>
  <form-page title="バリデーション" title-english="validation">
    <template slot="form">
      <base-input label title="メールアドレス" v-model="formData.email"></base-input>
      {{checkEmail}}
      <base-input label title="パスワード" v-model="formData.password" password></base-input>
      {{checkPassword}}
    </template>
    <template slot="send">
      <!-- <form-button-send :loading="loading" title="ログイン" @click="login" :showPrivacyPolicy="false"></form-button-send>
      <form-button-other-action @click="handleForgetPassword" class="forget" title="パスワードを忘れた場合"></form-button-other-action> -->
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
      formData: <object> {
        email: <string> '',
        password: <string>''
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
  }
})
</script>
