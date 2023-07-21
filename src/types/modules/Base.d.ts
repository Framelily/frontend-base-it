export type IPaginationQuery = {
  page: number
  limit?: number
}

export interface IMenuItem {
  label: string
  path: string
  text: string
}

export interface IMenu {
  label: string
  path: string
  icon: string
  text: string
  list: IMenuItem[]
}
