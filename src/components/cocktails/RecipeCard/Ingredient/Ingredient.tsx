import s from './Ingredient.module.scss'

export const Ingredient = ({ ingredient }) => {
  return <div className={s.ingredient}>{ingredient}</div>
}
