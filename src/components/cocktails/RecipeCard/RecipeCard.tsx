import { FC } from 'react'
import { CardPhoto } from './CardPhoto'
import { Ingredient } from './Ingredient'
import s from './RecipeCard.module.scss'
import { Ingredient as IngredientType } from '@types'

type RecipeCardProps = {
  src: string
  title: string
  ingredients: IngredientType[]
}

export const RecipeCard: FC<RecipeCardProps> = ({ src, title, ingredients }) => {
  return (
    <div className={s.recipe_card}>
      <CardPhoto src={src} className={s.recipe_card_photo} />
      <div className={s.recipe_card_content}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.ingredients_block}>
          <div className={s.subtitle}>состав</div>
          <div className={s.ingredients_list}>
            {ingredients.map((ingredient) => (
              <Ingredient key={ingredient.id} ingredient={ingredient.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
