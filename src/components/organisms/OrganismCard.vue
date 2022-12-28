
<template>
  <div class="card">
    <MoleculeTabVue></MoleculeTabVue>
    <LoginForm v-if="tab === 'login'" />
    <RegisterForm v-else></RegisterForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MoleculeTabVue from "@/components/molecules/MoleculeTab.vue";

import LoginForm from "../molecules/LoginForm.vue";
import RegisterForm from '../molecules/RegisterForm.vue';

export default defineComponent({
  computed: {
    tab() {
        return this.$store.state.tab;
    }
  },
  components: { RegisterForm, LoginForm, MoleculeTabVue },
})
</script>

<style lang="scss" scoped>
.card {
    width: 814px;
    height: min-content;
    background-color: #1C1F27;
    margin-top: 18%;
}
</style>