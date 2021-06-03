import axios, { AxiosResponse } from "axios";

export const get = (path: string): Promise<AxiosResponse<any>> => {
  return axios.get(`http://localhost:3000/api/${path}`)
}