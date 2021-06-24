import { FC } from 'react'
import s from './RecipeContent.module.scss'
import { Cocktail, CocktailIngredient } from '@types'
import { TitleSecondary } from '@components/common/TitleSecondary'
import { IngredientHave } from '@components/cocktails/IngredientHave'
import { RecipeStep } from '@components/cocktails/RecipeStep'
import { YoutubeEmbed } from '@components/cocktails/YoutubeEmbed'

type RecipeContentProps = {
  cocktail: Cocktail
}

type CocktailIngredientsProps = {
  ingredients: CocktailIngredient[]
}

const CocktailIngredients: FC<CocktailIngredientsProps> = ({ ingredients }) => {
  return (
    <>
      {ingredients.map((ingredient) => {
        return <IngredientHave key={ingredient.id} ingredient={ingredient} />
      })}
    </>
  )
}

type CocktailDirectionsProps = {
  directions: string[]
}

const CocktailDirections: FC<CocktailDirectionsProps> = ({ directions }) => {
  return (
    <>
      {directions.map((direction, index) => {
        return <RecipeStep key={index} step={index + 1} text={direction} />
      })}
    </>
  )
}

export const RecipeContent: FC<RecipeContentProps> = ({ cocktail }) => {
  return (
    <div className={s.recipe_content}>
      <div className={s.recipe_content_items}>
        <div className={s.recipe_content_item}>
          <TitleSecondary title="Ингредиенты" className={s.recipe_content_title} />
          <CocktailIngredients ingredients={cocktail.ingredients} />
        </div>
        <div className={s.recipe_content_item}>
          <TitleSecondary title="Приготовление" className={s.recipe_content_title} />
          <CocktailDirections directions={cocktail.directions} />
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
  )
}
