import { render, screen } from '@testing-library/react'
import { FilterItem, FilterItemProps } from './FilterItem'
import { sortBy } from '~constants'

describe('FilterItem', () => {
  const defaultProps: FilterItemProps = {
    filter: sortBy[0],
    activeFilters: [],
    setActiveFilters: jest.fn(),
    isOnlyOneItemSelectable: false
  }

  const renderComponent = (props: FilterItemProps = defaultProps) =>
    render(<FilterItem {...props} />)
  
  it('renders the component', () => {
    renderComponent()
    expect(screen.getByTestId('filterItem')).toBeTruthy()
  })

  it('renders the filter label', () => {
    renderComponent()
    expect(screen.getByTestId('filterItemLabel')).toBeTruthy()
  })

  it('renders the filter input', () => {
    renderComponent()
    expect(screen.getByTestId('filterItemInput')).toBeTruthy()
  })
})
