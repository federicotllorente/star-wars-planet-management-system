import { allPlanets } from "~domain/planets/mock"
import { sortPlanetList } from "~helpers/sortPlanetList"

describe('sortPlanetList', () => {
  it("returns the planet list properly alphabetically sorted for 'climates'", () => {
    const sortedPlanetList = sortPlanetList(allPlanets, 'climates')
    expect(sortedPlanetList[0].name).toBe('Tatooine')
    expect(sortedPlanetList[1].name).toBe('Alderaan')
  })

  it("returns the planet list properly sorted (from smaller to larger planets) for 'diamater'", () => {
    const sortedPlanetList = sortPlanetList(allPlanets, 'diameter')
    expect(sortedPlanetList[0].name).toBe('Tatooine')
    expect(sortedPlanetList[1].name).toBe('Alderaan')
  })

  it("returns the planet list properly alphabetically sorted for 'name'", () => {
    const sortedPlanetList = sortPlanetList(allPlanets, 'name')
    expect(sortedPlanetList[0].name).toBe('Alderaan')
    expect(sortedPlanetList[1].name).toBe('Tatooine')
  })

  it("returns the planet list properly sorted (from less to more people) for 'population'", () => {
    const sortedPlanetList = sortPlanetList(allPlanets, 'population')
    expect(sortedPlanetList[0].name).toBe('Tatooine')
    expect(sortedPlanetList[1].name).toBe('Alderaan')
  })

  it("returns the planet list properly alphabetically sorted for 'terrains'", () => {
    const sortedPlanetList = sortPlanetList(allPlanets, 'terrains')
    expect(sortedPlanetList[0].name).toBe('Tatooine')
    expect(sortedPlanetList[1].name).toBe('Alderaan')
  })
})
