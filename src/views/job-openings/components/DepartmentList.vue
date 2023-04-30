<template>
  <div>Showing {{ totalCount }} job openings</div>
  <ul class="list-disc list-inside">
    <li
      v-for="dep in Object.keys(props.departmentList)"
      :key="dep"
    >
      {{ dep }}
      <VacanciesList :vacancies="props.departmentList[dep]" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { IJobOpening } from '@/_homework/job-openings'
import VacanciesList from './VacanciesList.vue'

const props = defineProps<{
  departmentList: {
    [key: string]: IJobOpening[]
  }
}>()

const totalCount = computed(() => {
  return Object.values(props.departmentList).reduce((acc, curr) => {
    acc += curr.length
    return acc
  }, 0)
})
</script>
