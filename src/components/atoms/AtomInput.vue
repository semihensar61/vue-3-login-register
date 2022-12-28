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
