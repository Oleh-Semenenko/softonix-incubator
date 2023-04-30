<template>
  <ol>
    <li
      v-for="job in firstFiveJobs"
      :key="job.id"
      class="ml-5 truncate"
    >
      <a href="">- {{ job.title }}</a>
    </li>
  </ol>
  <button
    v-if="hasMore"
    class="text-sm hover:text-blue-500"
    @click="showMore"
  >
    see more
  </button>
</template>

<script lang="ts" setup>
import type { IJobOpening } from '@/_homework/job-openings'

const props = defineProps<{
  vacancies: IJobOpening[]
}>()

const limit = ref(5)
const jobsToShow = ref<IJobOpening[]>([])

function showMore () {
  limit.value += 5
}

const firstFiveJobs = computed(() => {
  return props.vacancies.slice(0, limit.value)
})

const hasMore = computed(() => {
  return props.vacancies.length > limit.value
})

watch(() => props.vacancies, () => {
  jobsToShow.value = props.vacancies
})

</script>
