import '@fontsource/prompt/300.css'
import '@fontsource/prompt/400.css'
import '@fontsource/prompt/500.css'
import '@fontsource/prompt/600.css'
import '@fontsource/prompt/700.css'
import '@fontsource/prompt/800.css'
import '@/styles/sidebar.scss'
import '@/styles/backoffice.scss'
import '@/styles/globals.scss'

import { useMemo } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ConfigProvider } from 'antd'
import EN from 'antd/lib/locale/en_US'
import TH from 'antd/lib/locale/th_TH'
import { useRouter } from 'next/router'
import moment from 'moment'

import { AuthProvider } from '@/hooks/Auth'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const locales = {
  th: TH,
  en: EN,
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const { locale } = useRouter()

  // _Memo
  const configLocale = useMemo(() => {
    if (!locale) {
      moment.locale('th')
      return locales.th
    }

    moment.locale(locale)
    return locales[locale]
  }, [locale])

  return (
    <ConfigProvider locale={configLocale}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default appWithTranslation(MyApp)
