<template>
  <button class="tab-button" :class="isLogin && type === 'login' ? 'tab-button__login':''">
    {{ tabButtonString }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  tabButtonString: { type: String, required: true },
  isLogin: { type: Boolean, required: true },
  type: { type: String, required: true },
});
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
  cursor: pointer;
  font-weight: bold;
  &:hover { 
    opacity: 0.8;
  }
}

.tab-button__login {
  background: linear-gradient(to top, #8CA632 4px, transparent 0); 
  color: #8CA632;
}

.tab-button__register {
  background: linear-gradient(to top, #E84362 4px, transparent 0); 
  color: #E84362;
}
</style>
