<template>
  <ul class="list-disc list-inside">
    <li
      v-for="dep in Object.keys(data)"
      :key="dep"
    >
      {{ dep }}

      <ol>
        <li
          v-for="job in firstVacancies(data[dep])"
          :key="job.id"
          class="ml-5 truncate"
        >
          <a href="">- {{ job.title }}</a>
        </li>
      </ol>
      <button
        v-if="longArray"
        class="text-sm hover:text-blue-500"
      >
        see more
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { IJobOpening } from '@/_homework/job-openings'

const jobOpeningsStore = useJobOpeningsStore()
const { departments, jobOpenings } = storeToRefs(jobOpeningsStore)
const data = jobOpeningsService.prepareData(jobOpenings.value, departments.value)

// const seeMore = ref(true)

// function showMore () {
//   displayedCount.value += 5
//   const endIndex = Math.min(vacancies.length, displayedCount.value)
//   displayedVacancies.value = vacancies.slice(0, endIndex)
//   showMoreButton.value = vacancies.length > endIndex
// }
const longArray = ref(false)
const displayedCount = ref(5)
// const showMoreButton = ref(true)

// function isShowMore (vacancies: Array<IJobOpening> = []) {
//   const displayedVacancies = ref(vacancies.slice(0, displayedCount.value))
//   // const showMoreButton = ref(vacancies.length > displayedCount.value)

//   displayedCount.value += 5
//   const endIndex = Math.min(vacancies.length, displayedCount.value)
//   displayedVacancies.value = vacancies.slice(0, endIndex)
//   showMoreButton.value = vacancies.length > endIndex
// }

function firstVacancies (vacancies: Array<IJobOpening> = []): Array<IJobOpening> {
  if (vacancies.length > 5) {
    longArray.value = true
    return vacancies.slice(0, displayedCount.value)
  }

  longArray.value = false
  return vacancies
}
</script>
