import { departments, type IDepartment } from '@/_homework/departments'
import { jobOpenings, type IJobOpening } from '@/_homework/job-openings'

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
    return data.reduce((acc: any, curr: any) => {
      acc[curr.value] = curr.name
      return acc
    }, {} as any)
  }

  createHashedJobOpenings (data: IJobOpening[] = []) {
    return data.reduce((acc: any, curr: any) => {
      acc[curr.id] = curr
      return acc
    }, [] as any)
  }

  prepareData (data: IJobOpening[] = [], dep: IDepartment[] = []) {
    const hashedDep = this.createHashedDepartments(dep)

    return data.reduce((acc: any, curr: any) => {
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
