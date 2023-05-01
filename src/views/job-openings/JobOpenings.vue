<template>
  <div class="flex gap-10">
    <aside class="border border-gray rounded w-1/2 p-2">
      <div class="flex items-center gap-2 mb-2">
        <h2 class="uppercase">Job Openings</h2>
        <button class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">i</button>
        <AppButton class="ml-auto">
          <template #icon>
            <IconRightArrow class="w-3 h-3 fill-white ml-2" />
          </template>
        </AppButton>
      </div>
      <JobOpeningsSelect :department-list="data" />
      <DepartmentList :department-list="data" />
    </aside>

    <VacancyDetails v-if="openDetails" />
  </div>
</template>

<script lang="ts" setup>
import JobOpeningsSelect from '@/views/job-openings/components/JobOpeningsSelect.vue'
import DepartmentList from '@/views/job-openings/components/DepartmentList.vue'
import VacancyDetails from '@/views/job-openings/components/VacancyDetails.vue'

const jobOpeningsStore = useJobOpeningsStore()
const { departments, jobOpenings, openDetails } = storeToRefs(jobOpeningsStore)

const data = computed(() => {
  return jobOpeningsService.prepareData(jobOpenings.value, departments.value)
})
</script>
