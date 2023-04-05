import { Planet } from "~types"
import { getAllPlanetsFromLocalStorage } from "./getAllPlanetsFromLocalStorage"

export const getPlanetDetailsFromLocalStorage = (planetId: string): Planet | undefined => {
  if (!planetId) return
  
  const allPlanets = getAllPlanetsFromLocalStorage()
  if (!allPlanets) return
  
  const planetDetails = allPlanets.find(planet => planet.id === planetId)
  if (!planetDetails) return

  return planetDetails
}
