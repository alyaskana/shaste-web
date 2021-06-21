import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Cocktail } from '@types'

import { CardPhoto } from '@components/cocktails/CardPhoto'
import { CocktailLikes } from '@components/cocktails/CocktailLikes'
import { CocktailFavorites } from '@components/cocktails/CocktailFavorites'
import { CocktailTasted } from '@components/cocktails/CocktailTasted'

import s from './RecipeInfo.module.scss'

type RecipeInfoProps = {
  cocktail: Cocktail
  setCocktail: (cocktail: Cocktail) => void
}

export const RecipeInfo: FC<RecipeInfoProps> = ({ cocktail, setCocktail }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>
        <div className={s.info}>
          <div>
            <div className={s.cocktail_title}>{cocktail.title}</div>
            <div className={s.description}>{cocktail.description}</div>
          </div>
          <div>
            <div className={s.tags}>
              {Object.entries(cocktail.tags).map(([tag, count], index) => (
                <span key={index} className={s.tag}>
                  {tag} {count}
                </span>
              ))}
            </div>
            <div className={s.actions}>
              <CocktailTasted cocktail={cocktail} setCocktail={setCocktail} />
              <CocktailLikes cocktail={cocktail} setCocktail={setCocktail} />
              <CocktailFavorites cocktail={cocktail} setCocktail={setCocktail} />
            </div>
            <NavLink to={`/${cocktail.user.login}`} className={s.author}>
              @{cocktail.user.login}
            </NavLink>
          </div>
        </div>
        <div className={s.image}>
          <CardPhoto src={'//localhost:3000' + cocktail.image.url} />
        </div>
      </div>
    </div>
  )
}
