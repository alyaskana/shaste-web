import { API } from '../base'
import { Cocktail } from '../../types'
import { serialize } from 'object-to-formdata'

type CocktailsResponse = {
  cocktails: Cocktail[]
}

class CocktailsFetcher extends API {
  getAll<R = CocktailsResponse>() {
    return super.get<R>({ path: 'cocktails' })
  }

  getById<R = Cocktail>(id: number | string) {
    return super.get<R>({ path: `cocktails/${id}` })
  }

  create<R = Cocktail>(data: Record<string, unknown>) {
    return super.post<R>({
      path: `cocktails`,
      params: serialize(data),
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}
export const cocktailsFetcher = new CocktailsFetcher()
