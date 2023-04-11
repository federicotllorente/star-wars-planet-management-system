import { render, screen } from '@testing-library/react'
import { Button, ButtonProps } from './Button'

describe('Button', () => {
  const defaultProps: ButtonProps = {
    onClick: () => {}
  }

  const renderComponent = (props: ButtonProps = defaultProps) =>
    render(<Button {...props} />)
  
  it('renders the proper class names when variant is primary', () => {
    renderComponent({ ...defaultProps, variant: 'primary' })
    expect(screen.getByTestId('button-primary')).toHaveProperty('className', 'uppercase transition w-fit px-2 py-1 bg-transparent border border-beige-light text-center hover:border-white hover:bg-white hover:text-black')
    expect(screen.getByTestId('button-primary')).not.toHaveProperty('className', 'underline text-xs opacity-60 hover:opacity-100')
  })

  it('renders the proper class names when variant is only-text', () => {
    renderComponent({ ...defaultProps, variant: 'only-text' })
    expect(screen.getByTestId('button-only-text')).toHaveProperty('className', 'uppercase transition underline text-xs opacity-60 hover:opacity-100')
    expect(screen.getByTestId('button-only-text')).not.toHaveProperty('className', 'w-fit px-2 py-1 bg-transparent border border-beige-light text-center hover:border-white hover:bg-white hover:text-black')
  })

  it('renders the component with the passed class names', () => {
    renderComponent({ ...defaultProps, className: 'bg-white' })
    expect(screen.getByTestId('button-primary')).toHaveProperty('className', 'uppercase transition w-fit px-2 py-1 bg-transparent border border-beige-light text-center hover:border-white hover:bg-white hover:text-black bg-white')
  })
})
