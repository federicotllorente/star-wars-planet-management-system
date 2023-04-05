import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPlanetDetailsFromLocalStorage } from '~infra/localStorage/getPlanetDetailsFromLocalStorage'
import { removePlanetFromLocalStorage } from '~infra/localStorage/removePlanetFromLocalStorage'
import NotFound from '~pages/404'
import { Planet } from '~types'
import { Button } from '~components/Button/Button'
import { Layout } from '~components/Layout/Layout'

const PlanetDetails: NextPage<{ planetId: string }> = ({
  planetId
}) => {
  const { push } = useRouter()
  const [planetDetails, setPlanetDetails] = useState<Planet | null>(null)

  useEffect(() => {
    const data = getPlanetDetailsFromLocalStorage(planetId)
    if (data) setPlanetDetails(data)
  }, [])

  const handleRemovePlanet = () => {
    removePlanetFromLocalStorage(planetId)
    push('/planets')
  }

  if (!planetId || !planetDetails) return <NotFound />
  return (
    <Layout>
      <Link
        href="/planets"
        className="uppercase transition underline text-xs opacity-60 hover:opacity-100"
      >
        {'< Back to all planets'}
      </Link>

      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="py-3">{planetDetails.name}</h2>
        <div className="flex gap-2 pb-3 md:pb-0">
          <Link
            className="uppercase transition w-fit px-2 py-1 bg-transparent border border-beige-light text-center hover:border-white hover:bg-white hover:text-black"
            href={`/planets/${planetId}/edit`}
          >
            Edit planet
          </Link>
          <Button onClick={handleRemovePlanet}>
            Remove planet
          </Button>
        </div>
      </div>

      <p>Diameter: <span>{planetDetails.diameter}</span></p>
      <p>Climates: <span>{planetDetails.climates.join(', ')}</span></p>
      <p>Terrains: <span>{planetDetails.terrains.join(', ')}</span></p>
      <p>Population: <span>{planetDetails.population}</span></p>
      {planetDetails.residentConnection?.residents && (
        <>
          <h4 className="pt-2 pb-1">Residents</h4>
          <ul>
            {planetDetails.residentConnection?.residents.map(resident => (
              <li key={resident.name} className="ml-3 list-disc">{`${resident.name} (birth year: ${resident.birthYear}, gender: ${resident.gender})`}</li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  )
}

export default PlanetDetails

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (!context.params?.id) return { notFound: true }

  return {
    props: {
      planetId: Array.isArray(context.params.id)
        ? context.params.id[0]
        : context.params.id
    }
  }
}
