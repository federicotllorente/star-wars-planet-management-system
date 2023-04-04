import {
  ComponentPropsWithoutRef,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useMemo
} from 'react'
import classNames from 'classnames'
import { Filter } from '~domains/constants'

type FilterItemProps = {
  filter: Filter
  activeFilters: Filter[]
  setActiveFilters: Dispatch<SetStateAction<Filter[]>>
  isOnlyOneItemSelectable: boolean
}

export const FilterItem: FunctionComponent<
  ComponentPropsWithoutRef<'li'> & FilterItemProps
> = ({
  filter,
  activeFilters,
  setActiveFilters,
  isOnlyOneItemSelectable
}) => {
  const restOfTheActiveFilters = useMemo(() => activeFilters.filter(el => el.id !== filter.id), [activeFilters])
  const isFilterActive = useMemo(() => activeFilters.length === restOfTheActiveFilters.length + 1, [activeFilters])

  const handleFilterClick = useCallback(() => {
    if (isFilterActive) {
      setActiveFilters(restOfTheActiveFilters)
    } else {
      if (isOnlyOneItemSelectable) {
        const allOtherFiltersFromOtherTypes = activeFilters.filter(el => el.type !== filter.type)
        setActiveFilters([...allOtherFiltersFromOtherTypes, filter])
      } else {
        setActiveFilters([...activeFilters, filter])
      }
    }
  }, [activeFilters, setActiveFilters])

  return (
    <li key={filter.id} className="flex gap-1">
      <input
        type="checkbox"
        name={filter.title}
        id={filter.id}
        checked={isFilterActive}
        onClick={handleFilterClick}
      />
      <label
        htmlFor={filter.id}
        className={classNames({
          'opacity-60': !isFilterActive,
          'opacity-80': isFilterActive
        })}
      >
        {filter.title}
      </label>
    </li>
  )
}
