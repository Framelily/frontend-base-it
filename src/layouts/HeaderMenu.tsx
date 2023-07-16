import { Fragment, useState } from 'react'

import type { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Menu, Space } from 'antd'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { DownOutlined, MenuOutlined } from '@ant-design/icons'

import Logo from '../../public/images/logo.png'

import menu from '@/configs/menu'
import useAuth from '@/hooks/Auth'

const HeaderMenu: NextPage = () => {
  const { t } = useTranslation(['common'])
  const { asPath, locale, route } = useRouter()
  const auth = useAuth()
  const [menuMobile, setMenuMobile] = useState<boolean>(false)

  const checkOnClick = () => {
    setMenuMobile(menuMobile ? false : true)

    const bodyElement = document.querySelector('body')

    if (window.innerWidth < 1025)
      if (bodyElement && !menuMobile) bodyElement.style.overflow = 'hidden'
      else bodyElement.style.overflow = 'auto'
  }

  const items: MenuProps['items'] = [
    {
      key: 'TH',
      label: (
        <Link href={asPath} locale="th">
          TH
        </Link>
      ),
    },
    {
      key: 'EN',
      label: (
        <Link href={asPath} locale="en">
          EN
        </Link>
      ),
    },
  ]

  return (
    <Fragment>
      <div className="header-menu">
        <div
          className={
            route.search('/user') === 0 || route.search('/admin') === 0
              ? 'px-5 h-full mx-auto'
              : 'container h-full mx-auto'
          }>
          <div className="mobile-menu">
            <Link href="/">
              <Image src={Logo} width={130} height={42} alt="logo-sms" />
            </Link>
            <MenuOutlined className="cursor-pointer" onClick={checkOnClick} />
          </div>
          <div className={menuMobile ? 'in-menu show' : 'in-menu'}>
            <div className="menu-left">
              <Link href="/">
                <Image src={Logo} width={202} height={42} alt="logo-sms" />
              </Link>
              {route.search('/user') !== 0 && route.search('/admin') !== 0 && (
                <div className="list">
                  {menu.map((item, index) =>
                    item.list.length > 0 ? (
                      <Dropdown
                        placement="bottomRight"
                        key={index}
                        className={item.list.find((itemPath) => itemPath.path === route) ? 'item active' : 'item'}
                        overlay={
                          <Menu>
                            {item.list.map((sub, indexSub) => (
                              <Menu.Item key={indexSub}>
                                <Link
                                  href={sub.path}
                                  className={sub.path === route ? 'item active' : 'item'}
                                  onClick={checkOnClick}>
                                  {t(sub.label)}
                                </Link>
                              </Menu.Item>
                            ))}
                          </Menu>
                        }>
                        <Space className="cursor-pointer">
                          {t(item.label)}
                          <DownOutlined className="icon-arrow-down" />
                        </Space>
                      </Dropdown>
                    ) : (
                      <Link
                        key={index}
                        href={item.path}
                        className={item.path === route ? 'item active' : 'item'}
                        onClick={checkOnClick}
                        target={item.label === 'สำหรับนักพัฒนา' ? '_blank' : ''}>
                        {t(item.label)}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
            <div className="group-btn">
              {auth.userInfo && (
                <Fragment>
                  <Dropdown
                    placement="bottomRight"
                    className="pr-3"
                    overlay={
                      <Menu>
                        <Menu.Item key="setting">
                          <Link href="/user/setting" className="item-profile">
                            ตั้งค่าบัญชีผู้ใช้งาน
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="logout">
                          <div className="item-profile" onClick={() => auth.logout()}>
                            ออกจากระบบ
                          </div>
                        </Menu.Item>
                      </Menu>
                    }>
                    <Space className="cursor-pointer">
                      คุณ{auth.userInfo?.displayName}
                      <DownOutlined className="icon-arrow-down" />
                    </Space>
                  </Dropdown>
                </Fragment>
              )}
              {!auth.userInfo && (
                <Fragment>
                  <Link href="login" className="ant-btn">
                    {t('login')}
                  </Link>
                </Fragment>
              )}
              <Dropdown menu={{ items }} placement="bottomRight">
                <Button className="btn-dark">{locale.toLocaleUpperCase()}</Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HeaderMenu
