<template>
  <div class="max-w-[1440px] mx-auto p-6">
    <HeaderLayout />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
</script>
