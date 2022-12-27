<template>
  <AtomTabButtonVue :tabButtonString="store.state.tabButtonString" />
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import AtomTabButtonVue from "../atoms/AtomTabButton.vue";
const store = useStore();
</script>
