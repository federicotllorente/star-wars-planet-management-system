import { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import classNames from 'classnames'

export type ButtonProps = {
  onClick: () => void
  variant?: 'primary' | 'only-text'
  className?: string
}

export const Button: FunctionComponent<
  ComponentPropsWithoutRef<'button'> & ButtonProps
> = ({
  onClick,
  variant = 'primary',
  className,
  children
}) => {
  return (
    <button
      className={classNames(
        'uppercase transition',
        {
          'w-fit px-2 py-1 bg-transparent border border-beige-light text-center hover:border-white hover:bg-white hover:text-black': variant === 'primary',
          'underline text-xs opacity-60 hover:opacity-100': variant === 'only-text'
        },
        className
      )}
      onClick={onClick}
      data-testid={`button-${variant}`}
    >
      {children}
    </button>
  )
}
