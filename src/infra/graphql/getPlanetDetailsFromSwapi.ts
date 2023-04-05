import { gql } from "@apollo/client"
import client from "~helpers/apolloClient"
import { Planet } from "~types"

export const getPlanetDetailsFromSwapi = async (planetId: string): Promise<Planet | undefined> => {
  const { data } = await client.query({
    query: gql`
      query Planet($planetId: ID) {
        planet(id: $planetId) {
          name
          diameter
          climates
          terrains
          population
          residentConnection {
            residents {
              name
              birthYear
              gender
            }
          }
        }
      }
    `,
    variables: {
      planetId
    }
  })

  try {
    return data
  } catch (err) {
    console.log(err)
  }
}
