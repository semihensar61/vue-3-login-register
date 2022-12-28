<template>
    <input class="input" :placeholder="placeholder"/>
</template>

<script setup lang="ts">
const props = defineProps({
 placeholder: { type: String, required: true },
});

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
    cursor: pointer;
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
