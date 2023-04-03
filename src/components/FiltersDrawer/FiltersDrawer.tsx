import { ComponentPropsWithoutRef, FunctionComponent, useMemo } from 'react'
import { useBreakpoint } from '~helpers/useBreakpoint'

export const FiltersDrawer: FunctionComponent<ComponentPropsWithoutRef<'div'>> = () => {
  const breakpoint = useBreakpoint()
  // const isMobile = useMemo(() => breakpoint === 'xs' || breakpoint === 'sm', [breakpoint])

  return (
    <div>
      Filters And Sorting
    </div>
  )
}
