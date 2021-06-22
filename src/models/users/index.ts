import { User, Ingredient, IdsListItem } from '@types'
import { createStore, createEffect, createEvent, createDomain } from 'effector'
import { persist } from 'effector-storage/local'

const localStorage = createDomain('persist')
localStorage.onCreateStore((store) => persist({ store }))

export const $currentUser = createStore<User>(null as User)
export const $token = localStorage.createStore<string>(null, { name: 'token' })

export const fetchCurrentUserFx = createEffect()
export const setCurrentUser = createEvent()
export const setCurrentUserIngredients = createEvent<Ingredient[]>()
export const setCurrentUserLikes = createEvent<IdsListItem[]>()
export const setCurrentUserFavorites = createEvent<IdsListItem[]>()
export const setCurrentUserTasted = createEvent<IdsListItem[]>()
export const setToken = createEvent()
