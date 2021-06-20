import { API } from '../base'
import { Tag } from '../../types'

export type TagsResponse = {
  tags: Tag[]
}

class TagsFetcher extends API {
  getAll<R = TagsResponse>() {
    return super.get<R>({ path: 'tags' })
  }
}

export const tagsFetcher = new TagsFetcher()