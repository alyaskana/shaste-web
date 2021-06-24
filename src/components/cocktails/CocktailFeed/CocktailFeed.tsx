import { FC } from 'react'
import { $currentUser } from '@models/users'
import { useStore } from 'effector-react'
import { Cocktail } from '@types'

import s from './CocktailFeed.module.scss'
import { TitleSecondary } from '@components/common/TitleSecondary'
import { AddPostForm } from './AddPostForm/AddPostForm'

type CocktailFeedProps = {
  cocktail: Cocktail
}

export const CocktailFeed: FC<CocktailFeedProps> = ({ cocktail }) => {
  const currentUser = useStore($currentUser)
  const cocktailPosts = cocktail.posts

  return (
    <div className={s.cocktail_feed}>
      <TitleSecondary title="Обсуждение" />
      {currentUser ? <AddPostForm currentUser={currentUser} cocktail={cocktail} /> : <></>}
      {cocktailPosts.length >= 1 ? (
        cocktailPosts.map((post) => {
          return (
            <>
              <img src={`//localhost:3000/${post.user.avatar}`} alt="" />
              <div>{post.user.login}</div>
              <div>{post.user.user_name}</div>
              <div>{post.content}</div>
            </>
          )
        })
      ) : (
        <div>Стань первым, кто напишет пост об этом коктейле!</div>
      )}
    </div>
  )
}
