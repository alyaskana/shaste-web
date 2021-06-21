import { Image } from './image'
import { Ingredient } from './ingredient'
import { IdsListItem } from './idsListItem'

export type User = {
  id: number
  login: string
  user_name: string
  description: string
  link: string
  updated_at: string
  created_at: string
  avatar: Image
  ingredients: Ingredient[]
  followers: IdsListItem[]
  followings: IdsListItem[]
  cocktails: IdsListItem[]
  tasted: IdsListItem[]
  favorites: IdsListItem[]
  likes: IdsListItem[]
}
