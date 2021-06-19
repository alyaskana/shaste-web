import axios, { AxiosResponse } from "axios";
import { tokenStore } from '@/store';

export const get = (path: string): Promise<AxiosResponse<any>> => {
  return axios.get(`http://localhost:3000/api/${path}`)
}

export const post = (path: string, params: Record<string, any>, headers = {}): Promise<AxiosResponse<any>> => {
  const token = tokenStore.getState()
  return axios.post(`http://localhost:3000/api/${path}`, params, {
    headers: {
      'Authorization': token,
      ...headers
    }
  })
}