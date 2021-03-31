import React, { useState, useEffect } from "react"
import * as axios from "axios";
import s from './Cocktail.module.scss'
import taste_icon from '../../../assets/images/icons/tasted.png'
import save_icon from '../../../assets/images/icons/bookmark.png'
import active_save_icon from '../../../assets/images/icons/bookmark_filled.png'
import like_icon from '../../../assets/images/icons/heart.png'
import active_like_icon from '../../../assets/images/icons/heart_filled.png'
import ActionIcon from './A_action_icon'

const cocktailIngredients = (ingredients) => {
  return ingredients.map(ingredient => {
    return <div>{ingredient.name}</div>
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
      <div className={s.author}>
        {cocktail.user.user_name}
        <span className={s.author_login}>
          @{cocktail.user.login}
        </span>
      </div>
      <div className={s.cocktail_title}>
        {cocktail.title}
      </div>
      <div className={s.tags}>
        {Object.entries(cocktail.tags).map(([tag, count]) => (
          <span className={s.tag}>
            {tag} {count}
          </span>
        ))}
      </div>
      <div className={s.actions}>
        <ActionIcon
          icon_src_default={taste_icon}
          icon_src_active={taste_icon}
          users_count={cocktail.tasted_users} />
        <ActionIcon
          icon_src_default={like_icon}
          icon_src_active={active_like_icon}
          users_count={cocktail.liked_users} />
        <ActionIcon
          icon_src_default={save_icon}
          icon_src_active={active_save_icon}
          users_count={cocktail.favorited_users} />
      </div>
      <div className={s.cocktail_content}>
        <div className={s.cocktail_image}>
          <img src={"//localhost:3000" + cocktail.image.url} alt="cocktail" />
        </div>
        <div className={s.cocktail_info}>
          <div className={s.description}>
            {cocktail.description}
          </div>
          <div className={s.ingredients}>
            <div className={s.title}>
              Ингредиенты
            </div>
            <div className={s.ingredients_list}>
              {cocktailIngredients(cocktail.ingredients)}
            </div>
          </div>
          <div className={s.instructions}>
            <div className={s.title}>
              Приготовление
            </div>
            <div className={s.instructions_text}>
              {cocktail.directions}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CocktailPage
