<template>
    <input class="input" :placeholder="$t(placeholder)" v-model ="input"/>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import { mutationType } from '../../helpers/Type'
import type FormInput  from "../../types/user"

export default defineComponent ( {
    data() {
        return {
            input: ""
        }
    },
    props : {
        placeholder: { type: String, required: true },
        type: { type: String, required: true },
        form: { type: String, required: true },
        isValidData: {
            type: Boolean,
            default: false,
        },
    },
    watch : {
        input(v: string) {
            const payload  = {
                key: this.type,
                value: v
            } as FormInput
            this.$store.commit(mutationType(this.form), payload)
        }
    }
})

</script>

<style lang="scss" scoped>
.input {
    height: 46px;
    margin:0 20px 0 ;
    font-size: 14px;
    font-weight: bold;
    background: transparent;
    color: #65686C;
    border: none;
    border-bottom: 1px solid #65686C;
    &:hover {
        opacity: 0.8;
    }
    &:focus { 
        outline: none;
        background: linear-gradient(to top, white 1px, transparent 0); 
        color: white;
    }
}

</style>
