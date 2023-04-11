import { render, screen } from '@testing-library/react'
import { ConditionalContainer, ConditionalContainerProps } from './ConditionalContainer'

describe('ConditionalContainer', () => {
  const renderComponent = (props: ConditionalContainerProps) =>
    render(<ConditionalContainer {...props} />)
  
  it('does not render the div container if shouldRenderContainer is false', () => {
    const { container } = renderComponent({ shouldRenderContainer: false })
    expect(container.childNodes).toHaveLength(0)
  })

  it('renders the div container if shouldRenderContainer is true', () => {
    renderComponent({ shouldRenderContainer: true })
    expect(screen.getAllByTestId('conditionalContainer')).toHaveLength(1)
  })

  it('renders the div with the passed class names', () => {
    renderComponent({ shouldRenderContainer: true, className: 'flex' })
    expect(screen.getByTestId('conditionalContainer')).toHaveProperty('className', 'flex')
  })
})
