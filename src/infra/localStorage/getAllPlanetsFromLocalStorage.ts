import { Planet } from "~types"

export const getAllPlanetsFromLocalStorage = (): Planet[] | undefined => {
  const storedData = localStorage.getItem('allPlanets') ?? ''
  return storedData ? JSON.parse(storedData) : undefined
}
