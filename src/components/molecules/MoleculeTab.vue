<template>
  <div class="tab">
     <AtomTabButtonVue tabButtonString="Login"  type="login"/>
     <AtomTabButtonVue tabButtonString="Register"  type="register"/>
  </div>
</template>

<script setup lang="ts">
import AtomTabButtonVue from "../atoms/AtomTabButton.vue";

</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  margin: 20px;
}
</style>
