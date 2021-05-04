import React from 'react';
import s from './CocktailName.module.scss'

export const CocktailName = () => {
  return (
    <div>
      <input className={s.input} name='cocktail[title]' type="text" placeholder='маргарита, текила санрайз, молочный пунш' />
    </div>
  );
};