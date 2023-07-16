import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

import { getCookie, hasCookie, removeCookies, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { Spin, message } from 'antd'
import jwt_decode from 'jwt-decode'
import Image from 'next/image'

import Logo from '../../public/images/logo.png'

import WebService from '@/services/modules/Web'
import type { Auth, ILogin, IUserData } from '@/types/modules/Auth'
import type { IToken } from '@/types/modules/Base'
const authContext = createContext<Auth>({} as Auth)

const useAuth = () => {
  return useContext(authContext)
}

const useProvideAuth = () => {
  const [tokenData, setTokenData] = useState<IToken>({ token: '' })
  const [userInfo, setUserInfo] = useState<IUserData>()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const login = async ({ email, password }: ILogin) => {
    try {
      const data = await WebService.login({ email, password })

      setCookie('acc-token', data.token)
      setTokenData(data)
      setTimeout(() => {
        checkToken()
        if (userInfo?.isAdmin) router.push('/user/dashboard')
        else router.push('/admin/dashboard')
      }, 1000)
      return data
    } catch (error) {
      // console.log(error);
    }
  }

  const checkToken = async () => {
    const data = (await getCookie('acc-token')) as string
    const dataToken = jwt_decode<IUserData>(data)
    setUserInfo(dataToken)
    setTokenData({ token: data })
  }

  const logout = async () => {
    removeCookies('acc-token')
    setUserInfo(null)
    message.success('ออกจากระบบสำเร็จ')
    router.push('/')

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    if (hasCookie('acc-token')) {
      checkToken()
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [router])

  return {
    tokenData,
    loading,
    login,
    logout,
    userInfo,
  }
}

const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth = useProvideAuth()
  const router = useRouter()

  if (auth.loading) {
    return (
      <authContext.Provider value={auth}>
        <div className="flex justify-center items-center w-full mw-100" style={{ height: '100vh' }}>
          <Image src={Logo} width={202} height={42} alt="logo-sms" />
        </div>
      </authContext.Provider>
    )
  } else {
    if ((location.pathname.includes('/user') || location.pathname.includes('/admin')) && auth.tokenData.token === '') {
      router.push('/login')
      return <></>
    } else {
      return <authContext.Provider value={auth}>{children}</authContext.Provider>
    }
  }
}

export { AuthProvider, authContext, useAuth }

export default useAuth
