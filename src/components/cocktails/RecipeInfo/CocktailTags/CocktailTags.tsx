import { FC } from 'react'
import s from './CocktailTags.module.scss'
import { CocktailTag } from './CocktailTag'
import { Cocktail } from '@types'

type CocktailTagProps = {
  cocktail: Cocktail
}

export const CocktailTags: FC<CocktailTagProps> = ({ cocktail }) => {
  return (
    <div className={s.tags}>
      {Object.entries(cocktail.tags).map(([tagName, count], index) => (
        <CocktailTag tagName={tagName} count={count} key={index} />
      ))}
    </div>
  )
}
