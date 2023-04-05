import { gql } from "@apollo/client"
import client from "~helpers/apolloClient"
import { Planet } from "~types"

export const getAllPlanetsFromSwapi = async (): Promise<Planet[] | undefined> => {
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
            residentConnection {
              residents {
                name
                birthYear
                gender
              }
            }
          }
        }
      }
    `
  })

  try {
    return data.allPlanets.planets
  } catch (err) {
    console.log(err)
  }
}
