<template>
  <div class="register-form">
     <AtomInput placeholder="Adınız Soyadınız"></AtomInput>
     <AtomInput placeholder="E-Posta Adresiniz"></AtomInput>
     <AtomInput placeholder="Parolanız"></AtomInput>
     <AtomButton button-txt="Giriş Yap" button-color="#8CA632"></AtomButton>
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
