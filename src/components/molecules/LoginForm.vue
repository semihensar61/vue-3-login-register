<template>
  <div class="login-form">
     <AtomInput placeholder="E-Mail" form="LOGIN" type="email"></AtomInput>
     <AtomInput placeholder="Password" form="LOGIN" type="password"></AtomInput>
     <AtomButton button-txt="Login" button-color="#8CA632"></AtomButton>
  </div>
</template>

<script setup lang="ts">
import AtomButton from "../atoms/AtomButton.vue";
import AtomInput from "../atoms/AtomInput.vue";

</script>

<style lang="scss" scoped>
.login-form {
    display: flex;
    flex-direction: column;
}
</style>
