<template>
    <button class="button" :style="styleProps">
        {{ buttonTxt }}
    </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent ( {
    props : {
        buttonTxt: { type: String, required: true },
        buttonColor: { type: String, required: true}
    },
    computed : {
        styleProps() {
            return {
                "background-color": this.buttonColor
            }
        }
    }
})


</script>

<style lang="scss" scoped>
.button{
    height: 46px;
    margin: 20px;
    cursor: pointer;
    border: none;
    color: white;
    font-weight: bold;
    &:hover {
        opacity: 0.8;
    }
}
</style>
