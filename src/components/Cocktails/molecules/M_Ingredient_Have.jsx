import React, { useContext } from 'react';
import s from './M_Ingredient_Have.module.scss';
import UserContext from '../../../userContext'
import A_Icon from '../atoms/A_Icon';
import availableIcon from './../../../assets/images/icons/available.svg'
import unavailableIcon from './../../../assets/images/icons/unavailable.svg'

const M_Ingredient_Have = ({ ingredient }) => {
  const user = useContext(UserContext)
  const isAvailable = (ingredient, user) => {
    return !!user.ingredients.find((i) => i.id == ingredient.id)
  }

  return (
    <div className={s.wrapper}>
      <p className={s.ingredient_name}>
        {ingredient.name}
      </p>
      <div className={s.ingredient_info}>
        <p className={s.amount}>
          {ingredient.amount}
        </p>
        <A_Icon
          src={unavailableIcon}
          srcHover={unavailableIcon}
          srcActive={availableIcon}
          isActive={isAvailable(ingredient, user)} />
      </div>
    </div>
  );
};

export default M_Ingredient_Have;