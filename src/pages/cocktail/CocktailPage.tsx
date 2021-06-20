import { useState, useEffect, FC } from "react"
import { RouteComponentProps } from "react-router-dom";
import { cocktailsFetcher } from '../../api/cocktails'
import { Cocktail, CocktailIngredient } from "../../types";
import { CardPhoto } from "@atoms/CardPhoto";
import { TitleSecondary } from "@atoms/TitleSecondary";
import { IngredientHave } from "@molecules/IngredientHave";
import { RecipeStep } from "@molecules/RecipeStep";
import { RecipeHeader } from "@organisms/RecipeHeader";
import { YoutubeEmbed } from "@atoms/YoutubeEmbed";

import s from './CocktailPage.module.scss'

const cocktailIngredients = (ingredients: CocktailIngredient[]) => {
  return ingredients.map(ingredient => {
    return <IngredientHave ingredient={ingredient} />
  })
}

const cocktailDirections = (directions: string[]) => {
  return directions.map((direction, index) => {
    return <RecipeStep step={index + 1} text={direction} />
  })
}

type Params = {
  id: string
}

const CocktailPage: FC<RouteComponentProps<Params>> = ({ match }) => {
  const cocktailId = match.params.id
  const [cocktail, setCocktail] = useState<Cocktail>(null)

  useEffect(() => {
    cocktailsFetcher.getById(cocktailId).then(response => {
      setCocktail(response.data)
    })
  }, [cocktailId]);

  if (!cocktail) {
    return <></>
  }

  return (
    <div>
      <RecipeHeader cocktail={cocktail} />
      <div className={s.cocktail_content}>
        <div className={s.receipe_info}>
          <div className={s.ingredients}>
            <TitleSecondary title='Ингредиенты' />
            <div className={s.ingredients_list}>
              {cocktailIngredients(cocktail.ingredients)}
            </div>
          </div>
          <div className={s.separator}></div>
          <div className={s.cocktail_image}>
            <CardPhoto src={"//localhost:3000" + cocktail.image.url} />
          </div>
          <div className={s.separator}></div>
          <div className={s.instructions}>
            <TitleSecondary title='Приготовление' />
            {cocktailDirections(cocktail.directions)}
          </div>
        </div>
        {cocktail.youtube ? <div className={s.video}><YoutubeEmbed embedId={cocktail.youtube} /></div> : <></>}
      </div>
    </div >
  )
}

export default CocktailPage
