import React, { useContext } from 'react';
import s from './IngredientHave.module.scss';
import UserContext from '../../../userContext'
import { Icon } from '@atoms/Icon';
import availableIcon from './../../../assets/images/icons/available.svg'
import unavailableIcon from './../../../assets/images/icons/unavailable.svg'

export const IngredientHave = ({ ingredient }) => {
  const user = useContext(UserContext)
  const isAvailable = (ingredient, user) => {
    return !!user.ingredients.find((i) => i.id === ingredient.id)
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
        {user && <Icon
          src={unavailableIcon}
          srcHover={unavailableIcon}
          srcActive={availableIcon}
          isActive={isAvailable(ingredient, user)} />}
      </div>
    </div>
  );
};