import { createDomain, createStore } from "effector";
import { persist } from 'effector-storage/local'
import { User } from './types'

const localStorage = createDomain('persist')
localStorage.onCreateStore((store) => persist({ store }))

export const userStore = localStorage.createStore<User>(null, { name: 'user' });
export const tokenStore = localStorage.createStore(null, { name: 'token' });

export const userIngredientsStore = createStore([], { name: 'userIngredients' });