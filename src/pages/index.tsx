import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import PageLayout from '@/layouts'
import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'

const IndexPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  return (
    <PageLayout title="หน้าแรก">
      <div className="container mx-auto py-5">
        <h1>BODY</h1>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default IndexPage
