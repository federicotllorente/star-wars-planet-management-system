import { ComponentPropsWithoutRef, Dispatch, FunctionComponent, SetStateAction, useMemo } from 'react'
import classNames from 'classnames'
import { useBreakpoint } from '~helpers/useBreakpoint'
import { sortBy } from '~domains/constants'

type FiltersDrawerProps = {
  setShowingFiltersDrawer: Dispatch<SetStateAction<boolean>>
}

export const FiltersDrawer: FunctionComponent<
  ComponentPropsWithoutRef<'div'> & FiltersDrawerProps
> = ({
  setShowingFiltersDrawer
}) => {
  const breakpoint = useBreakpoint()
  const isMobile = useMemo(() => breakpoint === 'xs' || breakpoint === 'sm', [breakpoint])
  const isDesktop = useMemo(() => breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl', [breakpoint])

  return (
    <div
      className={classNames({
        'fixed w-modal h-modal top-4 left-4 z-10 bg-gradient-to-b from-blue-light to-blue-dark': isMobile,
        'w-1/3': isDesktop
      })}
    >
      {isMobile && (
        <button onClick={() => setShowingFiltersDrawer(false)}>
          {'Close'}
          {/* <CloseIcon /> */}
        </button>
      )}

      {/* SORT BY */}
      <p>Sort by</p>
      <ul>
        {sortBy.map(({ title, id }) => (
          <li key={id}>
            <input type="checkbox" name={title} id={id} />
            <label htmlFor={id}>{title}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
