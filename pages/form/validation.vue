<template>
  <form-page title="バリデーション" title-english="Validation">
    <template slot="form">
      <base-heading tag-level="h3">入力中にイベント発火</base-heading>
      <base-input label title="メールアドレス" v-model="formData.email" :isValid="checkEmail"></base-input>
      <base-input label title="パスワード" v-model="formData.password" password :isValid="checkPassword"></base-input>

      <base-heading tag-level="h3">blurイベント発火</base-heading>
      <base-input label title="メールアドレス" v-model="blur.email" :isValid="blurCheck.email" @blur="blurEmail"></base-input>
      <base-input label title="パスワード" v-model="blur.password" password :isValid="blurCheck.password" @blur="blurPassword"></base-input>

      <base-heading tag-level="h3">ボタン押してイベント発火</base-heading>
      <base-input label title="メールアドレス" v-model="button.email" :isValid="buttonCheck.email"></base-input>
      <base-input label title="パスワード" v-model="button.password" password :isValid="buttonCheck.password"></base-input>
    </template>
    <template slot="send">
      <form-button-send :loading="loading" title="ボタン" @click="send"></form-button-send>
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
        email: <Boolean> true,
        password: <Boolean>true
      },
      blur: {
        email: <string> '',
        password: <string>''
      },
      blurCheck: {
        email: <Boolean> true,
        password: <Boolean>true
      },
    }
  },

  computed: {
    checkEmail(){
      // ↓入力前はエラーにならず入力し始めたら同時にバリデーション
      // @ts-ignore
      return !validEmail(this.formData.email) && !this.formData.email || validEmail(this.formData.email) && this.formData.email ? true : false
    },
    checkPassword(){
      // ↓入力前もバリデーションしててfalseが返ってしまう
      // @ts-ignore
      // return validPassword(this.formData.password)

      // ↓入力前はエラーにならず入力し始めたら同時にバリデーション
      // @ts-ignore
      return !validPassword(this.formData.password) && !this.formData.password || validPassword(this.formData.password) && this.formData.password ? true : false
    },
  },

  methods: {
    send(){
      console.log("click");
      // @ts-ignore
      var check: Boolean = validEmail(this.button.email) && validPassword(this.button.password) ? true : false;
      console.log("validation", check);
      alert(check);
    },
    blurEmail(){
      // TODO: methodをreturnする方法ないか調査。仕方ないからdataで管理する
      // var check: Boolean = validEmail(this.blur.email) ? true : false
      // return check
      validEmail(this.blur.email) ? this.blurCheck.email = true : this.blurCheck.email = false
    },
    blurPassword(){
      // TODO: methodをreturnする方法ないか調査。仕方ないからdataで管理する
      // var check: Boolean = validPassword(this.blur.password) ? true : false
      // return check
      validPassword(this.blur.password) ? this.blurCheck.password = true : this.blurCheck.password = false
    }
  }
})
</script>
