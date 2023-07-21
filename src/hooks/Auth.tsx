import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

import router, { useRouter } from 'next/router'
import Image from 'next/image'

import Logo from '../../public/images/logo.png'

import type { Auth, ILogin } from '@/types/modules/Auth'
const authContext = createContext<Auth>({} as Auth)

const useAuth = () => {
  return useContext(authContext)
}

const useProvideAuth = () => {
  const [loading, setLoading] = useState(true)

  const login = async ({ email, password }: ILogin) => {
    try {
      return { email, password }
    } catch (error) {
      // console.log(error);
    }
  }

  const logout = async () => {
    router.push('/')

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return {
    login,
    logout,
    loading,
  }
}

const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth = useProvideAuth()
  const router = useRouter()

  if (auth.loading) {
    return (
      <authContext.Provider value={auth}>
        <div className="flex justify-center items-center w-full mw-100" style={{ height: '100vh' }}>
          <Image src={Logo} width={202} height={42} alt="logo" />
        </div>
      </authContext.Provider>
    )
  } else {
    if (location.pathname.includes('/admin')) {
      // router.push('/')
      return <authContext.Provider value={auth}>{children}</authContext.Provider>
    } else {
      return <authContext.Provider value={auth}>{children}</authContext.Provider>
    }
  }
}

export { AuthProvider, authContext, useAuth }

export default useAuth
