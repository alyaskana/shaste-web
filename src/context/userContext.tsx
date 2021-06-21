import React from 'react'

type Ingredient = {
  id: number
  name: string
}

type User = {
  id: number
  login: string
  user_name: string
  updated_at: string
  created_at: string
  avatar: {
    thumb: {
      url: string
    }
    url: string
  }
  ingredients: Ingredient[]
}

type UserData = {
  token: string
  user: User
}

const UserContext: React.Context<UserData> = React.createContext(null)

export default UserContext
