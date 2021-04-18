import React from 'react';
import s from './NewCocktailPage.module.scss'

const NewCocktailPage = () => {
  return (
    <div>
      <h1>создаем рецепт</h1>
      <form>
        <label>
          <p>как называется ваш коктейль?</p>
          <input name='cocktail[title]' type="text"} />
        </label>
        <label>
          <p>какие нужны ингредиенты?</p>
          <input name='cocktail[cocktails_ingredients][][ingredient_id]' type="text"} />
        </label>
        <label>
          <p>сколько? <span>необязательно</span></p>
          <input name='cocktail[cocktails_ingredients][][ingredient_id]' type="text"} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewCocktailPage;