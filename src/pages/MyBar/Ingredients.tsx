import { FC } from 'react'
import s from './MyBar.module.scss'
import { Ingredient as IngredientType } from '@types'

type IngredientProps = {
  ingredient: IngredientType
  handleDeleteIngredient?: (item: any) => void
}

type IngredientsProps = {
  ingredients: IngredientType[]
  handleDeleteIngredient?: (item: any) => void
}

const Ingredient: FC<IngredientProps> = ({ ingredient, handleDeleteIngredient }) => {
  return (
    <div className={s.user_ingredient} onClick={() => handleDeleteIngredient(ingredient.id)}>
      {ingredient.name}
      <span className={s.delete_btn}>X</span>
    </div>
  )
}

export const Ingredients: FC<IngredientsProps> = ({ ingredients, handleDeleteIngredient }) => {
  return (
    <div className={s.user_ingredients}>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} handleDeleteIngredient={handleDeleteIngredient} />
      ))}
    </div>
  )
}
