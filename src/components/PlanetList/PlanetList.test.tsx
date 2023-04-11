import { render, screen } from '@testing-library/react'
import { PlanetList, PlanetListProps } from './PlanetList'
import { allPlanets } from '~domain/planets/mock'

describe('PlanetList', () => {
  const defaultProps: PlanetListProps = {
    planetList: allPlanets
  }

  const renderComponent = (props: PlanetListProps = defaultProps) =>
    render(<PlanetList {...props} />)
  
  it('renders the component', () => {
    renderComponent()
    expect(screen.getByTestId('planetList')).toBeTruthy()
  })

  it('renders the planet list titles', () => {
    renderComponent()
    expect(screen.getByTestId('planetListTitles')).toBeTruthy()
    expect(screen.getByTestId('planetListTitles').childNodes[0].textContent).toBe('Name')
    expect(screen.getByTestId('planetListTitles').childNodes[1].textContent).toBe('ID')
    expect(screen.getByTestId('planetListTitles').childNodes[2].textContent).toBe('Diameter')
    expect(screen.getByTestId('planetListTitles').childNodes[3].textContent).toBe('Climates')
    expect(screen.getByTestId('planetListTitles').childNodes[4].textContent).toBe('Terrains')
    expect(screen.getByTestId('planetListTitles').childNodes[5].textContent).toBe('Population')
  })

  it('renders the planet list item', () => {
    renderComponent()
    expect(screen.getAllByTestId('planetListItem')).toHaveLength(allPlanets.length)
    expect(screen.getAllByTestId('planetListItemName')[0].textContent).toBe(allPlanets[0].name)
    expect(screen.getAllByTestId('planetListItemName')[1].textContent).toBe(allPlanets[1].name)
  })
})
