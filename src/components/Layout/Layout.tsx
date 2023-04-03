import Head from 'next/head'
import { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import { Header } from '~components/Header/Header'

export const Layout: FunctionComponent<ComponentPropsWithoutRef<'main'>> = ({
  children
}) => {
  return (
    <div className="bg-gradient-to-b from-blue-dark to-black text-white min-h-[100vh]">
      <Head>
        <title>Star Wars Planet Management System</title>
        <meta name="description" content="Star Wars Planet Management System - By Federico Tejedor Llorente - Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-3 md:p-6">
        {children}
      </main>
    </div>
  )
}