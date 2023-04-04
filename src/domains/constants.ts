export type HeaderItem = {
  title: string
  href: string
}

export const headerItems: HeaderItem[] = [
  {
    title: 'Planets',
    href: '/planets'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Settings',
    href: '/settings'
  }
]

export type Filter = {
  title: string
  id: string
  type: string
}

// TODO
export const filterByGravity: Filter[] = [
  {
    title: 'Gravity value 1',
    id: 'gravity-value-1',
    type: 'gravity'
  },
  {
    title: 'Gravity value 2',
    id: 'gravity-value-2',
    type: 'gravity'
  },
  {
    title: 'Gravity value 3',
    id: 'gravity-value-3',
    type: 'gravity'
  }
]

export const sortBy: Filter[] = [
  {
    title: 'Name',
    id: 'name',
    type: 'sort-by'
  },
  {
    title: 'Diameter',
    id: 'diameter',
    type: 'sort-by'
  },
  {
    title: 'Climate',
    id: 'climate',
    type: 'sort-by'
  },
  {
    title: 'Terrain',
    id: 'terrain',
    type: 'sort-by'
  },
  {
    title: 'Population',
    id: 'population',
    type: 'sort-by'
  }
]
