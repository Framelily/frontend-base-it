import type { GetServerSidePropsContext } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getI18nProps = async (ctx: GetServerSidePropsContext, ns = ['common']) => {
  const { locale } = ctx
  const props = {
    ...(await serverSideTranslations(locale, ns)),
  }
  return props
}

export const makeServerSideProps =
  (ns = []) =>
  async (ctx: GetServerSidePropsContext) => ({
    props: await getI18nProps(ctx, ns),
  })
