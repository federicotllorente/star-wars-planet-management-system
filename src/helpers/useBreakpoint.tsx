import { useEffect, useState } from 'react'

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const useBreakpoint = (): Breakpoints | null => {
  const [breakpoint, setBreakPoint] = useState<Breakpoints | null>(null)

  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({ width: 0, height: 0 })

  const breakpoints = {
    xs: 0,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440
  }

  const handleResize = () => {
    setWindowSize({
      width: window.outerWidth,
      height: window.outerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    if (breakpoints.xs < windowSize.width && windowSize.width < breakpoints.sm)
      setBreakPoint('xs')
    if (breakpoints.sm < windowSize.width && windowSize.width < breakpoints.md)
      setBreakPoint('sm')
    if (breakpoints.md < windowSize.width && windowSize.width < breakpoints.lg)
      setBreakPoint('md')
    if (breakpoints.lg < windowSize.width && windowSize.width < breakpoints.xl)
      setBreakPoint('lg')
    if (windowSize.width >= breakpoints.xl) setBreakPoint('xl')

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize.width])

  return breakpoint
}
