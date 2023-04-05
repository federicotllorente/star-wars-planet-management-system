import { NextPage } from "next"
import Link from "next/link"
import { Layout } from "~components/Layout/Layout"

const NotFound: NextPage = () => (
  <Layout>
    <h2>Sorry, we couldn't find this page</h2>
    <p className="pt-2">Please try with a different one, or <Link href="/" className="underline">go to the Homepage</Link></p>
  </Layout>
)

export default NotFound
