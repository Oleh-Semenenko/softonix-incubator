<template>
  <aside class="border border-gray rounded w-1/2 p-2">
    <h2 class="uppercase">Job Openings</h2>
    <button class="">?</button>
    <AppButton>
      Arrow
    </AppButton>
    <AppSelect />
    <DepartmentList :department-list="data" />
  </aside>
</template>

<script lang="ts" setup>
import DepartmentList from '@/views/job-openings/components/DepartmentList.vue'

const jobOpeningsStore = useJobOpeningsStore()
const { departments, jobOpenings } = storeToRefs(jobOpeningsStore)

const data = computed(() => {
  return jobOpeningsService.prepareData(jobOpenings.value, departments.value)
})
</script>
