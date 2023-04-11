import { getAllPlanetsFromSwapi } from "~infra/graphql/getAllPlanetsFromSwapi"
import {
  getAllPlanetsFromLocalStorage,
  saveAllPlanetsInLocalStorage
} from "~infra/localStorage"
import { Planet } from "~types"

export const getPlanets = async (): Promise<Planet[] | undefined> => {
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
