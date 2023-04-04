import { getAllPlanetsFromSwapi } from "~infra/graphql/getAllPlanetsFromSwapi"

export const getPlanets = async () => {
  const allPlanetsData = await getAllPlanetsFromSwapi()
  return allPlanetsData // TODO

  // Check if data exists in local storage
    // true
      // Return that data
    // false
      // Get data from Swapi
      // Save data in local storage
      // Return that data (from local storage)
}
