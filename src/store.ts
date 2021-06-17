import { createDomain, createStore } from "effector";
import { persist } from 'effector-storage/local'

const localStorage = createDomain('persist')
localStorage.onCreateStore((store) => persist({ store }))

export const userStore = localStorage.createStore(null, { name: 'user' });
export const tokenStore = localStorage.createStore(null, { name: 'token' });

export const userIngredientsStore = createStore([], { name: 'userIngredients' });