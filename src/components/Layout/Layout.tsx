import Head from 'next/head'
import { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import classNames from 'classnames'
import { Header } from '~components/Header/Header'

type LayoutProps = {
  noPadding?: boolean
  className?: string
}

export const Layout: FunctionComponent<
  ComponentPropsWithoutRef<'main'> & LayoutProps
> = ({
  noPadding = false,
  className,
  children
}) => {
  return (
    <div
      className="bg-gradient-to-b from-blue-dark to-black text-white min-h-[100vh]"
      data-testid="layout"
    >
      <Head>
        <title>Star Wars Planet Management System</title>
        <meta name="description" content="Star Wars Planet Management System - By Federico Tejedor Llorente - Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className={classNames(
          {
            'p-3 md:p-6': !noPadding
          },
          className
        )}
        data-testid="layoutChildrenWrapper"
      >
        {children}
      </main>
    </div>
  )
}
