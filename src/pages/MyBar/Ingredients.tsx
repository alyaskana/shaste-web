import { FC } from 'react'
import s from './MyBar.module.scss'
import { Ingredient as IngredientType } from '@types'

type IngredientProps = {
  ingredient: IngredientType
  handleDelete?: () => void
}

type IngredientsProps = {
  ingredients: IngredientType[]
}

const handleDelete = () => {
  console.log('+++++++')
}

const Ingredient: FC<IngredientProps> = ({ ingredient, handleDelete }) => {
  return (
    <div className={s.user_ingredient} onClick={handleDelete}>
      {ingredient.name}
      <span className={s.delete_btn}>X</span>
    </div>
  )
}

export const Ingredients: FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <div className={s.user_ingredients}>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} handleDelete={handleDelete} />
      ))}
    </div>
  )
}
