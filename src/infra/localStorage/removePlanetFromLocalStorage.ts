import { getAllPlanetsFromLocalStorage } from "./getAllPlanetsFromLocalStorage"
import { saveAllPlanetsInLocalStorage } from "./saveAllPlanetsInLocalStorage"
import { clearAllPlanetsInLocalStorage } from "./clearAllPlanetsInLocalStorage"

export const removePlanetFromLocalStorage = (planetId: string) => {
  if (!planetId) return

  const allPlanets = getAllPlanetsFromLocalStorage()
  if (!allPlanets) return
  
  const restOfThePlanets = allPlanets.filter(planet => planet.id !== planetId)
  clearAllPlanetsInLocalStorage()
  saveAllPlanetsInLocalStorage(restOfThePlanets)
}
