import { render, screen } from '@testing-library/react'
import { FiltersDrawer, FiltersDrawerProps } from './FiltersDrawer'

describe('FiltersDrawer', () => {
  const defaultProps: FiltersDrawerProps = {
    setShowingFiltersDrawer: jest.fn(),
    activeFilters: [],
    setActiveFilters: jest.fn()
  }

  const renderComponent = (props: FiltersDrawerProps = defaultProps) =>
    render(<FiltersDrawer {...props} />)
  
  it('renders the component', () => {
    renderComponent()
    expect(screen.getByTestId('filtersDrawer')).toBeTruthy()
  })

  it('renders the filter containers', () => {
    renderComponent()
    expect(screen.getAllByTestId('filterContainer')).toHaveLength(3)
  })

  it("renders the 'Filters' title", () => {
    renderComponent()
    expect(screen.getByText('Filters')).toBeTruthy()
  })

  it("renders the 'Remove all' button if the there are active filters", () => {
    renderComponent({
      ...defaultProps,
      activeFilters: [
        {
          title: 'Test',
          id: 'id-test',
          type: 'type-test'
        }
      ]
    })
    expect(screen.getByText('Remove all')).toBeTruthy()
  })
})
