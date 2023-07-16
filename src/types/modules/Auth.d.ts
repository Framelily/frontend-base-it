export interface Auth {
  tokenData: IToken
  loading: boolean
  login: ({ email, password }) => Promise<AxiosResponse>
  logout: () => void
  userInfo: CookieValueTypes
}

export interface ILogin {
  email: string
  password: string
}

export interface ILoginRes {
  data?: string
  message?: string
  token?: string
}

export interface IUserData {
  credit: number
  displayName: string
  email: string
  exp: number
  id: number
  isAdmin: boolean
  phone: string
}

export interface IForgotPassword {
  email: string
}

export interface INewPassword {
  password: string
  confirmPassword: string
  ref: string
}
