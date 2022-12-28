<template>
  <button class="tab-button">
    {{ tabButtonString }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  tabButtonString: { type: String, required: true },
});

props.tabButtonString; // string
</script>

<style lang="scss" scoped>
.tab-button {

}
</style>
