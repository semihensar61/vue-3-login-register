<script setup lang="ts">
import MoleculeTabVue from "@/components/molecules/MoleculeTab.vue";
import LoginForm from "../molecules/LoginForm.vue";
</script>

<template>
  <div class="card">
    <MoleculeTabVue></MoleculeTabVue>
    <LoginForm></LoginForm>
  </div>
</template>

<style lang="scss" scoped>
.card {
    width: 814px;
    height: min-content;
    background-color: #1C1F27;
    margin: auto;
}
</style>