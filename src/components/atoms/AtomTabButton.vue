<template>
  <button class="tab-button" @click="changeTab" :class="tab === type ? `tab-button__${type}`:''">
    {{ tabButtonString }}
  </button>
</template>

<script lang="ts">

import { MutationTypes } from '@/store/mutation-types';
import { defineComponent } from 'vue';

export default defineComponent ( {
    props : {
      tabButtonString: { type: String, required: true },
      type: { type: String, required: true },
    },
    methods : {
      changeTab () {
        this.$store.commit(MutationTypes.CHANGE_TAB, this.type)
      }
    },
    computed: {
        tab() {
            return this.$store.state.tab;
        }
    },
})
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
