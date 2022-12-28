<template>
    <button class="button" :style="styleProps" @click="sendForm">
        {{  $t(buttonTxt) }}
    </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { actionType } from '../../helpers/Type'

export default defineComponent ( {
    props : {
        buttonTxt: { type: String, required: true },
        buttonColor: { type: String, required: true},
        form: { type: String, required: true },
    },
    computed : {
        styleProps() {
            return {
                "background-color": this.buttonColor
            }
        }
    },
    methods: {
        sendForm() {
            this.$store.dispatch(actionType(this.form)).then((r: any) => {
                console.log("form result")
                console.log(r)
            })
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
