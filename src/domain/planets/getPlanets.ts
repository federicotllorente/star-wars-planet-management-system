import { getAllPlanetsFromSwapi } from "~infra/graphql/getAllPlanetsFromSwapi"
import {
  getAllPlanetsFromLocalStorage,
  saveAllPlanetsInLocalStorage
} from "~infra/localStorage"

export const getPlanets = async () => {
  const allPlanetsDataFromLocalStorage = getAllPlanetsFromLocalStorage()
  if (allPlanetsDataFromLocalStorage) {
    return allPlanetsDataFromLocalStorage
  } else {
    const allPlanetsDataFromSwapi = await getAllPlanetsFromSwapi()
    if (allPlanetsDataFromSwapi) {
      saveAllPlanetsInLocalStorage(allPlanetsDataFromSwapi)
      return allPlanetsDataFromSwapi
    }
  }
}
