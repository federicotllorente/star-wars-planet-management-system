import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { Layout } from '~components/Layout/Layout'
import { getPlanets } from '~domain/planets/getPlanets'
import { getAllPlanetsFromSwapi } from '~infra/graphql/getAllPlanetsFromSwapi'
import { getPlanetDetailsFromSwapi } from '~infra/graphql/getPlanetDetailsFromSwapi'
import { PlanetDetails as PlanetDetailsType } from '~types'

const PlanetDetails: NextPage<{ planetId: string }> = ({
  planetId
}) => {
  return (
    <Layout>
      <h2>Planet Details for {planetId}</h2>
    </Layout>
  )
}

export default PlanetDetails

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (!context.params?.id) return { notFound: true }

  return {
    props: {
      planetId: Array.isArray(context.params.id)
        ? context.params.id[0]
        : context.params.id
    }
  }
}
