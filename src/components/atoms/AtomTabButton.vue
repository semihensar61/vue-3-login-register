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
  width: 100%;
  display: flex;
  justify-content: center;
  height: 42px;
  font-size: 16px;
  background: transparent;
  color: #65686C;
  border: none;
  border-bottom: 1px solid #65686C;
}
</style>
