import { render, screen } from '@testing-library/react'
import { Header } from './Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/'
  }))
}))

describe('Header', () => {
  const renderComponent = () =>
    render(<Header />)
  
  it('renders the component', () => {
    renderComponent()
    expect(screen.getByTestId('header')).toBeTruthy()
  })

  it('renders the logo', () => {
    renderComponent()
    expect(screen.getByTestId('headerLogo')).toBeTruthy()
  })

  it('renders the header items list', () => {
    renderComponent()
    expect(screen.getByTestId('headerItemsList')).toBeTruthy()
  })

  it('renders the header items', () => {
    renderComponent()
    expect(screen.getAllByTestId('headerItem')).toHaveLength(3)
  })
})
