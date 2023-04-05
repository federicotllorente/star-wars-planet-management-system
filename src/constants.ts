import { Filter, HeaderItem } from '~types'

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

export const filterByClimate: Filter[] = [
  {
    title: 'Arid',
    id: 'arid',
    type: 'climates'
  },
  {
    title: 'Temperate',
    id: 'temperate',
    type: 'climates'
  },
  {
    title: 'Hot',
    id: 'hot',
    type: 'climates'
  }
]

export const filterByTerrain: Filter[] = [
  {
    title: 'Desert',
    id: 'desert',
    type: 'terrains'
  },
  {
    title: 'Mountains',
    id: 'mountains',
    type: 'terrains'
  },
  {
    title: 'Forests',
    id: 'forests',
    type: 'terrains'
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
    title: 'Climates',
    id: 'climates',
    type: 'sort-by'
  },
  {
    title: 'Terrains',
    id: 'terrains',
    type: 'sort-by'
  },
  {
    title: 'Population',
    id: 'population',
    type: 'sort-by'
  }
]
