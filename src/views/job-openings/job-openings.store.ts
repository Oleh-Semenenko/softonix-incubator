import type { IDepartment } from '@/_homework/departments'
import type { IJobOpening } from '@/_homework/job-openings'
import type { Ref } from 'vue'
import { jobOpeningsService } from './job-openings.service'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpenings = ref<IJobOpening[]>()
  const departments = ref<IDepartment[]>()
  const filteredDepartments: Ref<string[]> = ref([])

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
    filteredDepartments,
    isLoading,
    fetchData
  }
})
