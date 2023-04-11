import { render, screen } from '@testing-library/react'
import { Layout } from './Layout'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/'
  }))
}))

describe('Layout', () => {
  const renderComponent = () =>
    render(
      <Layout>
        <p>Test 1</p>
        <p>Test 2</p>
        <p>Test 3</p>
      </Layout>
    )
  
  it('renders the component', () => {
    renderComponent()
    expect(screen.getByTestId('layout')).toBeTruthy()
  })

  it('renders the children wrapper', () => {
    renderComponent()
    expect(screen.getByTestId('layoutChildrenWrapper')).toBeTruthy()
  })

  it('renders the children inside the wrapper', () => {
    renderComponent()
    expect(screen.getByTestId('layoutChildrenWrapper').childNodes).toHaveLength(3)
    expect(screen.getByTestId('layoutChildrenWrapper').childNodes[0].textContent).toBe('Test 1')
    expect(screen.getByTestId('layoutChildrenWrapper').childNodes[1].textContent).toBe('Test 2')
    expect(screen.getByTestId('layoutChildrenWrapper').childNodes[2].textContent).toBe('Test 3')
  })
})
