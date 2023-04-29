import type { RouteRecordRaw } from 'vue-router'

import JobOpenings from '@/views/job-openings/JobOpenings.vue'

export const jobOpeningsRouteNames = {
  jobs: 'job-openings'
}

export const jobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/job-openings',
    name: jobOpeningsRouteNames.jobs,
    component: JobOpenings
  }
]
