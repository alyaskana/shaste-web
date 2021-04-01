import React from 'react';
import A_Card_Photo from '../../atoms/A_Card_Photo/A_Card_Photo';
import A_Ingredient from '../../Atoms/A_Ingredient/A_Ingredient';
import s from './M_Recipe_Card.module.scss'

const M_Recipe_Card = ({ src, title, ingredients }) => {
  return (
    <div className={s.card}>
      <A_Card_Photo src={src} />
      <h1 className={s.title}>{title}</h1>
      <div className={s.ingredients_block}>
        <div className={s.subtitle}>если добавить/состав</div>
        <div className={s.ingredients_list}>
          {ingredients.map(ingredient => (
            <A_Ingredient ingredient={ingredient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default M_Recipe_Card;