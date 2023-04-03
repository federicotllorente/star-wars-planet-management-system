import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '~components/Button/Button'
import { ConditionalContainer } from '~components/ConditionalContainer/ConditionalContainer'
import { FiltersDrawer } from '~components/FiltersDrawer/FiltersDrawer'
import { Layout } from '~components/Layout/Layout'
import { useBreakpoint } from '~helpers/useBreakpoint'

const Planets: NextPage = () => {
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
    <Layout noPadding className="flex ">
      {showingFiltersDrawer && (
        <FiltersDrawer setShowingFiltersDrawer={setShowingFiltersDrawer} />
      )}
      <div className="md:w-full p-3 flex flex-col md:flex-row gap-3 justify-between md:items-center md:border-l md:border-white-withOpacity">
        <Button className="w-fit" onClick={() => setShowingFiltersDrawer(v => !v)}>
          {isMobile
            ? 'Filters & sorting'
            : showingFiltersDrawer
              ? 'Collapse filters & sorting'
              : 'Show filters & sorting'
          }
        </Button>
        <ConditionalContainer shouldRenderContainer={isMobile} className="flex gap-3 items-center">
          <span className="uppercase opacity-60">
            All planets
          </span>
          <Link
            href="/planets/add"
            className="w-fit px-2 py-1 bg-transparent border border-beige-light uppercase transition hover:border-white hover:bg-white hover:text-black"
          >
            Add a planet
          </Link>
        </ConditionalContainer>
      </div>
    </Layout>
  )
}

export default Planets
