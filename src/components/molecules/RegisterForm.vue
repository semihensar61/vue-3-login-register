<template>
  <div class="register-form">
     <AtomInput placeholder="Full Name"></AtomInput>
     <AtomInput placeholder="E-Mail"></AtomInput>
     <AtomInput placeholder="Password"></AtomInput>
     <AtomButton button-txt="Register" button-color="#E84362"></AtomButton>
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
