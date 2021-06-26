import { PostCocktail } from '@types'
import { FC } from 'react'
import s from './PostRecipeCard.module.scss'

type PostRecipeCardProps = {
  cocktail: PostCocktail
}

export const PostRecipeCard: FC<PostRecipeCardProps> = ({ cocktail }) => {
  return (
    <div className={s.card}>
      <div className={s.image_wrap}>
        <img src={cocktail.image.url} alt="" className={s.image} />
      </div>
      <div className={s.content}>
        <div className={s.title}>{cocktail.title}</div>
        <div className={s.description}>{cocktail.description}</div>
      </div>
    </div>
  )
}
