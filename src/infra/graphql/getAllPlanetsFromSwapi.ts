import { gql } from "@apollo/client"
import client from "~helpers/apolloClient"
import { Planet } from "~types"

export const getAllPlanetsFromSwapi = async (): Promise<Planet[]> => {
  const { data } = await client.query({
    query: gql`
      query AllPlanets {
        allPlanets {
          planets {
            id
            name
            population
            diameter
            terrains
            climates
          }
        }
      }
    `
  })

  return data.allPlanets.planets
}
