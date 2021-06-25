import axios, { AxiosError } from 'axios'
import { $token } from '../models/users'

export const fetcher = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:3000/api/' : 'https://shaste.herokuapp.com/api/',
})

fetcher.interceptors.response.use(undefined, async (error: AxiosError) => {
  if (error.response?.status == 401) {
    window.location.href = '/login'
  }

  return Promise.reject(error)
})

type GetParams = {
  path: string
  params?: Record<string, string>
  headers?: Record<string, string>
}
type PostParams = {
  path: string
  params?: Record<string, string | number> | FormData
  headers?: Record<string, string>
}

export class API {
  fetcher = fetcher

  get<R>({ path, params = {}, headers = {} }: GetParams) {
    const query = new URLSearchParams(params).toString()
    const token = $token.getState()
    return this.fetcher.get<R>(`${path}?${query}`, {
      headers: {
        Authorization: token,
        ...headers,
      },
    })
  }

  post<R>({ path, params = {}, headers = {} }: PostParams) {
    const token = $token.getState()
    return this.fetcher.post<R>(path, params, {
      headers: {
        Authorization: token,
        ...headers,
      },
    })
  }

  delete<R>({ path, params = {}, headers = {} }: PostParams) {
    const token = $token.getState()
    return this.fetcher.post<R>(path, params, {
      headers: {
        Authorization: token,
        ...headers,
      },
    })
  }
}
