import { ShortUser } from './user'
import { Image } from './image'

export type Post = {
  id: number
  content: string
  image: Image
  parent_id: number
  user: ShortUser
}
