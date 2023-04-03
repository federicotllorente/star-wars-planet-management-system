import { ComponentPropsWithoutRef, FunctionComponent } from 'react'

type ConditionalContainerProps = {
  shouldRenderContainer: boolean
  className?: string
}

export const ConditionalContainer: FunctionComponent<
  ComponentPropsWithoutRef<'div'> & ConditionalContainerProps
> = ({
  shouldRenderContainer = false,
  className,
  children
}) =>
  shouldRenderContainer ? (
    <div className={className}>
      {children}
    </div>
  ) : (
    <>{children}</>
  )
