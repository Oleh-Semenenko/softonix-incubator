import type { RouteRecordRaw } from 'vue-router'

const JobOpenings = () => import('@/views/job-openings/JobOpenings.vue')
const VacancyDetails = () => import('@/views/job-openings/components/VacancyDetails.vue')

export const jobOpeningsRouteNames = {
  jobs: 'job-openings',
  jobDetails: 'details'
}

export const jobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/job-openings',
    name: jobOpeningsRouteNames.jobs,
    children: [
      {
        path: '/job-openings/:jobId',
        name: jobOpeningsRouteNames.jobDetails,
        component: VacancyDetails
      }
    ],
    component: JobOpenings
  }

]
