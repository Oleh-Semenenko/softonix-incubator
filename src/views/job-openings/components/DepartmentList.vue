<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>{{ result }}</div>
  <ul class="list-disk list-inside">
    <li
      v-for="dep in sortedList"
      :key="dep"
      class="text-base"
    >
      {{ dep }} ({{ props.departmentList[dep].length }})
      <VacanciesList :vacancies="props.departmentList[dep]" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { IJobOpening } from '@/_homework/job-openings'
import VacanciesList from './VacanciesList.vue'

const jobOpeningsStore = useJobOpeningsStore()
const { filteredDepartments, isLoading } = storeToRefs(jobOpeningsStore)

const props = defineProps<{
  departmentList: {
    [key: string]: IJobOpening[]
  }
}>()

const sortedList = computed(() => {
  return Object.keys(props.departmentList)
    .sort((a, b) => a.localeCompare(b))
    .filter(department => {
      if (filteredDepartments.value.length > 0) {
        return filteredDepartments.value.includes(department)
      } else {
        return true
      }
    })
})

const totalCount = computed(() => {
  return Object.values(props.departmentList).reduce((acc, curr) => {
    acc += curr.length
    return acc
  }, 0)
})

const totalFilteredVacancies = computed(() => {
  if (filteredDepartments.value) {
    return filteredDepartments.value.reduce((acc, dep) => {
      if (props.departmentList) {
        acc = acc += props.departmentList[dep].length
        return acc
      } else {
        return acc
      }
    }, 0)
  }
})

const result = computed(() => {
  if (filteredDepartments.value.length > 0) {
    return `Showing ${totalFilteredVacancies.value} of ${totalCount.value} job openings`
  } else {
    return `Showing ${totalCount.value} job openings`
  }
})
</script>
