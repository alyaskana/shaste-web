import { User } from './types'
import { createStore, createEffect, createEvent, createDomain } from "effector";
import { persist } from 'effector-storage/local'

const localStorage = createDomain('persist')
localStorage.onCreateStore((store) => persist({ store }))


export const $currentUser = createStore<User>({} as User);
export const $token = localStorage.createStore<string>(null, { name: 'token' });

export const fetchCurrentUserFx = createEffect()
export const setUser = createEvent();
export const setToken = createEvent();