import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import { Button, Collapse } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

import menuUser from '@/configs/menu-user'
import menuAdmin from '@/configs/menu-admin'
import type { IMenu } from '@/types/modules/Base'
import useAuth from '@/hooks/Auth'

const { Panel } = Collapse

const Sidebar: NextPage = () => {
  const { route } = useRouter()
  const auth = useAuth()
  const [showMenu, setShowMenu] = useState<boolean>(true)
  const [menu, setMenu] = useState<IMenu[]>()

  const customPanelHeader = (item: IMenu) => (
    <div>
      <img
        src={`/images/icon-menu/${item.icon}${item.list.find((itemFind) => itemFind.path === route) ? '-w' : ''}.png`}
        alt="icon-menu"
      />
      {item.label}
    </div>
  )

  const checkShowMenu = () => {
    setShowMenu(showMenu ? false : true)
  }

  useEffect(() => {
    if (window.innerWidth < 1025) setShowMenu(false)
    if (auth.userInfo.isAdmin) setMenu(menuAdmin)
    else setMenu(menuUser)
  }, [auth.userInfo?.isAdmin])

  return (
    <div className="box-sidebar">
      <Button className="ant-btn btn-menu" onClick={checkShowMenu}>
        |||
      </Button>
      <div className={showMenu ? 'sidebar' : 'sidebar hide'}>
        {menu?.map((item, index) =>
          item.list.length > 0 ? (
            <Collapse
              defaultActiveKey={item.list.find((itemFind) => itemFind.path === route) ? item.label : ''}
              expandIconPosition="end"
              key={index}>
              <Panel
                header={customPanelHeader(item)}
                key={item.label}
                className={item.list.find((itemFind) => itemFind.path === route) ? 'active' : ''}>
                {item.list.map((itemSub, indexSub) => (
                  <Link
                    href={itemSub.path}
                    key={indexSub}
                    className={itemSub.path === route ? 'link-menu-sub active' : 'link-menu-sub'}>
                    {itemSub.label}
                  </Link>
                ))}
              </Panel>
            </Collapse>
          ) : (
            <Link href={item.path} key={index} className={item.path === route ? 'link-menu active' : 'link-menu'}>
              <img src={`/images/icon-menu/${item.icon}${item.path === route ? '-w' : ''}.png`} alt="icon-menu" />
              {item.label}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
export default Sidebar
