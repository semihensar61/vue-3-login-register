<template>
  <div class="form" >
    <AtomInput placeholder="E-Mail" form="LOGIN" type="email" 
        v-model="v$.formData.email.$model"
        :errors="v$.formData.email.$errors"
        :isValidData="!v$.formData.email.$invalid" />
    <AtomInput placeholder="Password" form="LOGIN" type="password"
        v-model="v$.formData.password.$model"
        :errors="v$.formData.password.$errors"
        :isValidData="!v$.formData.password.$invalid" />
    <span class="form__warning" v-if = "invalidFields">{{$t(invalidFieldsText)}}</span>
    <AtomButton button-txt="Login" button-color="#8CA632" @send-form="sendForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import { actionType } from '../../helpers/Type'

import AtomButton from "../atoms/AtomButton.vue";
import AtomInput from "../atoms/AtomInput.vue";

export default defineComponent({
  components: {
    AtomButton,
    AtomInput
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      formData: {
        password: "",
        email: "",
      },
      invalidFields: false,
      invalidFieldsText: "invalidFields"
    };
  },
  validations() {
    return {
      formData: {
        password: { required, minLength: minLength(5) },
        email: { required, email },
      }
    };
  },
  methods: {
    sendForm() {
      if (this.v$.$invalid) {
        this.invalidFieldsText = "invalidFields"
        this.invalidFields = true
        return;
      }
      this.invalidFields = false
      this.$store.dispatch(actionType("LOGIN")).then((r: any) => {
          if(r) {
            this.$router.push("/success-login")
          } else {
            this.invalidFields = true
            this.invalidFieldsText = "cantLogin"
          }
      })
    }
  }
})

</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
}
.form__warning {
    color: red;
    font-size: small;
    height: 0px;
    margin-top:1px
}
</style>
