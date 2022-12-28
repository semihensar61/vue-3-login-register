<template>
  <div class="tab">
     <AtomTabButtonVue tabButtonString="Giriş Yap" />
     <AtomTabButtonVue tabButtonString="Üye Ol" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import AtomTabButtonVue from "../atoms/AtomTabButton.vue";
const store = useStore();
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  margin: 20px;
}
</style>
