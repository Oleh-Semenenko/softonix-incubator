<template>
  <HeaderLayout />
  <div class="max-w-[1440px] mx-auto p-3">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
</script>
