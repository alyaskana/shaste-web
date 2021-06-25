import { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { cocktailsFetcher } from '@api/cocktails'
import { Cocktail } from '@types'

import { RecipeInfo } from '@components/cocktails/RecipeInfo'

import { RecipeContent } from '@components/cocktails/RecipeContent'
import { SimilarCocktails } from '@components/cocktails/SimilarCocktails'
import { CocktailFeed } from '@components/cocktails/CocktailFeed'

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
      <CocktailFeed cocktail={cocktail} setCocktail={setCocktail} />
      <SimilarCocktails cocktail={cocktail} />
    </>
  )
}
