export interface IContact {
  id: number
  name: string
  description: string
  image?: string
  role?: string
}

export interface IFilters {
  sortMode: string
  chosenRole: string
  searchValue: string
}
