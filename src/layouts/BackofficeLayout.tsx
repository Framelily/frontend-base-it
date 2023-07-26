import type { FC, ReactNode } from 'react'
import { Fragment } from 'react'

import { default as NextHead } from 'next/head'

import HeaderMenu from './HeaderMenu'
import Footer from './Footer'
import Sidebar from './Sidebar'

interface IProps {
  children: ReactNode
  title: string
}

const BackofficeLayout: FC<IProps> = ({ title, children }) => {
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
      <div className="backoffice-layout">
        <Sidebar />
        <Fragment>
          <div className="w-full">
            <HeaderMenu />
            <div className="container-backoffice">{children}</div>
          </div>
        </Fragment>
      </div>
    </Fragment>
  )
}

export default BackofficeLayout
