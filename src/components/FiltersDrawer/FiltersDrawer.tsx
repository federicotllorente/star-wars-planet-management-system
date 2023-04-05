import {
  ComponentPropsWithoutRef,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useMemo,
} from 'react'
import classNames from 'classnames'
import { useBreakpoint } from '~helpers/useBreakpoint'
import { filterByClimate, filterByTerrain, sortBy } from '~constants'
import { Filter } from '~types'
import { FilterContainer } from '~components/FilterContainer/FilterContainer'
import { Button } from '~components/Button/Button'

type FiltersDrawerProps = {
  setShowingFiltersDrawer: Dispatch<SetStateAction<boolean>>
  activeFilters: Filter[]
  setActiveFilters: Dispatch<SetStateAction<Filter[]>>
}

export const FiltersDrawer: FunctionComponent<
  ComponentPropsWithoutRef<'div'> & FiltersDrawerProps
> = ({
  setShowingFiltersDrawer,
  activeFilters,
  setActiveFilters
}) => {
  const breakpoint = useBreakpoint()
  const isMobile = useMemo(() => breakpoint === 'xs' || breakpoint === 'sm', [breakpoint])
  const isDesktop = useMemo(() => breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl', [breakpoint])

  return (
    <div
      className={classNames(
        'p-4 flex flex-col gap-4',
        'fixed w-modal h-modal top-4 left-4 z-10 bg-gradient-to-b from-blue-light to-blue-dark',
        'md:static md:w-1/3 md:h-auto md:bg-none'
      )}
    >
      <div className="flex justify-between">
        <p className="uppercase opacity-60">Filters</p>
        {activeFilters.length > 0 && (
          <Button
            variant="only-text"
            onClick={() => setActiveFilters([])}
          >
            Remove all
          </Button>
        )}
        {isMobile && (
        <Button
          variant="only-text"
          onClick={() => setShowingFiltersDrawer(false)}
        >
          Close
        </Button>
      )}
      </div>

      {/* BY CLIMATE */}
      <FilterContainer
        title='By climate'
        filters={filterByClimate}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      {/* BY TERRAIN */}
      <FilterContainer
        title='By terrain'
        filters={filterByTerrain}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      {/* SORT BY */}
      <FilterContainer
        title='Sort by'
        filters={sortBy}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        isOnlyOneItemSelectable
      />
    </div>
  )
}
