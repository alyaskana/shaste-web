import { Image } from './image'
import { Ingredient } from './ingredient'
import { Post } from './post'

export type CocktailIngredient = Ingredient & { amount: string }

type ShortUser = {
  id: number
  login: string
  user_name: string
}

export type Cocktail = {
  id: number
  user_id: number
  title: string
  image: Image
  description: string
  directions: string[]
  youtube: string
  created_at: string
  updated_at: string
  user: ShortUser
  ingredients: CocktailIngredient[]
  tags: Record<string, number>
  tasted_users: number
  favorited_users: number
  liked_users: number
  similar_cocktails?: Cocktail[]
  posts: Post[]
}
