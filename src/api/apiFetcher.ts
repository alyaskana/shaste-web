import axios, { AxiosResponse } from "axios";

export const get = (path: string): Promise<AxiosResponse<any>> => {
  return axios.get(`http://localhost:3000/api/${path}`)
}

export const post = (path: string, params: Record<string, any>, token: string): Promise<AxiosResponse<any>> => {
  return axios.post(`http://localhost:3000/api/${path}`, params, {
    headers: {
      'Authorization': token
    }
  })
}