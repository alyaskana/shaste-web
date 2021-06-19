import { $currentUser, $token, setUser, setToken, fetchCurrentUserFx } from './index'
import { User } from './types'

import { get } from '../../api/apiFetcher'

fetchCurrentUserFx.use(async () => get(`/users/profile`))
$currentUser.on(fetchCurrentUserFx.doneData as any, (_state, response: any) => {
  return response.data as User
})

$currentUser.on(setUser, (_state, user) => user)
$token.on(setToken, (_state, token) => token)