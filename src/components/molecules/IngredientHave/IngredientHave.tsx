import { FC } from 'react'
import { useStore } from 'effector-react'
import { $currentUser } from '../../../models/users'
import { CocktailIngredient } from '../../../types'

import s from './IngredientHave.module.scss'
import { Icon } from '@atoms/Icon'
import availableIcon from './../../../assets/images/icons/available.svg'
import unavailableIcon from './../../../assets/images/icons/unavailable.svg'

type IngredientHaveProps = {
  ingredient: CocktailIngredient
}

export const IngredientHave: FC<IngredientHaveProps> = ({ ingredient }) => {
  const user = useStore($currentUser)

  const isAvailable = () => {
    return !!user.ingredients.find((i) => i.id === ingredient.id)
  }

  return (
    <div className={s.wrapper}>
      <p className={s.ingredient_name}>{ingredient.name}</p>
      <div className={s.ingredient_info}>
        <p className={s.amount}>{ingredient.amount}</p>
        {user && (
          <Icon src={unavailableIcon} srcHover={unavailableIcon} srcActive={availableIcon} isActive={isAvailable()} />
        )}
      </div>
    </div>
  )
}
