<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div>
        <div class="succsess-message">
            {{$t("successRegister")}}
        </div>
        <nav>
            <RouterLink to="/">{{ $t("Login") }}</RouterLink>
        </nav>
    </div>
</template>
