export type Ingredient = {
  id: number,
  name: string
}

export type User = {
  id: number,
  login: string,
  user_name: string,
  description: string,
  link: string,
  updated_at: string,
  created_at: string,
  avatar: {
    thumb: {
      url: string
    },
    url: string
  },
  ingredients: Ingredient[],
  followers: { id: string }[],
  followings: { id: string }[],
  cocktails: { id: string }[],
  tasted: { id: string }[],
}

export type UserData = {
  token: string,
  user: User
}