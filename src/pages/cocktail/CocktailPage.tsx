import { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { cocktailsFetcher } from '@api/cocktails'
import { Cocktail, CocktailIngredient } from '@types'

import { TitleSecondary } from '@components/common/TitleSecondary'
import { IngredientHave } from '@components/cocktails/IngredientHave'
import { RecipeStep } from '@components/cocktails/RecipeStep'
import { RecipeInfo } from '@components/cocktails/RecipeInfo'
import { YoutubeEmbed } from '@components/cocktails/YoutubeEmbed'

import s from './CocktailPage.module.scss'

const cocktailIngredients = (ingredients: CocktailIngredient[]) => {
  return ingredients.map((ingredient) => {
    return <IngredientHave key={ingredient.id} ingredient={ingredient} />
  })
}

const cocktailDirections = (directions: string[]) => {
  return directions.map((direction, index) => {
    return <RecipeStep key={index} step={index + 1} text={direction} />
  })
}

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
      <div className={s.recipe_content}>
        <div className={s.recipe_content_items}>
          <div className={s.recipe_content_item}>
            <TitleSecondary title="Ингредиенты" className={s.recipe_content_title} />
            {cocktailIngredients(cocktail.ingredients)}
          </div>
          <div className={s.recipe_content_item}>
            <TitleSecondary title="Приготовление" className={s.recipe_content_title} />
            {cocktailDirections(cocktail.directions)}
          </div>
        </div>
        {cocktail.youtube ? (
          <div className={s.video}>
            <YoutubeEmbed embedId={cocktail.youtube} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
