export interface Auth {
  loading: boolean
  login: ({ email, password }) => Promise<AxiosResponse>
  logout: () => void
}

export interface ILogin {
  email: string
  password: string
}
