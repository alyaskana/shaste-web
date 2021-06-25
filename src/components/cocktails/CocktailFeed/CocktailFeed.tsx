import { FC } from 'react'
import { $currentUser } from '@models/users'
import { useStore } from 'effector-react'
import { Cocktail } from '@types'

import s from './CocktailFeed.module.scss'
import { TitleSecondary } from '@components/common/TitleSecondary'
import { AddPostForm } from './AddPostForm/AddPostForm'
import { CocktailPosts } from './CocktailPosts/CocktailPosts'

type CocktailFeedProps = {
  cocktail: Cocktail
  setCocktail: (cocktail: Cocktail) => void
}

export const CocktailFeed: FC<CocktailFeedProps> = ({ cocktail, setCocktail }) => {
  const currentUser = useStore($currentUser)

  return (
    <div className={s.cocktail_feed}>
      <TitleSecondary title="Обсуждение" />
      {currentUser ? <AddPostForm currentUser={currentUser} cocktail={cocktail} setCocktail={setCocktail} /> : <></>}
      {cocktail.posts.length >= 1 ? (
        <CocktailPosts cocktailPosts={cocktail.posts} />
      ) : (
        <div>Стань первым, кто напишет пост об этом коктейле!</div>
      )}
    </div>
  )
}
