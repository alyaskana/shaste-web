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

  like<R = Cocktail>(cocktailId: number) {
    return super.post<R>({ path: `cocktails/like`, params: { id: cocktailId } })
  }

  unlike<R = Cocktail>(cocktailId: number) {
    return super.post<R>({ path: `cocktails/unlike`, params: { id: cocktailId } })
  }

  favorite<R = Cocktail>(cocktailId: number) {
    return super.post<R>({ path: `cocktails/favorite`, params: { id: cocktailId } })
  }

  unfavorite<R = Cocktail>(cocktailId: number) {
    return super.post<R>({ path: `cocktails/unfavorite`, params: { id: cocktailId } })
  }

}
export const cocktailsFetcher = new CocktailsFetcher()
