import axios from 'axios'
import { $token } from '../models/users'

export const fetcher = axios.create({
  baseURL: 'http://localhost:3000/api/',
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
}
