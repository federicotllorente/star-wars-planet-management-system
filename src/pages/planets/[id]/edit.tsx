import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { Planet } from '~types'
import { getPlanetDetailsFromLocalStorage } from '~infra/localStorage/getPlanetDetailsFromLocalStorage'
import { Button } from '~components/Button/Button'
import { Layout } from '~components/Layout/Layout'
import NotFound from '~pages/404'
import { savePlanetDetailsInLocalStorage } from '~infra/localStorage/savePlanetDetailsInLocalStorage'

const EditPlanet: NextPage<{ planetId: string }> = ({ planetId }) => {
  const { push } = useRouter()
  const [planetDetails, setPlanetDetails] = useState<Planet | null>(null)

  useEffect(() => {
    const data = getPlanetDetailsFromLocalStorage(planetId)
    if (data) setPlanetDetails(data)
  }, [])

  const handleSaveChanges = () => {
    if (!planetDetails) return

    savePlanetDetailsInLocalStorage(planetDetails)
    push(`/planets/${planetId}`)
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    if (!e.target.id) return

    // @ts-expect-error TypeScript is not taking the previous validation (if ID is undefined)
    setPlanetDetails({
      ...planetDetails,
      [e.target.id]: e.target.value
    })
  }

  if (!planetId || !planetDetails) return <NotFound />
  return (
    <Layout>
      <Link
        href={`/planets/${planetId}`}
        className="uppercase transition underline text-xs opacity-60 hover:opacity-100"
      >
        {'< Go back without saving'}
      </Link>

      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="py-3">Editing planet {planetDetails.name}</h2>
        <div className="flex gap-2 pb-3 md:pb-0">
          <Button onClick={handleSaveChanges}>
            Save changes
          </Button>
        </div>
      </div>

      <form className="flex flex-col gap-2">
        <input type="text" name="name" id="name" placeholder="Planet name" value={planetDetails.name} className="px-2 py-1 bg-transparent border border-white-withOpacity" onChange={handleInputChange} />
        <input type="text" name="id" id="id" placeholder="ID" value={planetDetails.id} className="px-2 py-1 bg-transparent border border-white-withOpacity" onChange={handleInputChange} />
        <input type="number" name="diameter" id="diameter" placeholder="Diameter" value={planetDetails.diameter} className="px-2 py-1 bg-transparent border border-white-withOpacity" onChange={handleInputChange} />
        <input type="text" name="climates" id="climates" placeholder="Climates" value={planetDetails.climates.join(', ')} className="px-2 py-1 bg-transparent border border-white-withOpacity" onChange={handleInputChange} />
        <input type="text" name="terrains" id="terrains" placeholder="Terrains" value={planetDetails.terrains.join(', ')} className="px-2 py-1 bg-transparent border border-white-withOpacity" onChange={handleInputChange} />
        <input type="number" name="population" id="population" placeholder="Population" value={planetDetails.population} className="px-2 py-1 bg-transparent border border-white-withOpacity" onChange={handleInputChange} />
      </form>
    </Layout>
  )
}

export default EditPlanet

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
