import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import * as axios from "axios";

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
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Title</th>
            <th>Ingredients</th>
            <th>Image</th>
            <th>Description</th>
            <th>Directions</th>
            <th colSpan="3"></th>
          </tr>
        </thead>

        <tbody>
          {cocktails.map(cocktail => (
            <tr key={cocktail.id}>
              <td>{cocktail.user.login}</td>
              <td>{cocktail.title}</td>
              <td>{cocktailIngredients(cocktail.ingredients)}</td>
              <td>{cocktail.image.thumb.url ? <img src={"//localhost:3000" + cocktail.image.thumb.url} alt="cocktail" /> : ''}</td>
              <td>{cocktail.description}</td>
              <td dangerouslySetInnerHTML={{ __html: cocktail.directions }}></td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <NavLink to='/cocktails/new'>Создать коктейль</NavLink>
    </>
  );
}

export default CocktailsPage
