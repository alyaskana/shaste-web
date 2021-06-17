import React, { useState, useEffect } from "react"
import * as axios from "axios";
import s from './CocktailPage.module.scss'
import { CardPhoto } from "@atoms/CardPhoto";
import { TitleSecondary } from "@atoms/TitleSecondary";
import { IngredientHave } from "@molecules/IngredientHave";
import { RecipeStep } from "@molecules/RecipeStep";
import { RecipeHeader } from "@organisms/RecipeHeader";
import { YoutubeEmbed } from "@atoms/YoutubeEmbed";

const cocktailIngredients = (ingredients) => {
  return ingredients.map(ingredient => {
    return <IngredientHave ingredient={ingredient} />
  })
}

const cocktailDirections = (direction) => {
  return direction.map((direction, index) => {
    return <RecipeStep step={index + 1} text={direction} />
  })
}

const CocktailPage = (props) => {
  const cocktailId = props.match.params.id
  const [cocktail, setCocktail] = useState(null)
  useEffect(() => {
    axios.get(`http://localhost:3000/api/cocktails/${cocktailId}`).then(response => {
      setCocktail(response.data)
    })
  }, []);

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
