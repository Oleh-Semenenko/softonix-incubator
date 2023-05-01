import type { IDepartment, IJobOpening } from '@/views/job-openings/job-openings'
import type { Ref } from 'vue'
import { jobOpeningsService } from './job-openings.service'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpenings = ref<IJobOpening[]>()
  const departments = ref<IDepartment[]>()
  const selectedDepartments: Ref<string[]> = ref([])
  const openDetails = ref(false)

  const isLoading = ref(false)

  function fetchData () {
    isLoading.value = true

    Promise.allSettled([
      jobOpeningsService.fetchJobOpenings(),
      jobOpeningsService.fetchDepartments()
    ]).then(result => {
      if (result[0].status === 'fulfilled') {
        jobOpenings.value = result[0].value
      }
      if (result[1].status === 'fulfilled') {
        departments.value = result[1].value
      }
    })
      .catch(error => console.log(error.message)
      )
      .finally(() => (isLoading.value = false))
  }

  fetchData()

  return {
    departments,
    jobOpenings,
    selectedDepartments,
    isLoading,
    openDetails,
    fetchData
  }
})
