import { $currentUser, $token, setCurrentUser, setToken, fetchCurrentUserFx, setCurrentUserIngredients } from './index'
import { User } from '../../types'
import { usersFetcher } from '../../api/users'

fetchCurrentUserFx.use(async () => usersFetcher.getCurrentUser())
$currentUser.on(fetchCurrentUserFx.doneData as any, (_state, response: any) => {
  return response.data as User
})

$currentUser.on(setCurrentUser, (_state, user) => user)
$currentUser.on(
  setCurrentUserIngredients,
  (state, ingredients: any) => ({ ...state, ingredients: ingredients } as User),
)
$token.on(setToken, (_state, token) => token)
