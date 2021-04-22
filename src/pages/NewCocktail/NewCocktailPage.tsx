import React from 'react';
import s from './NewCocktailPage.module.scss'
import { TitleSecondary, Font } from '@atoms/TitleSecondary'

export const NewCocktailPage = () => {
  return (
    <div>
      <TitleSecondary title='СОЗДАЕМ РЕЦЕПТ' font={Font.SK_Zweig} />
      <form>
        <label>
          <h2>как называется ваш коктейль?</h2>
          <input name='cocktail[title]' type="text" />
        </label>
        <label>
          <h2>какие нужны ингредиенты?</h2>
          <input name='cocktail[cocktails_ingredients][][ingredient_id]' type="text" />
        </label>
        <label>
          <h2>сколько? <span>необязательно</span></h2>
          <input name='cocktail[cocktails_ingredients][][ingredient_id]' type="text" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};