export type HeaderItem = {
  title: string
  href: string
}

export type Filter = {
  title: string
  id: string
  type: string
}

export type Planet = {
  id: string
  name: string
  population: string
  diameter: string
  terrains: string[]
  climates: string[]
  residentConnection?: {
    residents: Resident[]
  }
}

export type PlanetToAdd = Omit<Planet, 'terrains' | 'climates'> & {
  terrains: string
  climates: string
}

type Resident = {
  name: string
  birthYear: string
  gender: string
}
