import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { getPlanets } from '~domain/planets/getPlanets'
import { useBreakpoint } from '~helpers/useBreakpoint'
import { Filter, Planet } from '~types'
import { Button } from '~components/Button/Button'
import { ConditionalContainer } from '~components/ConditionalContainer/ConditionalContainer'
import { FiltersDrawer } from '~components/FiltersDrawer/FiltersDrawer'
import { Layout } from '~components/Layout/Layout'
import { sortPlanetList } from '~helpers/sortPlanetList'
import { PlanetList } from '~components/PlanetList/PlanetList'

const Planets: NextPage<{ planets: Planet[] }> = () => {
  const [planetList, setPlanetList] = useState<Planet[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const [filteredPlanetList, setFilteredPlanetList] = useState<Planet[]>([])
  const [activeFilters, setActiveFilters] = useState<Filter[]>([])
  const [showingFiltersDrawer, setShowingFiltersDrawer] = useState<boolean>(false)

  const breakpoint = useBreakpoint()
  const isMobile = useMemo(() => breakpoint === 'xs' || breakpoint === 'sm', [breakpoint])
  const isDesktop = useMemo(() => breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl', [breakpoint])

  const fetchPlanetList = async () => {
    setIsLoading(true)
    const data = await getPlanets()

    try {
      setIsLoading(false)
      if (data) setPlanetList(data)
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPlanetList()
  }, [])

  useEffect(() => {
    if (isDesktop) {
      setShowingFiltersDrawer(true)
    } else if (isMobile) {
      setShowingFiltersDrawer(false)
    }
  }, [breakpoint])

  useEffect(() => {
    if (!activeFilters) return setFilteredPlanetList([])

    let newFilteredPlanetList = activeFilters.length == 1
      ? [...planetList]
      : [...filteredPlanetList]

    activeFilters.forEach(filter => {
      if (filter.type === 'sort-by') {
        const sortedPlanetList = sortPlanetList(newFilteredPlanetList, filter.id as keyof Planet)
        newFilteredPlanetList = sortedPlanetList
      } else {
        const filteredNewFilteredPlanetList = newFilteredPlanetList.filter(planet =>
          planet[filter.type as keyof Planet].includes(filter.id)
        )
        newFilteredPlanetList = filteredNewFilteredPlanetList
      }
    })

    setFilteredPlanetList(newFilteredPlanetList)
  }, [activeFilters])

  return (
    <Layout noPadding className={classNames('flex', { 'overflow-hidden': showingFiltersDrawer && isMobile })}>
      {showingFiltersDrawer && (
        <FiltersDrawer
          setShowingFiltersDrawer={setShowingFiltersDrawer}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      )}
      <div className={classNames('p-4', {
        'w-full': !showingFiltersDrawer,
        'md:w-2/3 md:border-l md:border-white-withOpacity': showingFiltersDrawer
      })}>
        <div className="pb-4 flex flex-col md:flex-row gap-3 justify-between md:items-center">
          <Button className="w-fit" variant="only-text" onClick={() => setShowingFiltersDrawer(v => !v)}>
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

        {isLoading && (
          <span>Loading...</span>
        )}

        {activeFilters.length ? (
          <PlanetList planetList={filteredPlanetList} />
        ) : (
          <PlanetList planetList={planetList} />
        )}
      </div>
    </Layout>
  )
}

export default Planets
