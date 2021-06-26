import { API } from '../base'
import { Post } from '../../types'
import { serialize } from 'object-to-formdata'

type PostsResponse = {
  posts: Post[]
}

class PostsFetcher extends API {
  getAll<R = PostsResponse>() {
    return super.get<R>({ path: 'posts' })
  }

  create<R = Post>(data: Record<string, unknown>) {
    return super.post<R>({
      path: `posts`,
      params: serialize(data),
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}
export const postsFetcher = new PostsFetcher()
