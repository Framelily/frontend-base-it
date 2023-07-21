import type { FC, ReactNode } from 'react'
import { Fragment } from 'react'

import { default as NextHead } from 'next/head'

import HeaderMenu from './HeaderMenu'
import Footer from './Footer'

interface IProps {
  children: ReactNode
  title: string
}

const PageLayout: FC<IProps> = ({ title, children }) => {
  return (
    <Fragment>
      <NextHead>
        <title>{'ITFRAMETI | ' + title}</title>
        {/* <meta name="description" content="" /> */}
        {/* <meta name="keywords" content="" /> */}
        {/* <meta name="author" content="Doomovie" /> */}
        {/* <link rel="canonical" href="" /> */}
        <meta name="robots" content="index, follow" />
      </NextHead>
      <div className="container-body">
        <div>
          <HeaderMenu />
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default PageLayout
