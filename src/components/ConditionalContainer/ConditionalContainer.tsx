import { ComponentPropsWithoutRef, FunctionComponent } from 'react'

export type ConditionalContainerProps = {
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
    <div className={className} data-testid="conditionalContainer">
      {children}
    </div>
  ) : (
    <>{children}</>
  )
