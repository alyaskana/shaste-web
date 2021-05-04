import React, { useState } from 'react';
import s from './Ingredients.module.scss'

const IngredientsRow = () => (
  <div className={s.ingredient_row}>
    <input name='cocktail[cocktails_ingredients][][ingredient_id]' type="text" placeholder='клубника' />
    <input name='cocktail[cocktails_ingredients][][ingredient_id]' type="text" placeholder='25 мл' />
  </div>
)

export const Ingredients = () => {
  const [ingredients, setIngredients] = useState([<IngredientsRow />])
  const addIngredientRow = () => {
    setIngredients([...ingredients, <IngredientsRow />])
  }

  return (
    <div>
      {ingredients}
      <div className={s.plus_btn} onClick={addIngredientRow}>+</div>
    </div>
  );
};