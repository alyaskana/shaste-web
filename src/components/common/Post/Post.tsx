import { Post as PostType } from '@types'
import { FC } from 'react'
import s from './Post.module.scss'
import { ReactComponent as ShowMoreIconSvg } from '@icons/more_icon.svg'
import { PostRecipeCard } from './PostRecipeCard'

type PostProps = {
  post: PostType
  isRecipeCardShowing: boolean
}

export const Post: FC<PostProps> = ({ post, isRecipeCardShowing }) => {
  return (
    <div className={s.post}>
      <div className={s.left_side}>
        <a href={`/${post.user.login}`}>
          <img src={post.user.avatar} alt="" className={s.avatar} />
        </a>
      </div>
      <div className={s.right_side}>
        <div className={s.post_head}>
          <div>
            <span className={s.username}>{post.user.user_name}</span>
            <a href={`/${post.user.login}`} className={s.login}>
              @{post.user.login}
            </a>
          </div>
          <ShowMoreIconSvg className={s.show_more_icon} />
        </div>
        <div className={s.text}>{post.content}</div>
        {isRecipeCardShowing ? (
          <div className={s.recipe_card_wrap}>
            <PostRecipeCard cocktail={post.cocktail} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
