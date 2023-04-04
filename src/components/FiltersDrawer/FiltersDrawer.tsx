import {
  ComponentPropsWithoutRef,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useMemo,
  useState
} from 'react'
import classNames from 'classnames'
import { useBreakpoint } from '~helpers/useBreakpoint'
import { filterByGravity, sortBy } from '~constants'
import { Filter } from '~types'
import { FilterContainer } from '~components/FilterContainer/FilterContainer'

type FiltersDrawerProps = {
  setShowingFiltersDrawer: Dispatch<SetStateAction<boolean>>
}

export const FiltersDrawer: FunctionComponent<
  ComponentPropsWithoutRef<'div'> & FiltersDrawerProps
> = ({
  setShowingFiltersDrawer
}) => {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([])

  const breakpoint = useBreakpoint()
  const isMobile = useMemo(() => breakpoint === 'xs' || breakpoint === 'sm', [breakpoint])
  const isDesktop = useMemo(() => breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl', [breakpoint])

  return (
    <div
      className={classNames(
        'p-4 flex flex-col gap-4',
        {
          'fixed w-modal h-modal top-4 left-4 z-10 bg-gradient-to-b from-blue-light to-blue-dark': isMobile,
          'w-1/3 min-w-32.5': isDesktop
        }
      )}
    >
      {isMobile && (
        <button onClick={() => setShowingFiltersDrawer(false)}>
          {'Close'}
          {/* <CloseIcon /> */}
        </button>
      )}

      <div className="flex justify-between">
        <p className="uppercase opacity-60">Filters</p>
        {activeFilters.length > 0 && (
          <button
            className="uppercase text-xs opacity-60 underline transition hover:opacity-100"
            onClick={() => setActiveFilters([])}
          >
            Remove all
          </button>
        )}
      </div>

      {/* BY GRAVITY */}
      <FilterContainer
        title='By gravity'
        filters={filterByGravity}
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
