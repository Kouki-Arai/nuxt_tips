<template>
  <form-page title="インプットコンポーネント" title-english="input-components">
    <template slot="form">

      <base-heading tag-level="h3">base-input</base-heading>
      <base-normal-input v-model="email" label title="メールアドレス"></base-normal-input>
      <base-normal-input v-model="password" label title="パスワード" password></base-normal-input>

      <!-- <base-input label title="メールアドレス" v-model="formData.email" :isValid="checkEmail"></base-input>
      <base-input label title="パスワード" v-model="formData.password" password :isValid="checkPassword"></base-input> -->

    </template>
  </form-page>
</template>
<script lang="ts">
import Vue from 'vue'
import FormPage from "~/components/FormPage.vue";
// import BaseInput from "~/components/BaseInput.vue";
import BaseNormalInput from "~/components/BaseNormalInput.vue";
import BaseHeading from "~/components/BaseHeading.vue";
import {validEmail} from "~/utils/validation"
import {validPassword} from "~/utils/validation"
export default Vue.extend({
  name: "validation",
  components: {
    FormPage,
    // BaseInput,
    BaseNormalInput,
    BaseHeading
  },
  data(){
    return {
      email: <String>'',
      password: <String>'',
      // loading: <Boolean>false,
      // formData: <object> {
      //   email: <string> '',
      //   password: <string>''
      // },
      // button: <object> {
      //   email: <string> '',
      //   password: <string>''
      // },
      // buttonCheck: {
      //   email: <Boolean> true,
      //   password: <Boolean>true
      // },
      // blur: {
      //   email: <string> '',
      //   password: <string>''
      // },
      // blurCheck: {
      //   email: <Boolean> true,
      //   password: <Boolean>true
      // },
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
