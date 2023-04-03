import { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import classNames from 'classnames'

type ButtonProps = {
  onClick: () => void
  className?: string
}

export const Button: FunctionComponent<
  ComponentPropsWithoutRef<'button'> & ButtonProps
> = ({
  onClick,
  className,
  children
}) => {
  return (
    <button
      className={classNames('uppercase underline text-xs opacity-60 transition hover:opacity-100', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
