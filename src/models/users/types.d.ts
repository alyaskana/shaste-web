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
  followers: { id: number }[],
  followings: { id: number }[],
  cocktails: { id: string }[],
  tasted: { id: string }[],
}