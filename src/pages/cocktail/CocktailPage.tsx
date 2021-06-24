import { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { cocktailsFetcher } from '@api/cocktails'
import { Cocktail } from '@types'

import { TitleSecondary } from '@components/common/TitleSecondary'
import { RecipeInfo } from '@components/cocktails/RecipeInfo'

import s from './CocktailPage.module.scss'
import { RecipeCard } from '@components/cocktails/RecipeCard'
import { RecipeContent } from '@components/cocktails/RecipeContent'

type Params = {
  id: string
}

export const CocktailPage: FC<RouteComponentProps<Params>> = ({ match }) => {
  const cocktailId = match.params.id
  const [cocktail, setCocktail] = useState<Cocktail>(null)

  useEffect(() => {
    cocktailsFetcher.getById(cocktailId).then((response) => {
      setCocktail(response.data)
    })
  }, [cocktailId])

  if (!cocktail) {
    return <></>
  }

  return (
    <>
      <RecipeInfo cocktail={cocktail} setCocktail={setCocktail} />
      <RecipeContent cocktail={cocktail} />
      <div className={s.similar_cocktails}>
        <TitleSecondary title="Коктейли с похожими ингредиентами" />
        <div className={s.similar_cocktails_items}>
          {cocktail.similar_cocktails.map((cocktail) => (
            <RecipeCard key={cocktail.id} cocktail={cocktail} className={s.similar_cocktails_item} />
          ))}
        </div>
      </div>
    </>
  )
}
