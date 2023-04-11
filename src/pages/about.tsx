import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '~components/Layout/Layout'

const About: NextPage = () => {
  return (
    <Layout>
      <h3 className="pb-2">About</h3>
      <p className="pb-1">This is a project made by <a className="underline" href="https://www.federicotllorente.com/" target="_blank" rel="noreferrer">Federico Tejedor Llorente</a> with Next.js (React), TypeScript and TailwindCSS.</p>
      <p className="pb-1">This platform uses the <a className="underline" href="https://studio.apollographql.com/public/star-wars-swapi/home?variant=current" target="_blank" rel="noreferrer">SWAPI GraphQL API</a> for fetching the initial data. Then you can add/create, edit and delete planets as you want. This is stored in your browsers local storage, since the initial data is stored there after is firstly fetched to the Star Wars API.</p>
      <p className="pb-1">You can restore all your data in <Link className="underline" href="/settings">the Settings tab</Link> if you want. Remember that all your changes will be removed.</p>
      <p>Have fun and enjoy the app! You can start by looking for the planet list in <Link className="underline" href="/planets">the Planets tab</Link>.</p>
    </Layout>
  )
}

export default About
