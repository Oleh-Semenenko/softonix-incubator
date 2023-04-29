<template>
  <aside class="border border-gray rounded w-1/2 p-2">
    <h2 class="uppercase">Job Openings</h2>
    <button class="">?</button>
    <AppButton>
      Arrow
    </AppButton>
    <AppSelect />
    <DepartmentList />
  </aside>
</template>

<script lang="ts" setup>
import DepartmentList from '@/views/job-openings/components/DepartmentList.vue'
</script>
