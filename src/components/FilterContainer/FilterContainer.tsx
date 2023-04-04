import {
  ComponentPropsWithoutRef,
  Dispatch,
  FunctionComponent,
  SetStateAction
} from 'react'
import { Filter } from '~types'
import { FilterItem } from '~components/FilterItem/FilterItem'

type FilterContainerProps = {
  title: string
  filters: Filter[]
  activeFilters: Filter[]
  setActiveFilters: Dispatch<SetStateAction<Filter[]>>
  isOnlyOneItemSelectable?: boolean
}

export const FilterContainer: FunctionComponent<
  ComponentPropsWithoutRef<'div'> & FilterContainerProps
> = ({
  title,
  filters,
  activeFilters,
  setActiveFilters,
  isOnlyOneItemSelectable = false
}) => {
  return (
    <div>
      <p className="pb-1 uppercase opacity-60">{title}</p>
      <ul>
        {filters.map(filter => (
          <FilterItem
            key={filter.id}
            filter={filter}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            isOnlyOneItemSelectable={isOnlyOneItemSelectable}
          />
        ))}
      </ul>
    </div>
  )
}
