import { ShortUser } from './user'
import { Image } from './image'

export type PostCocktail = {
  id: number
  user_id: number
  title: string
  image: Image
  description: string
  directions: string[]
  youtube: string
}

export type Post = {
  id: number
  content: string
  image: Image
  parent_id: number
  user: ShortUser
  cocktail: PostCocktail
}
