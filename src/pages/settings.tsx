import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '~components/Button/Button'
import { Layout } from '~components/Layout/Layout'
import { clearAllPlanetsInLocalStorage } from '~infra/localStorage'

const Settings: NextPage = () => {
  const { push } = useRouter()

  const handleRestoreAllData = () => {
    clearAllPlanetsInLocalStorage()
    push('/')
  }

  return (
    <Layout>
      <h3 className="pb-2">Settings</h3>
      <h4 className="pb-1">Restore planets data</h4>
      <p className="pb-2">This action will clear all the planets data, and recover the original data from the Star Wars API. All the new planets you've created, edited or deleted will be erased or restored.</p>
      <Button onClick={handleRestoreAllData}>Restore all data</Button>
    </Layout>
  )
}

export default Settings
