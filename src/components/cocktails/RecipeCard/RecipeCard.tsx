import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { CardPhoto } from './CardPhoto'
import { Ingredient } from './Ingredient'
import s from './RecipeCard.module.scss'
import { Cocktail } from '@types'

type RecipeCardProps = {
  cocktail: Cocktail
}

export const RecipeCard: FC<RecipeCardProps> = ({ cocktail }) => {
  return (
    <NavLink to={'/cocktails/' + cocktail.id} className={s.card_wrapper}>
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
    </NavLink>
  )
}
