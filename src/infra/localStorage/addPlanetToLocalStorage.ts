import { Planet } from "~types"
import { getAllPlanetsFromLocalStorage } from "./getAllPlanetsFromLocalStorage"
import { saveAllPlanetsInLocalStorage } from "./saveAllPlanetsInLocalStorage"
import { clearAllPlanetsInLocalStorage } from "./clearAllPlanetsInLocalStorage"

export const addPlanetToLocalStorage = (planetDetails: Planet) => {
  if (!planetDetails) return

  const allPlanets = getAllPlanetsFromLocalStorage()
  if (!allPlanets) return
  
  allPlanets.unshift(planetDetails)

  clearAllPlanetsInLocalStorage()
  saveAllPlanetsInLocalStorage(allPlanets)
}
