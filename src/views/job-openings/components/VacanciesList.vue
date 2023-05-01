<template>
  <ul class="ml-1">
    <li
      v-for="job in firstFiveJobs"
      :key="job.id"
      class="relative truncate flex items-center text-blue-400 text-sm hover:underline hover:text-blue-600
      before:content-[''] before:block before:w-5 before:h-[1px] before:bg-gray-medium py-[2px]"
    >
      <RouterLink
        :to="{name: $routeNames.jobDetails, params: {jobId: job.id}}"
        class="flex items-center before:content-[''] before:block before:w-2 before:h-2
        before:bg-green-600 before:rounded-full before:mx-1"
        @click="openDetails = true"
      >
        {{ job.title }}
      </RouterLink>
      <div class="absolute top-0 left-0 bottom-0 border-l border-gray-medium z-10" />
    </li>
  </ul>
  <button
    v-if="hasMore"
    class="flex items-center text-sm hover:text-blue-500 ml-1
    before:content-[''] before:block before:w-5 before:h-[1px] before:bg-gray-medium border-l border-gray-medium"
    @click="showMore"
  >
    <span class="font-semibold text-blue-500 ml-1">See more</span>
    <div class="absolute top-0 left-0 bottom-0 z-10" />
  </button>
</template>

<script lang="ts" setup>
import type { IJobOpening } from '@/views/job-openings/job-openings'

const props = defineProps<{
  vacancies: IJobOpening[]
}>()

const jobOpeningsStore = useJobOpeningsStore()
const { openDetails } = storeToRefs(jobOpeningsStore)

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
