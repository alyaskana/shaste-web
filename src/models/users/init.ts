import { AxiosResponse } from 'axios'
import {
  $currentUser,
  $token,
  setCurrentUser,
  setToken,
  fetchCurrentUserFx,
  setCurrentUserIngredients,
  setCurrentUserLikes,
  setCurrentUserFavorites,
  setCurrentUserTasted,
} from './index'
import { User, Ingredient, IdsListItem } from '@types'
import { usersFetcher } from '../../api/users'

fetchCurrentUserFx.use(async () => usersFetcher.getCurrentUser())
$currentUser.on(fetchCurrentUserFx.doneData, (_state, response: AxiosResponse<User>) => {
  return response.data
})

$currentUser.on(setCurrentUser, (_state, user) => user)
$currentUser.on(setCurrentUserIngredients, (state, ingredients: Ingredient[]) => ({
  ...state,
  ingredients: ingredients,
}))
$currentUser.on(setCurrentUserLikes, (state, likes: IdsListItem[]) => ({ ...state, likes: likes }))
$currentUser.on(setCurrentUserFavorites, (state, favorites: IdsListItem[]) => ({ ...state, favorites: favorites }))
$currentUser.on(setCurrentUserTasted, (state, tasted: IdsListItem[]) => ({ ...state, tasted: tasted }))

$token.on(setToken, (_state, token) => token)
