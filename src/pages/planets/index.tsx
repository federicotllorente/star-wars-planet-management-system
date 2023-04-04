import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { getPlanets } from '~domain/planets/getPlanets'
import { useBreakpoint } from '~helpers/useBreakpoint'
import { Planet } from '~types'
import { Button } from '~components/Button/Button'
import { ConditionalContainer } from '~components/ConditionalContainer/ConditionalContainer'
import { FiltersDrawer } from '~components/FiltersDrawer/FiltersDrawer'
import { Layout } from '~components/Layout/Layout'

const Planets: NextPage<{ planets: Planet[] }> = ({ planets }) => {
  const [showingFiltersDrawer, setShowingFiltersDrawer] = useState<boolean>(false)
  const breakpoint = useBreakpoint()
  const isMobile = useMemo(() => breakpoint === 'xs' || breakpoint === 'sm', [breakpoint])
  const isDesktop = useMemo(() => breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl', [breakpoint])

  useEffect(() => {
    if (isDesktop) {
      setShowingFiltersDrawer(true)
    } else if (isMobile) {
      setShowingFiltersDrawer(false)
    }
  }, [breakpoint])

  return (
    <Layout noPadding className="flex">
      {showingFiltersDrawer && (
        <FiltersDrawer setShowingFiltersDrawer={setShowingFiltersDrawer} />
      )}
      <div className={classNames('p-4', {
        'w-full': !showingFiltersDrawer,
        'md:w-2/3 md:border-l md:border-white-withOpacity': showingFiltersDrawer
      })}>
        <div className="pb-4 flex flex-col md:flex-row gap-3 justify-between md:items-center">
          <Button className="w-fit" onClick={() => setShowingFiltersDrawer(v => !v)}>
            {isMobile
              ? 'Filters & sorting'
              : showingFiltersDrawer
                ? 'Collapse filters & sorting'
                : 'Show filters & sorting'
            }
          </Button>
          <ConditionalContainer
            shouldRenderContainer={isMobile}
            className="flex gap-3 items-center"
          >
            <span className="uppercase opacity-60 text-center">
              All planets
            </span>
            <Link
              href="/planets/add"
              className="w-fit px-2 py-1 bg-transparent border border-beige-light text-center uppercase transition hover:border-white hover:bg-white hover:text-black"
            >
              Add a planet
            </Link>
          </ConditionalContainer>
        </div>

        <div className="overflow-x-scroll">
          <div className="w-122.5 flex flex-col">
            <div className="pb-2 grid grid-cols-6 gap-3 uppercase">
              <span>Name</span>
              <span>ID</span>
              <span>Diameter</span>
              <span>Climates</span>
              <span>Terrains</span>
              <span>Population</span>
            </div>

            {planets.map(planet => (
              <div key={planet.id} className="py-2 grid grid-cols-6 gap-3 border-t border-white-withOpacity">
                <span>{planet.name}</span>
                <span>{planet.id}</span>
                <span>{planet.diameter}</span>
                <span>{planet.climates.join(', ')}</span>
                <span>{planet.terrains.join(', ')}</span>
                <span>{planet.population}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Planets

// TODO
export const getServerSideProps: GetServerSideProps = async context => {
  const planets = await getPlanets()
  return { props: { planets } }
}
