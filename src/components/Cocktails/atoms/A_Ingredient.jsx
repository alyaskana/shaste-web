import React from 'react';
import s from './A_Ingredient.module.scss'

const A_Ingredient = ({ ingredient }) => {
  return (
    <div className={s.ingredient}>
      {ingredient}
    </div>
  );
};

export default A_Ingredient;