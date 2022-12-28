<template>
  <div class="register-form">
     <AtomInput placeholder="Full Name" form="REGISTER" type="fullName"></AtomInput>
     <AtomInput placeholder="E-Mail" form="REGISTER" type="email"></AtomInput>
     <AtomInput placeholder="Password" form="REGISTER" type="password"></AtomInput>
     <AtomButton button-txt="Register" button-color="#E84362" form="REGISTER"></AtomButton>
  </div>
</template>

<script setup lang="ts">
import AtomButton from "../atoms/AtomButton.vue";
import AtomInput from "../atoms/AtomInput.vue";

</script>

<style lang="scss" scoped>
.register-form {
    display: flex;
    flex-direction: column;
}
</style>
