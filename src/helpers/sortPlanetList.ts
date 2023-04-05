import { Planet } from "~types"

export const sortPlanetList = (planetList: Planet[], sortingFilterId: keyof Planet): Planet[] => {
  if (!planetList || !sortingFilterId) return []

  const newPlanetList = [...planetList]

  if (sortingFilterId === 'diameter' || sortingFilterId === 'population') {
    return newPlanetList.sort((a, b) =>
      Number(a[sortingFilterId]) - Number(b[sortingFilterId])
    )
  }

  if (sortingFilterId === 'name' || sortingFilterId === 'climates' || sortingFilterId === 'terrains') {
    return newPlanetList.sort((a, b) => {
      if (a[sortingFilterId] < b[sortingFilterId])
        return -1
      if (a[sortingFilterId] > b[sortingFilterId])
        return 1
      return 0
    })
  }

  return []
}
