import { departments } from '@/_homework/departments'
import { jobOpenings } from '@/_homework/job-openings'
import type { IDepartment, IJobOpening, IPrepairedData, IHashedDepartments } from '@/views/job-openings/job-openings'

class JobOpeningsService {
  async fetchJobOpenings () {
    await this.delay()
    return jobOpenings
  }

  async fetchDepartments () {
    await this.delay()
    return departments
  }

  async delay (timeout = 1000) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
  }

  createHashedDepartments (data: IDepartment[] = []) {
    return data.reduce((acc: IHashedDepartments, curr: IDepartment) => {
      acc[curr.value] = curr.name
      return acc
    }, {} as any)
  }

  prepareData (data: IJobOpening[] = [], dep: IDepartment[] = []) {
    const hashedDep = this.createHashedDepartments(dep)

    return data.reduce((acc: IPrepairedData, curr: IJobOpening) => {
      if (curr.departments.length > 0) {
        curr.departments.forEach((dep: string) => {
          if (hashedDep[dep]) {
            acc[hashedDep[dep]] ? acc[hashedDep[dep]].push(curr) : acc[hashedDep[dep]] = [curr]
          }
        })
      } else {
        acc.Other ? acc.Other.push(curr) : acc.Other = [curr]
      }

      return acc
    }, {})
  }
}

export const jobOpeningsService = new JobOpeningsService()
