import { Post } from '@components/common/Post'
import { Post as PostType } from '@types'
import { FC } from 'react'
import s from './CocktailPosts.module.scss'

type CocktailPostsProps = {
  cocktailPosts: PostType[]
}

export const CocktailPosts: FC<CocktailPostsProps> = ({ cocktailPosts }) => {
  return (
    <div className={s.cocktail_posts}>
      {cocktailPosts.map((post) => {
        return (
          <div key={post.id} className={s.post_item}>
            <Post post={post} />
          </div>
        )
      })}
    </div>
  )
}
