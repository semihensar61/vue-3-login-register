<template>
  <div class="login-form">
     <AtomInput placeholder="E-Mail"></AtomInput>
     <AtomInput placeholder="Password"></AtomInput>
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
