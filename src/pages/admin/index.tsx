import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import BackofficeLayout from '@/layouts/BackofficeLayout'

const UserDashboardPage: NextPage = () => {
  const { t } = useTranslation(['common'])

  return (
    <BackofficeLayout title="Dashboard">
      <h1>TEST ADMIN</h1>
    </BackofficeLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default UserDashboardPage
