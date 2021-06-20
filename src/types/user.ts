import { Image } from './image'
import { Ingredient } from './ingredient'

export type User = {
  id: number,
  login: string,
  user_name: string,
  description: string,
  link: string,
  updated_at: string,
  created_at: string,
  avatar: Image,
  ingredients: Ingredient[],
  followers: { id: number }[],
  followings: { id: number }[],
  cocktails: { id: string }[],
  tasted: { id: string }[],
}
