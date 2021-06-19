import axios, { AxiosResponse } from "axios";
import { $token } from '../models/users';

export const get = (path: string, headers = {}): Promise<AxiosResponse<any>> => {
  const token = $token.getState()
  return axios.get(`http://localhost:3000/api/${path}`, {
    headers: {
      'Authorization': token,
      ...headers
    }
  })
}

export const post = (path: string, params: Record<string, any>, headers = {}): Promise<AxiosResponse<any>> => {
  const token = $token.getState()
  return axios.post(`http://localhost:3000/api/${path}`, params, {
    headers: {
      'Authorization': token,
      ...headers
    }
  })
}