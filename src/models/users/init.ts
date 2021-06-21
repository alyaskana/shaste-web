import { AxiosResponse } from 'axios'
import {
  $currentUser,
  $token,
  setCurrentUser,
  setToken,
  fetchCurrentUserFx,
  setCurrentUserIngredients,
  setCurrentUserLikes,
  LikedCocktails,
} from './index'
import { User, Ingredient } from '@types'
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
$currentUser.on(setCurrentUserLikes, (state, likes: LikedCocktails[]) => ({ ...state, likes: likes }))
$token.on(setToken, (_state, token) => token)
