import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import * as axios from "axios";
import M_Recipe_Card from "../Molecules/M_Recipe_Card/M_Recipe_Card";
import s from './CocktailsPage.module.scss'

const cocktailIngredients = (ingredients) => {
  return ingredients.map(ingredient => ingredient.name).join(', ')
}

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/api/cocktails`).then(response => {
      setCocktails(response.data.cocktails)
    })
  }, []);
  return (
    <>
      <h1>Cocktails</h1>
      <div className={s.cocktails_list}>
        {cocktails.map(cocktail => (
          <NavLink to={'/cocktails/' + cocktail.id} className={s.cocktail_wrapper}>
            <M_Recipe_Card
              key={cocktail.id}
              src={"//localhost:3000" + cocktail.image.url}
              title={cocktail.title}
              ingredients={cocktail.ingredients} />
          </NavLink>
        ))
        }
      </div>
      <NavLink to='/cocktails/new'>Создать коктейль</NavLink>
    </>
  );
}

export default CocktailsPage
