import { API } from '../base'
import { Ingredient } from '../../types'

export type IngredientsResponse = {
  ingredients: Ingredient[]
}

class IngredientsFetcher extends API {
  getAll<R = IngredientsResponse>() {
    return super.get<R>({ path: 'ingredients' })
  }

  search<R = IngredientsResponse>(text: string) {
    return super.get<R>({ path: 'ingredients', params: { search: text } })
  }
}

export const ingredientsFetcher = new IngredientsFetcher()
