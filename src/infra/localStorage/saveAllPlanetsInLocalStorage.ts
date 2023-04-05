import { Planet } from "~types"

export const saveAllPlanetsInLocalStorage = (data: Planet[]) => {
  if (!data) return
  localStorage.setItem('allPlanets', JSON.stringify(data))
}
