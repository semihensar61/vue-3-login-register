<template>
  <button class="tab-button" @click="changeTab" :class="tab === type ? `tab-button__${type}`:''">
    {{ $t(tabButtonString) }}
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
