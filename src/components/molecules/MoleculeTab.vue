<template>
  <div class="tab">
     <AtomTabButtonVue tabButtonString="Giriş Yap" :isLogin="isLogin" type="login"/>
     <AtomTabButtonVue tabButtonString="Üye Ol" :isLogin="!isLogin" type="register"/>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import AtomTabButtonVue from "../atoms/AtomTabButton.vue";
const store = useStore();

const isLogin =  store.state.tab === "login" ? true : false
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  margin: 20px;
}
</style>
