import { CardPhoto } from '@components/cocktails/CardPhoto'
import { Ingredient } from '@components/cocktails/RecipeCard/Ingredient'
import s from './RecipeCard.module.scss'

export const RecipeCard = ({ src, title, ingredients }) => {
  return (
    <div className={s.card}>
      <CardPhoto src={src} />
      <div className={s.card_content}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.ingredients_block}>
          <div className={s.subtitle}>если добавить/состав</div>
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
