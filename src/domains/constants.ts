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
}

export const sortBy: Filter[] = [
  {
    title: 'Name',
    id: 'sort-by-name'
  },
  {
    title: 'Diameter',
    id: 'sort-by-diameter'
  },
  {
    title: 'Climate',
    id: 'sort-by-climate'
  },
  {
    title: 'Terrain',
    id: 'sort-by-terrain'
  },
  {
    title: 'Population',
    id: 'sort-by-population'
  }
]
