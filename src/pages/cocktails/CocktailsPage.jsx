import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import * as axios from "axios";
import { RecipeCard } from "@molecules/RecipeCard";
import s from './CocktailsPage.module.scss'
import Masonry from "react-masonry-css";

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/api/cocktails`).then(response => {
      setCocktails(response.data.cocktails)
    })
  }, []);
  return (
    <>
      <div className={s.cocktails_list}>
        <NavLink to='/cocktails/new' className={s.add_cocktail_btn}>создать коктейль</NavLink>
        <Masonry
          breakpointCols={4}
          className={s.my_masonry_grid}
          columnClassName={s.my_masonry_grid_column}>
          {cocktails.map(cocktail => (
            <NavLink to={'/cocktails/' + cocktail.id} className={s.cocktail_wrapper}>
              <RecipeCard
                key={cocktail.id}
                src={"//localhost:3000" + cocktail.image.url}
                title={cocktail.title}
                ingredients={cocktail.ingredients} />
            </NavLink>
          ))
          }
        </Masonry>
      </div>
    </>
  );
}

export default CocktailsPage
