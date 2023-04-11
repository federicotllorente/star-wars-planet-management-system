import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '~components/Layout/Layout'

const Homepage: NextPage = () => {
  return (
    <Layout className="px-5 flex flex-col gap-2 text-center items-center">
      <h2 className="text-lg md:text-xl">Welcome to the Star Wars Planet Management System</h2>
      <p>A simple web app for storing and managing all your favorite planets data!</p>
      <Link className="uppercase transition w-fit px-2 py-1 bg-transparent border border-beige-light text-center hover:border-white hover:bg-white hover:text-black" href="/planets">
        Start here
      </Link>
    </Layout>
  )
}

export default Homepage
