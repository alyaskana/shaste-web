import { API } from '../base'
import { Post } from '../../types'
import { serialize } from 'object-to-formdata'

class PostsFetcher extends API {
  create<R = Post>(data: Record<string, unknown>) {
    return super.post<R>({
      path: `posts`,
      params: serialize(data),
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}
export const postsFetcher = new PostsFetcher()
