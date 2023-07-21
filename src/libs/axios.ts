import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = 'Bearer ' + ''
    return config
  },
  (error: AxiosError) => {
    return { error }
  },
)

const interceptReponseId = axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export { axios, interceptReponseId }
