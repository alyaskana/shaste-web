import React, { useState, useEffect } from "react"
import * as axios from "axios";
import s from './CocktailPage.module.scss'
import A_Card_Photo from "../../../components/Cocktails/atoms/A_Card_Photo";
import A_Title_Secondary from "../../../components/Cocktails/atoms/A_Title_Secondary";
import M_Ingredient_Have from "../../../components/Cocktails/molecules/M_Ingredient_Have";
import M_Recipe_Step from "../../../components/Cocktails/molecules/M_Recipe_Step";
import O_Recipe_Header from "../../../components/Cocktails/organisms/O_Recipe_Header";
import YoutubeEmbed from "../../../components/App/YoutubeEmbed";

const cocktailIngredients = (ingredients) => {
  return ingredients.map(ingredient => {
    return <M_Ingredient_Have ingredient={ingredient} />
  })
}

const cocktailDirections = (direction) => {
  return direction.map((direction, index) => {
    return <M_Recipe_Step step={index + 1} text={direction} />
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
      <O_Recipe_Header cocktail={cocktail} />
      <div className={s.cocktail_content}>
        <div className={s.receipe_info}>
          <div className={s.ingredients}>
            <A_Title_Secondary title='Ингредиенты' />
            <div className={s.ingredients_list}>
              {cocktailIngredients(cocktail.ingredients)}
            </div>
          </div>
          <div className={s.separator}></div>
          <div className={s.cocktail_image}>
            <A_Card_Photo src={"//localhost:3000" + cocktail.image.url} />
          </div>
          <div className={s.separator}></div>
          <div className={s.instructions}>
            <A_Title_Secondary title='Приготовление' />
            {cocktailDirections(cocktail.directions)}
          </div>
        </div>
        {cocktail.youtube ? <div className={s.video}><YoutubeEmbed embedId={cocktail.youtube} /></div> : <></>}
      </div>
    </div >
  )
}

export default CocktailPage
