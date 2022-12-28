<template>
    <button class="button" :style="styleProps" @click="$emit('send-form')">
        {{  $t(buttonTxt) }}
    </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent ( {
    props : {
        buttonTxt: { type: String, required: true },
        buttonColor: { type: String, required: true},
    },
    computed : {
        styleProps() {
            return {
                "background-color": this.buttonColor
            }
        }
    },
})

</script>
