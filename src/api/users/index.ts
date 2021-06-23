import { API } from '../base'
import { IngredientsResponse } from '../ingredients'
import { User } from '../../types'

class UsersFetcher extends API {
  getAll<R = User[]>() {
    return super.get<R>({ path: 'users' })
  }

  getCurrentUser<R = User>() {
    return super.get<R>({ path: 'users/profile' })
  }

  getByLogin<R = User>(login: string) {
    return super.get<R>({ path: `users/${login}` })
  }

  addIngredientToMyBar<R = IngredientsResponse>(ingredientId: number) {
    return super.post<R>({ path: 'profile/ingredients', params: { id: ingredientId } })
  }

  follow<R = never>(userId: number) {
    return super.post<R>({ path: `users/follow`, params: { id: userId } })
  }

  unfollow<R = never>(userId: number) {
    return super.post<R>({ path: `users/unfollow`, params: { id: userId } })
  }

  create<R>(data) {
    return super.post<R>({
      path: `signup`,
      params: data,
    })
  }

  login<R>(data) {
    return super.post<R>({
      path: `login`,
      params: data,
    })
  }
}

export const usersFetcher = new UsersFetcher()
