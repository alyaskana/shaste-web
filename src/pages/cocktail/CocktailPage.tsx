import { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useStore } from 'effector-react'

import { cocktailsFetcher } from '@api/cocktails'
import { Cocktail, CocktailIngredient } from '@types'
import { $currentUser, setCurrentUserLikes, setCurrentUserFavorites, setCurrentUserTasted } from '@models/users'

import { CardPhoto } from '@components/cocktails/CardPhoto'
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
  const currentUser = useStore($currentUser)
  const [cocktail, setCocktail] = useState<Cocktail>(null)

  useEffect(() => {
    cocktailsFetcher.getById(cocktailId).then((response) => {
      setCocktail(response.data)
    })
  }, [cocktailId])

  const handleLike = () => {
    const isLiked = currentUser.likes.some((like) => like.id === cocktail.id)

    if (isLiked) {
      cocktailsFetcher.unlike(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserLikes(currentUser.likes.filter((like) => like.id != cocktail.id))
      })
    } else {
      cocktailsFetcher.like(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserLikes([...currentUser.likes, { id: cocktail.id }])
      })
    }
  }

  const handleFavorite = () => {
    true
  }
  const handleTaste = () => {
    true
  }

  if (!cocktail) {
    return <></>
  }

  return (
    <>
      <RecipeInfo
        cocktail={cocktail}
        handleLike={handleLike}
        handleFavorite={handleFavorite}
        handleTaste={handleTaste}
      />
      <div className={s.cocktail_content}>
        <div className={s.receipe_info}>
          <div className={s.ingredients}>
            <TitleSecondary title="Ингредиенты" />
            <div className={s.ingredients_list}>{cocktailIngredients(cocktail.ingredients)}</div>
          </div>
          <div className={s.separator}></div>
          <div className={s.cocktail_image}>
            <CardPhoto src={'//localhost:3000' + cocktail.image.url} />
          </div>
          <div className={s.separator}></div>
          <div className={s.instructions}>
            <TitleSecondary title="Приготовление" />
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
