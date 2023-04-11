import { render, screen } from '@testing-library/react'
import { FilterContainer, FilterContainerProps } from './FilterContainer'
import { sortBy } from '~constants'

describe('FilterContainer', () => {
  const defaultProps: FilterContainerProps = {
    title: 'Sort by',
    filters: sortBy,
    activeFilters: [],
    setActiveFilters: jest.fn()
  }

  const renderComponent = (props: FilterContainerProps = defaultProps) =>
    render(<FilterContainer {...props} />)
  
  it('renders the component', () => {
    renderComponent()
    expect(screen.getByTestId('filterContainer')).toBeTruthy()
  })

  it('renders the filters group title', () => {
    renderComponent()
    expect(screen.getByText(defaultProps.title)).toHaveProperty('className', 'pb-1 uppercase opacity-60')
  })

  it('renders a Filter Item component for each filter', () => {
    renderComponent()
    expect(screen.getAllByTestId('filterItem')).toHaveLength(Object.keys(defaultProps.filters).length)
  })
})
