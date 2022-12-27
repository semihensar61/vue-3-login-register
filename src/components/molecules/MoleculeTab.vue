<template>
    <AtomTabButtonVue  :tabButtonString = "tabButtonString" />
</template>

<script lang="ts">
import { useStore } from '../../store'
import AtomTabButtonVue from '../atoms/AtomTabButton.vue'

export default {
  setup () {
    const store = useStore()
    const tabButtonString = store.state.tabButtonString

    return {
        tabButtonString
    }
  }
}
</script>
