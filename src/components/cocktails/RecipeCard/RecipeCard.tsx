import { FC } from 'react'
import { CardPhoto } from './CardPhoto'
import { Ingredient } from './Ingredient'
import s from './RecipeCard.module.scss'
import { Cocktail } from '@types'
import cn from 'classnames'

type RecipeCardProps = {
  cocktail: Cocktail
  className?: string
}

export const RecipeCard: FC<RecipeCardProps> = ({ cocktail, className }) => {
  return (
    <a href={`/cocktails/${cocktail.id}`} className={cn(s.card_wrapper, className)}>
      <div className={s.recipe_card}>
        <CardPhoto src={`//localhost:3000/${cocktail.image.url}`} className={s.recipe_card_photo} />
        <div className={s.recipe_card_content}>
          <h1 className={s.title}>{cocktail.title}</h1>
          <div className={s.ingredients_block}>
            <div className={s.subtitle}>состав</div>
            <div className={s.ingredients_list}>
              {cocktail.ingredients.map((ingredient) => (
                <Ingredient key={ingredient.id} ingredient={ingredient.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
