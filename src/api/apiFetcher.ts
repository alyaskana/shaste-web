import axios from "axios";

export const get = (path: string) => {
  axios.get(`http://localhost:3000/api/${path}`)
}