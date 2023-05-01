export interface IDepartment {
  name: string
  value: string
}

export interface IJobOpening {
  title: string
  id: string
  departments: string[]
  isClosed: boolean
  url: string
}

export interface IPrepairedData {
    [key: string]: IJobOpening[]
}

export interface IHashedDepartments {
  [key: string]: string
}