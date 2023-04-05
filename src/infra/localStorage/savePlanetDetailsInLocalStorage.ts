import { Planet } from "~types"
import { getAllPlanetsFromLocalStorage } from "./getAllPlanetsFromLocalStorage"
import { saveAllPlanetsInLocalStorage } from "./saveAllPlanetsInLocalStorage"
import { clearAllPlanetsInLocalStorage } from "./clearAllPlanetsInLocalStorage"

export const savePlanetDetailsInLocalStorage = (planetDetails: Planet) => {
  if (!planetDetails) return

  const allPlanets = getAllPlanetsFromLocalStorage()
  if (!allPlanets) return
  
  const restOfThePlanets = allPlanets.filter(planet => planet.id !== planetDetails.id)
  restOfThePlanets.unshift(planetDetails)

  clearAllPlanetsInLocalStorage()
  saveAllPlanetsInLocalStorage(restOfThePlanets)
}
